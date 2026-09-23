/**
 * GymCopilot Backend - Gestión de Chats, Horarios, Tienda e Identidad
 * Versión v5.9.1: Soporte para Planes de Membresía + ORDEN SEGURO DE COLUMNAS.
 */

// ID de la planilla inyectado por la app Android al crear el backend.
var SS_ID_FROM_APP = '';

function setup() {
  var ss = getSS();
  var sheets = ["Asistencia", "Alumnos", "Profesores", "Horarios", "Chats", "Rutinas", "Tienda", "Configuracion", "Planes"];
  sheets.forEach(function(name) {
    getOrCreateSheet(ss, name);
  });
  return "Hojas inicializadas correctamente.";
}

function doGet(e) {
  try {
    var ss = getSS();

    // Soporte para inicialización remota (Warm-up call)
    if (e.parameter.action === "setup") {
      var msg = setup();
      return createJsonResponse({ "status": "success", "message": msg });
    }

    var type = (e.parameter.type || "asistencia").toLowerCase();

    if (type === "all") {
      var result = {
        "config": getSheetData(ss, "Configuracion", fixConfigSheetStructure),
        "plans": getSheetData(ss, "Planes"),
        "members": getSheetData(ss, "Alumnos", fixMemberSheetStructure),
        "professors": getSheetData(ss, "Profesores", fixProfessorSheetStructure),
        "schedules": getSheetData(ss, "Horarios", fixScheduleSheetStructure),
        "routines": getSheetData(ss, "Rutinas", fixRoutineSheetStructure),
        "store": getSheetData(ss, "Tienda")
      };
      return createJsonResponse({ "status": "success", "data": result });
    }

    var sheetName = getSheetName(type);
    var sheet = getOrCreateSheet(ss, sheetName);

    if (sheetName === "Chats") fixChatSheetStructure(sheet);
    if (sheetName === "Rutinas") fixRoutineSheetStructure(sheet);
    if (sheetName === "Configuracion") fixConfigSheetStructure(sheet);
    if (sheetName === "Horarios") fixScheduleSheetStructure(sheet);
    if (sheetName === "Profesores") fixProfessorSheetStructure(sheet);
    if (sheetName === "Alumnos") fixMemberSheetStructure(sheet);

    var data = sheet.getDataRange().getValues();
    return createJsonResponse({ "status": "success", "data": data });
  } catch (err) {
    return createJsonResponse({ "status": "error", "message": err.toString() });
  }
}

function getSheetName(type) {
  var mapping = {
    "schedules":  "Horarios",
    "chats":      "Chats",
    "members":    "Alumnos",
    "professors": "Profesores",
    "store":      "Tienda",
    "routines":   "Rutinas",
    "config":     "Configuracion",
    "plans":      "Planes"
  };
  return mapping[type] || "Asistencia";
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
    var ss   = getSS();
    var data = JSON.parse(e.postData.contents);
    var action = data.action;

    if (action === "update_gym_info") {
      var sheet = getOrCreateSheet(ss, "Configuracion");
      fixConfigSheetStructure(sheet);
      updateRow(sheet, "GYM_CONFIG", 0, [
        "GYM_CONFIG",
        data.name || "",
        data.logoUri || "",
        data.phone || "",
        data.address || "",
        data.city || "",
        data.zip || "",
        data.country || "",
        (data.accentColor === 0 || data.accentColor) ? data.accentColor : "",
        (data.backgroundColor === 0 || data.backgroundColor) ? data.backgroundColor : "",
        (data.buttonStyle === 0 || data.buttonStyle) ? data.buttonStyle : "",
        data.showLogoBorder === false ? false : true,
        data.classInSession || false,
        data.broadcastMessage || "",
        data.gymIsOpen === false ? false : true,
        data.wifiSsid || "",
        data.wifiSsid2 || "",
        data.wifiSsid3 || "",
        new Date()
      ]);
      return createJsonResponse({ "status": "success" });
    }

    if (action === "update_plans") {
      var sheet = getOrCreateSheet(ss, "Planes");
      var plans = data.plans || [];
      sheet.clearContents();
      sheet.appendRow(["ID", "Nombre", "Precio", "Duracion_Dias", "Descripcion", "Actualizado"]);
      plans.forEach(function(p) {
        sheet.appendRow([p.id, p.name, p.price, p.durationDays, p.description || "", new Date()]);
      });
      return createJsonResponse({ "status": "success" });
    }

    if (action === "update_product") {
      updateRow(getOrCreateSheet(ss, "Tienda"), data.id, 0, [data.id, data.name, data.price, data.categoryId, data.imageUri || "", data.description || "", data.contactMethod || "", data.contactPhone || "", data.bannerType || "", data.bannerText || "", new Date()]);
      return createJsonResponse({ "status": "success" });
    }

    if (action === "delete_product") {
      var sheet = getOrCreateSheet(ss, "Tienda");
      var values = sheet.getDataRange().getValues();
      var idToDelete = String(data.id).trim().toLowerCase();
      for (var i = values.length - 1; i >= 1; i--) {
        if (String(values[i][0]).trim().toLowerCase() === idToDelete) sheet.deleteRow(i + 1);
      }
      SpreadsheetApp.flush();
      return createJsonResponse({ "status": "success" });
    }

    if (action === "send_chat_message") {
      var sheet = getOrCreateSheet(ss, "Chats");
      fixChatSheetStructure(sheet);
      sheet.appendRow([data.gymId, data.sender, data.recipient, data.text, data.timestamp, new Date()]);
      SpreadsheetApp.flush();
      return createJsonResponse({ "status": "success" });
    }

    if (action === "update_schedule") {
      var sheet = getOrCreateSheet(ss, "Horarios");
      fixScheduleSheetStructure(sheet);
      var professorId = String(data.professorId).trim();
      var schedules = (typeof data.schedulesJson === "string") ? JSON.parse(data.schedulesJson) : (data.schedulesJson || []);
      var v = sheet.getDataRange().getValues();
      for (var i = v.length - 1; i >= 1; i--) { if (String(v[i][0]).trim() === professorId) sheet.deleteRow(i + 1); }
      schedules.forEach(function(item) {
        var members = (item.assignedMemberEmails || []).join(",");
        sheet.appendRow([professorId, item.date || item.dayOfWeek || "", item.startTime, item.endTime, item.eventName, members, new Date()]);
      });
      SpreadsheetApp.flush();
      return createJsonResponse({ "status": "success" });
    }

    if (action === "check_in") {
      getOrCreateSheet(ss, "Asistencia").appendRow([new Date(), data.gymId, data.memberEmail, data.timestamp]);
      return createJsonResponse({ "status": "success" });
    }

    if (action === "update_profile") {
      var sheet = getOrCreateSheet(ss, "Profesores");
      fixProfessorSheetStructure(sheet);
      updateRow(sheet, data.professorId, 0, [
        data.professorId,
        data.firstName,
        data.lastName,
        data.email,
        data.specialty,
        data.profileColor,
        data.photoUri || "",
        new Date()
      ]);
      return createJsonResponse({ "status": "success" });
    }

    if (action === "update_member") {
      var sheet = getOrCreateSheet(ss, "Alumnos");
      fixMemberSheetStructure(sheet);
      updateRow(sheet, data.email, 2, [
        data.firstName,
        data.lastName,
        data.email,
        data.membershipStatus || "DEUDOR",
        data.phone || "",
        data.address || "",
        data.weight || "",
        data.height || "",
        data.photoUri || "",
        new Date(), // Actualizado en columna J (index 9)
        data.nextRenewalDate || "",
        data.planId || "",
        data.planType || "",
        data.assignedTrainer || ""
      ]);
      return createJsonResponse({ "status": "success" });
    }

    if (action === "add_routine" || action === "update_routine" || action === "sync_member_routine") {
      var sheet = getOrCreateSheet(ss, "Rutinas");
      fixRoutineSheetStructure(sheet);
      var values = sheet.getDataRange().getValues();

      var payload = data.data || data;
      var memberEmail = payload.memberEmail;
      var routineId = payload.routineId;
      var routineJson = payload.routine || payload.routineJson;
      var professorId = payload.professorId;

      var s = payload.status;
      var statusVal = (s === "Completada" || s === 1 || s === "1" || s === true || s === "true") ? 1 : 0;

      var email = String(memberEmail || "").trim().toLowerCase();
      var rId = String(routineId || "").trim();

      if (!rId && routineJson) {
        try { rId = JSON.parse(routineJson).id; } catch(e) {}
      }

      var rowData = [new Date(), email, professorId, statusVal, routineJson];

      var matched = false;
      for (var i = 1; i < values.length; i++) {
        var rowEmail = String(values[i][1]).trim().toLowerCase();
        var rowRoutine = String(values[i][4] || "");

        if (rowEmail === email && (rId === "" || rowRoutine.indexOf(rId) !== -1)) {
          sheet.getRange(i + 1, 1, 1, 5).setValues([[rowData[0], rowData[1], rowData[2], rowData[3], rowData[4]]]);
          matched = true;
          break;
        }
      }

      if (!matched) {
        sheet.appendRow(rowData);
      }
      SpreadsheetApp.flush();
      return createJsonResponse({ "status": "success", "applied_status": statusVal });
    }

    if (action === "delete_routine") {
      var sheet = getOrCreateSheet(ss, "Rutinas");
      fixRoutineSheetStructure(sheet);
      var values = sheet.getDataRange().getValues();
      var email = String(data.memberEmail).trim().toLowerCase();
      var routineId = String(data.routineId).trim();
      var deletedCount = 0;
      for (var i = values.length - 1; i >= 1; i--) {
        var rowEmail = String(values[i][1]).trim().toLowerCase();
        var rowRoutine = String(values[i][4] || "");
        if (rowEmail === email && rowRoutine.indexOf(routineId) !== -1) {
          sheet.deleteRow(i + 1);
          deletedCount++;
        }
      }
      SpreadsheetApp.flush();
      return createJsonResponse({ "status": "success", "deleted": deletedCount });
    }

    return createJsonResponse({ "status": "error", "message": "Acción no reconocida: " + action });
  } catch(error) {
    return createJsonResponse({ "status": "error", "message": error.toString() });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Busca o crea la base de datos (Hoja de Cálculo).
 */
function getSS() {
  var prop = PropertiesService.getScriptProperties();
  var ssId = prop.getProperty("SS_ID");

  if (typeof SS_ID_FROM_APP !== 'undefined' && SS_ID_FROM_APP) {
    try {
      var ss = SpreadsheetApp.openById(SS_ID_FROM_APP);
      prop.setProperty("SS_ID", SS_ID_FROM_APP);
      return ss;
    } catch (e) {}
  }

  if (ssId) {
    try {
      return SpreadsheetApp.openById(ssId);
    } catch (e) {}
  }

  try {
    var activeSS = SpreadsheetApp.getActiveSpreadsheet();
    if (activeSS) {
      prop.setProperty("SS_ID", activeSS.getId());
      return activeSS;
    }
  } catch (e) {}

  var name = "GymCopilot_DB_New";
  var newSS = SpreadsheetApp.create(name);
  prop.setProperty("SS_ID", newSS.getId());
  return newSS;
}

function updateRow(sheet, id, idColIndex, rowData) {
  var values = sheet.getDataRange().getValues();
  var searchId = String(id).trim().toLowerCase();

  // Caso especial para Configuración: Si hay una fila pero el ID está mal (ej: I_CONFIG)
  if (id === "GYM_CONFIG" && values.length === 2) {
    sheet.getRange(2, 1, 1, rowData.length).setValues([rowData]);
    return;
  }

  for (var i = 1; i < values.length; i++) {
    if (String(values[i][idColIndex]).trim().toLowerCase() === searchId) {
      sheet.getRange(i + 1, 1, 1, rowData.length).setValues([rowData]);
      return;
    }
  }
  sheet.appendRow(rowData);
}

function getSheetData(ss, name, fixFunction) {
  var sheet = getOrCreateSheet(ss, name);
  if (fixFunction) fixFunction(sheet);
  return sheet.getDataRange().getValues();
}

function getOrCreateSheet(ss, name) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    var headers = {
      "Asistencia": ["Fecha_Servidor", "Gimnasio", "Email_Miembro", "Timestamp_App"],
      "Alumnos":    ["Nombre", "Apellido", "Email", "Estado", "Teléfono", "Dirección", "Peso", "Altura", "Foto", "Actualizado", "Membresia_Vence", "Plan_ID", "Plan_Nombre", "Profesor_Asignado"],
      "Profesores": ["ID_Profesor", "Nombre", "Apellido", "Email", "Especialidad", "Color", "Foto", "Actualizado"],
      "Horarios":   ["ID_Profesor", "Día/Fecha", "Inicio", "Fin", "Evento", "Alumnos", "Actualizado"],
      "Chats":      ["Gimnasio", "Remitente", "Destinatario", "Mensaje", "Timestamp", "Fecha_Servidor"],
      "Rutinas":    ["Fecha", "Email_Alumno", "ID_Profesor", "Estado", "Rutina"],
      "Tienda":     ["ID", "Nombre", "Precio", "Categoría", "Imagen", "Descripción", "Contacto_Metodo", "Contacto_Tel", "Banner_Tipo", "Banner_Texto", "Actualizado"],
      "Configuracion": ["ID", "Nombre", "Logo", "Telefono", "Direccion", "Ciudad", "CP", "Pais", "Color", "BgColor", "ButtonStyle", "MostrarBordeLogo", "ClaseActiva", "Mensaje", "GimnasioAbierto", "WifiSSID1", "WifiSSID2", "WifiSSID3", "Actualizado"],
      "Planes":     ["ID", "Nombre", "Precio", "Duracion_Dias", "Descripcion", "Actualizado"]
    };
    if (headers[name]) sheet.appendRow(headers[name]);
  }
  return sheet;
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function fixChatSheetStructure(sheet) {
  var lastCol = sheet.getLastColumn();
  if (lastCol === 0) return;
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  if (headers[0] !== "Gimnasio") {
    sheet.insertColumnBefore(1);
    sheet.getRange(1, 1).setValue("Gimnasio");
    SpreadsheetApp.flush();
  }
}

function fixScheduleSheetStructure(sheet) {
  var lastCol = sheet.getLastColumn();
  if (lastCol === 0) return;
  var range = sheet.getRange(1, 1, 1, Math.max(lastCol, 7));
  var headers = range.getValues()[0];
  if (headers.length < 7 || headers[5] !== "Alumnos") {
    sheet.insertColumnBefore(6);
    sheet.getRange(1, 6).setValue("Alumnos");
    SpreadsheetApp.flush();
  }
}

function fixRoutineSheetStructure(sheet) {
  var lastCol = sheet.getLastColumn();
  if (lastCol === 0) return;
  var range = sheet.getRange(1, 1, 1, Math.max(lastCol, 5));
  var headers = range.getValues()[0];

  if (headers[3] !== "Estado") {
    if (headers[3] === "Rutina" || headers[3] === "" || lastCol < 5) {
      sheet.insertColumnBefore(4);
      sheet.getRange(1, 4).setValue("Estado");
      var lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        var estadoRange = sheet.getRange(2, 4, lastRow - 1, 1);
        var estadoValues = estadoRange.getValues();
        var changed = false;
        for (var i = 0; i < estadoValues.length; i++) {
          if (estadoValues[i][0] === "") {
            estadoValues[i][0] = 0;
            changed = true;
          }
        }
        if (changed) estadoRange.setValues(estadoValues);
      }
      SpreadsheetApp.flush();
    } else {
      sheet.getRange(1, 1, 1, 5).setValues([["Fecha", "Email_Alumno", "ID_Profesor", "Estado", "Rutina"]]);
      SpreadsheetApp.flush();
    }
  }
}

function fixConfigSheetStructure(sheet) {
  var expectedHeaders = ["ID", "Nombre", "Logo", "Telefono", "Direccion", "Ciudad", "CP", "Pais", "Color", "BgColor", "ButtonStyle", "MostrarBordeLogo", "ClaseActiva", "Mensaje", "GimnasioAbierto", "WifiSSID1", "WifiSSID2", "WifiSSID3", "Actualizado"];

  for (var i = 0; i < expectedHeaders.length; i++) {
    var cell = sheet.getRange(1, i + 1);
    var headerName = cell.getValue();

    if (String(headerName).toLowerCase().trim() !== expectedHeaders[i].toLowerCase().trim()) {
      // Si no es la columna esperada, insertamos una nueva columna física en esta posición
      sheet.insertColumnBefore(i + 1);
      sheet.getRange(1, i + 1).setValue(expectedHeaders[i]);
      SpreadsheetApp.flush();
    }
  }

  // Limpiar posibles filas con IDs incorrectos (como I_CONFIG)
  var values = sheet.getDataRange().getValues();
  if (values.length > 1) {
    for (var j = values.length - 1; j >= 1; j--) {
      var idVal = String(values[j][0]).toUpperCase();
      // Si el ID no es el estándar, pero es la única fila, la corregiremos luego en updateRow
      // O si hay duplicados basura, los borramos.
      if (idVal !== "GYM_CONFIG" && values.length > 2) {
        sheet.deleteRow(j + 1);
      }
    }
  }
}

function fixProfessorSheetStructure(sheet) {
  var expectedHeaders = ["ID_Profesor", "Nombre", "Apellido", "Email", "Especialidad", "Color", "Foto", "Actualizado"];
  for (var i = 0; i < expectedHeaders.length; i++) {
    var cell = sheet.getRange(1, i + 1);
    var headerName = cell.getValue();
    if (String(headerName).toLowerCase().trim() !== expectedHeaders[i].toLowerCase().trim()) {
      sheet.insertColumnBefore(i + 1);
      sheet.getRange(1, i + 1).setValue(expectedHeaders[i]);
      SpreadsheetApp.flush();
    }
  }
}

function fixMemberSheetStructure(sheet) {
  var expectedHeaders = ["Nombre", "Apellido", "Email", "Estado", "Teléfono", "Dirección", "Peso", "Altura", "Foto", "Actualizado", "Membresia_Vence", "Plan_ID", "Plan_Nombre", "Profesor_Asignado"];
  for (var i = 0; i < expectedHeaders.length; i++) {
    var cell = sheet.getRange(1, i + 1);
    var headerName = cell.getValue();
    if (String(headerName).toLowerCase().trim() !== expectedHeaders[i].toLowerCase().trim()) {
      sheet.insertColumnBefore(i + 1);
      sheet.getRange(1, i + 1).setValue(expectedHeaders[i]);
      SpreadsheetApp.flush();
    }
  }
}

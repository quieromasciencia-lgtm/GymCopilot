(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'skiko-kjs'.");
    }
    globalThis['skiko-kjs'] = factory(typeof globalThis['skiko-kjs'] === 'undefined' ? {} : globalThis['skiko-kjs'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.g9;
  var objectCreate = kotlin_kotlin.$_$.f9;
  var initMetadataForClass = kotlin_kotlin.$_$.p8;
  var initMetadataForObject = kotlin_kotlin.$_$.u8;
  var VOID = kotlin_kotlin.$_$.d;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q8;
  var ensureNotNull = kotlin_kotlin.$_$.uc;
  var Enum = kotlin_kotlin.$_$.ac;
  var charSequenceGet = kotlin_kotlin.$_$.b8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e2;
  var toShort = kotlin_kotlin.$_$.i9;
  var toString = kotlin_kotlin.$_$.j9;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var equals = kotlin_kotlin.$_$.g8;
  var hashCode = kotlin_kotlin.$_$.o8;
  var toString_0 = kotlin_kotlin.$_$.nd;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.cd;
  var toBits = kotlin_kotlin.$_$.kd;
  var compareTo = kotlin_kotlin.$_$.e8;
  var THROW_CCE = kotlin_kotlin.$_$.kc;
  var isCharSequence = kotlin_kotlin.$_$.x8;
  var trim = kotlin_kotlin.$_$.sb;
  var split = kotlin_kotlin.$_$.mb;
  var getOrNull = kotlin_kotlin.$_$.z4;
  var toIntOrNull = kotlin_kotlin.$_$.ob;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.k2;
  var fillArrayVal = kotlin_kotlin.$_$.h8;
  var splitToSequence = kotlin_kotlin.$_$.lb;
  var mapNotNull = kotlin_kotlin.$_$.ra;
  var toList = kotlin_kotlin.$_$.va;
  var copyToArray = kotlin_kotlin.$_$.j4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.l2;
  var uintCompare = kotlin_kotlin.$_$.pd;
  var UInt = kotlin_kotlin.$_$.nc;
  var isNaN_0 = kotlin_kotlin.$_$.yc;
  var numberToChar = kotlin_kotlin.$_$.c9;
  var charArrayOf = kotlin_kotlin.$_$.z7;
  var concatToString = kotlin_kotlin.$_$.xa;
  var initMetadataForInterface = kotlin_kotlin.$_$.s8;
  var decodeToString = kotlin_kotlin.$_$.za;
  var contentEquals = kotlin_kotlin.$_$.c4;
  var contentHashCode = kotlin_kotlin.$_$.e4;
  var contentHashCode_0 = kotlin_kotlin.$_$.d4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var NotImplementedError = kotlin_kotlin.$_$.hc;
  var last = kotlin_kotlin.$_$.q5;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.s2;
  var floatFromBits = kotlin_kotlin.$_$.i8;
  var joinToString = kotlin_kotlin.$_$.f5;
  var Error_init_$Create$ = kotlin_kotlin.$_$.e1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var until = kotlin_kotlin.$_$.ia;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var getBooleanHashCode = kotlin_kotlin.$_$.j8;
  var toBits_0 = kotlin_kotlin.$_$.ld;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var getNumberHashCode = kotlin_kotlin.$_$.l8;
  var RuntimeException = kotlin_kotlin.$_$.jc;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.y7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var toIntArray = kotlin_kotlin.$_$.q6;
  var defineProp = kotlin_kotlin.$_$.f8;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.z;
  var charSequenceLength = kotlin_kotlin.$_$.c8;
  var lazy = kotlin_kotlin.$_$.bd;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var plus = kotlin_kotlin.$_$.dd;
  var toString_1 = kotlin_kotlin.$_$.qb;
  var numberToLong = kotlin_kotlin.$_$.e9;
  var contains = kotlin_kotlin.$_$.ya;
  var encodeToByteArray = kotlin_kotlin.$_$.ab;
  var copyOf = kotlin_kotlin.$_$.g4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Native, 'Native');
  initMetadataForClass(Managed, 'Managed', VOID, Native);
  initMetadataForClass(BBHFactory, 'BBHFactory', VOID, Managed);
  initMetadataForClass(RTreeFactory, 'RTreeFactory', RTreeFactory_init_$Create$, BBHFactory);
  initMetadataForObject(_FinalizerHolder, '_FinalizerHolder');
  initMetadataForCompanion(Companion);
  initMetadataForObject(_FinalizerHolder_0, '_FinalizerHolder');
  initMetadataForClass(BackendRenderTarget, 'BackendRenderTarget', VOID, Managed);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject(_FinalizerHolder_1, '_FinalizerHolder');
  function get_width() {
    return this.t3f().z3f_1;
  }
  function get_height() {
    return this.t3f().a3g_1;
  }
  function get_colorType() {
    return this.t3f().y3f_1.b3g_1;
  }
  function get_colorSpace() {
    return this.t3f().y3f_1.d3g_1;
  }
  function get_isOpaque() {
    return this.t3f().y3f_1.i3g();
  }
  initMetadataForInterface(IHasImageInfo, 'IHasImageInfo');
  initMetadataForClass(Bitmap, 'Bitmap', Bitmap_init_$Create$, Managed, [Managed, IHasImageInfo]);
  initMetadataForClass(BlendMode, 'BlendMode', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject(_FinalizerHolder_2, '_FinalizerHolder');
  initMetadataForClass(BreakIterator, 'BreakIterator', VOID, Managed);
  initMetadataForCompanion(Companion_2);
  initMetadataForObject(_FinalizerHolder_3, '_FinalizerHolder');
  initMetadataForClass(Canvas, 'Canvas', VOID, Managed);
  initMetadataForClass(ClipMode, 'ClipMode', VOID, Enum);
  initMetadataForClass(ColorAlphaType, 'ColorAlphaType', VOID, Enum);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(RefCnt, 'RefCnt', VOID, Managed);
  initMetadataForClass(ColorFilter, 'ColorFilter', VOID, RefCnt);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ColorInfo, 'ColorInfo');
  initMetadataForCompanion(Companion_5);
  initMetadataForObject(_FinalizerHolder_4, '_FinalizerHolder');
  initMetadataForClass(ColorSpace, 'ColorSpace', VOID, Managed);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ColorType, 'ColorType', VOID, Enum);
  initMetadataForClass(CubicResampler, 'CubicResampler');
  initMetadataForCompanion(Companion_7);
  initMetadataForObject(_FinalizerHolder_5, '_FinalizerHolder');
  initMetadataForClass(Data, 'Data', VOID, Managed);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(DirectContext, 'DirectContext', VOID, RefCnt);
  initMetadataForClass(FilterMipmap, 'FilterMipmap');
  initMetadataForClass(FilterMode, 'FilterMode', VOID, Enum);
  initMetadataForClass(FilterTileMode, 'FilterTileMode', VOID, Enum);
  initMetadataForCompanion(Companion_9);
  initMetadataForObject(_FinalizerHolder_6, '_FinalizerHolder');
  initMetadataForClass(Font, 'Font', Font_init_$Create$, Managed);
  initMetadataForClass(FontEdging, 'FontEdging', VOID, Enum);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(FontFeature, 'FontFeature');
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(FontMetrics, 'FontMetrics');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(FontMgr, 'FontMgr', VOID, RefCnt);
  initMetadataForClass(FontMgrWithFallback, 'FontMgrWithFallback', VOID, FontMgr);
  initMetadataForClass(FontSlant, 'FontSlant', VOID, Enum);
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(GradientStyle, 'GradientStyle');
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(IRange, 'IRange');
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(Image, 'Image', VOID, RefCnt, [RefCnt, IHasImageInfo]);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(ImageInfo, 'ImageInfo');
  initMetadataForCompanion(Companion_19);
  initMetadataForObject(_FinalizerHolder_7, '_FinalizerHolder');
  initMetadataForClass(ManagedString, 'ManagedString', VOID, Managed);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(Matrix33, 'Matrix33');
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(Matrix44, 'Matrix44');
  initMetadataForClass(MipmapMode, 'MipmapMode', VOID, Enum);
  initMetadataForCompanion(Companion_22);
  initMetadataForObject(_FinalizerHolder_8, '_FinalizerHolder');
  initMetadataForClass(Paint, 'Paint', Paint_init_$Create$, Managed);
  initMetadataForClass(PaintMode, 'PaintMode', VOID, Enum);
  initMetadataForClass(PaintStrokeCap, 'PaintStrokeCap', VOID, Enum);
  initMetadataForClass(PaintStrokeJoin, 'PaintStrokeJoin', VOID, Enum);
  initMetadataForCompanion(Companion_23);
  initMetadataForObject(_FinalizerHolder_9, '_FinalizerHolder');
  initMetadataForClass(Path, 'Path', Path_init_$Create$, Managed);
  initMetadataForClass(PathDirection, 'PathDirection', VOID, Enum);
  initMetadataForClass(PathFillMode, 'PathFillMode', VOID, Enum);
  initMetadataForCompanion(Companion_24);
  initMetadataForObject(_FinalizerHolder_10, '_FinalizerHolder');
  initMetadataForClass(PathMeasure, 'PathMeasure', PathMeasure_init_$Create$, Managed);
  initMetadataForClass(PathOp, 'PathOp', VOID, Enum);
  initMetadataForClass(PathSegment, 'PathSegment', PathSegment);
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(PathSegmentIterator, 'PathSegmentIterator', VOID, Managed);
  initMetadataForClass(PathVerb, 'PathVerb', VOID, Enum);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(Picture, 'Picture', VOID, RefCnt);
  initMetadataForCompanion(Companion_27);
  initMetadataForObject(_FinalizerHolder_11, '_FinalizerHolder');
  initMetadataForClass(PictureRecorder, 'PictureRecorder', PictureRecorder_init_$Create$, Managed);
  initMetadataForClass(PixelGeometry, 'PixelGeometry', VOID, Enum);
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(Point, 'Point');
  initMetadataForClass(Point3, 'Point3');
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForClass(RRect, 'RRect', VOID, Rect);
  initMetadataForCompanion(Companion_30);
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(Shader, 'Shader', VOID, RefCnt);
  initMetadataForObject(ShadowUtils, 'ShadowUtils');
  initMetadataForClass(ArrayDecoder, 'ArrayDecoder');
  initMetadataForCompanion(Companion_32);
  initMetadataForClass(Surface, 'Surface', VOID, RefCnt);
  initMetadataForClass(SurfaceColorFormat, 'SurfaceColorFormat', VOID, Enum);
  initMetadataForClass(SurfaceOrigin, 'SurfaceOrigin', VOID, Enum);
  initMetadataForClass(SurfaceProps, 'SurfaceProps', SurfaceProps);
  initMetadataForCompanion(Companion_33);
  initMetadataForClass(Typeface, 'Typeface', VOID, RefCnt);
  initMetadataForCompanion(Companion_34);
  initMetadataForObject(_FinalizerHolder_12, '_FinalizerHolder');
  initMetadataForClass(U16String, 'U16String', VOID, Managed);
  initMetadataForObject(CharDirection, 'CharDirection');
  initMetadataForClass(Affinity, 'Affinity', VOID, Enum);
  initMetadataForClass(Alignment, 'Alignment', VOID, Enum);
  initMetadataForClass(BaselineMode, 'BaselineMode', VOID, Enum);
  initMetadataForClass(DecorationLineStyle, 'DecorationLineStyle', VOID, Enum);
  initMetadataForCompanion(Companion_35);
  initMetadataForClass(DecorationStyle, 'DecorationStyle');
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForCompanion(Companion_36);
  initMetadataForClass(FontCollection, 'FontCollection', FontCollection_init_$Create$, RefCnt);
  initMetadataForClass(FontRastrSettings, 'FontRastrSettings');
  initMetadataForClass(HeightMode, 'HeightMode', VOID, Enum);
  initMetadataForCompanion(Companion_37);
  initMetadataForClass(LineMetrics, 'LineMetrics');
  initMetadataForCompanion(Companion_38);
  initMetadataForObject(_FinalizerHolder_13, '_FinalizerHolder');
  initMetadataForClass(Paragraph, 'Paragraph', VOID, Managed);
  initMetadataForCompanion(Companion_39);
  initMetadataForObject(_FinalizerHolder_14, '_FinalizerHolder');
  initMetadataForClass(ParagraphBuilder, 'ParagraphBuilder', VOID, Managed);
  initMetadataForCompanion(Companion_40);
  initMetadataForObject(_FinalizerHolder_15, '_FinalizerHolder');
  initMetadataForClass(ParagraphStyle, 'ParagraphStyle', ParagraphStyle, Managed);
  initMetadataForClass(PlaceholderAlignment, 'PlaceholderAlignment', VOID, Enum);
  initMetadataForClass(PlaceholderStyle, 'PlaceholderStyle');
  initMetadataForClass(PositionWithAffinity, 'PositionWithAffinity');
  initMetadataForClass(RectHeightMode, 'RectHeightMode', VOID, Enum);
  initMetadataForClass(RectWidthMode, 'RectWidthMode', VOID, Enum);
  initMetadataForCompanion(Companion_41);
  initMetadataForClass(Shadow, 'Shadow');
  initMetadataForCompanion(Companion_42);
  initMetadataForClass(TextBox, 'TextBox');
  initMetadataForClass(TextIndent, 'TextIndent', TextIndent);
  initMetadataForCompanion(Companion_43);
  initMetadataForObject(_FinalizerHolder_16, '_FinalizerHolder');
  initMetadataForClass(TextStyle, 'TextStyle', TextStyle_init_$Create$, Managed);
  initMetadataForCompanion(Companion_44);
  initMetadataForClass(TypefaceFontProvider, 'TypefaceFontProvider', TypefaceFontProvider_init_$Create$, FontMgr);
  initMetadataForCompanion(Companion_45);
  initMetadataForClass(TypefaceFontProviderWithFallback, 'TypefaceFontProviderWithFallback', TypefaceFontProviderWithFallback_init_$Create$, TypefaceFontProvider);
  initMetadataForClass(GraphicsApi, 'GraphicsApi', VOID, Enum);
  initMetadataForClass(OS, 'OS', VOID, Enum);
  initMetadataForClass(Arch, 'Arch', VOID, Enum);
  initMetadataForClass(ClipboardManager, 'ClipboardManager', ClipboardManager);
  initMetadataForClass(URIManager, 'URIManager', URIManager);
  initMetadataForClass(RenderException, 'RenderException', RenderException, RuntimeException);
  initMetadataForClass(SystemTheme, 'SystemTheme', VOID, Enum);
  initMetadataForClass(InteropScope, 'InteropScope', InteropScope);
  initMetadataForClass(createWebGLContext$contextAttributes$1);
  initMetadataForClass(Pattern, 'Pattern');
  initMetadataForCompanion(Companion_46);
  initMetadataForClass(FinalizationThunk, 'FinalizationThunk');
  initMetadataForCompanion(Companion_47);
  initMetadataForClass(NativePointerArray, 'NativePointerArray');
  initMetadataForCompanion(Companion_48);
  initMetadataForObject(_FinalizerHolder_17, '_FinalizerHolder');
  initMetadataForObject(Stats, 'Stats');
  initMetadataForClass(CanvasRenderer, 'CanvasRenderer');
  initMetadataForClass(SkiaLayer$attachTo$1, VOID, VOID, CanvasRenderer);
  initMetadataForClass(SkiaLayer, 'SkiaLayer', SkiaLayer);
  //endregion
  function RTreeFactory_init_$Init$($this) {
    BBHFactory.call($this, org_jetbrains_skia_RTreeFactory__1nMake());
    RTreeFactory.call($this);
    Stats_instance.f3f();
    return $this;
  }
  function RTreeFactory_init_$Create$() {
    return RTreeFactory_init_$Init$(objectCreate(protoOf(RTreeFactory)));
  }
  function RTreeFactory() {
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.k3f_1 = org_jetbrains_skia_BBHFactory__1nGetFinalizer();
  }
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BBHFactory(ptr) {
    Managed.call(this, ptr, _FinalizerHolder_getInstance().k3f_1);
  }
  function Companion() {
    Companion_instance = this;
    Companion_instance_46.l3f();
  }
  protoOf(Companion).m3f = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_instance.f3f();
    var ptr = org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat);
    if (ptr === Companion_instance_48.n3f())
      throw new RenderException("Can't create OpenGL BackendRenderTarget");
    return new BackendRenderTarget(ptr);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.o3f_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_0().o3f_1);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Bitmap_init_$Init$($this) {
    Bitmap.call($this, org_jetbrains_skia_Bitmap__1nMake());
    Stats_instance.f3f();
    return $this;
  }
  function Bitmap_init_$Create$() {
    return Bitmap_init_$Init$(objectCreate(protoOf(Bitmap)));
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.p3f_1 = org_jetbrains_skia_Bitmap__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function _nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Bitmap__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = '_nGetImageInfo';
    return l;
  }
  function Bitmap(ptr) {
    Companion_getInstance_0();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().p3f_1);
    this.s3f_1 = null;
  }
  protoOf(Bitmap).t3f = function () {
    var tmp;
    try {
      if (this.s3f_1 == null) {
        var tmp_0 = this;
        var tmp_1 = Companion_getInstance_18();
        var tmp_2 = this.i3f_1;
        tmp_0.s3f_1 = tmp_1.v3f(tmp_2, _nGetImageInfo$ref());
      }
      tmp = ensureNotNull(this.s3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).w3f = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_Bitmap__1nIsImmutable(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).x3f = function (info, rowBytes) {
    var tmp;
    try {
      this.s3f_1 = null;
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes(this.i3f_1, info.z3f_1, info.a3g_1, info.y3f_1.b3g_1.s2_1, info.y3f_1.c3g_1.s2_1, getPtr(info.y3f_1.d3g_1), rowBytes);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(info.y3f_1.d3g_1);
    }
    return tmp;
  };
  protoOf(Bitmap).e3g = function (imageInfo) {
    return this.x3f(imageInfo, imageInfo.f3g());
  };
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  function values() {
    return [BlendMode_CLEAR_getInstance(), BlendMode_SRC_getInstance(), BlendMode_DST_getInstance(), BlendMode_SRC_OVER_getInstance(), BlendMode_DST_OVER_getInstance(), BlendMode_SRC_IN_getInstance(), BlendMode_DST_IN_getInstance(), BlendMode_SRC_OUT_getInstance(), BlendMode_DST_OUT_getInstance(), BlendMode_SRC_ATOP_getInstance(), BlendMode_DST_ATOP_getInstance(), BlendMode_XOR_getInstance(), BlendMode_PLUS_getInstance(), BlendMode_MODULATE_getInstance(), BlendMode_SCREEN_getInstance(), BlendMode_OVERLAY_getInstance(), BlendMode_DARKEN_getInstance(), BlendMode_LIGHTEN_getInstance(), BlendMode_COLOR_DODGE_getInstance(), BlendMode_COLOR_BURN_getInstance(), BlendMode_HARD_LIGHT_getInstance(), BlendMode_SOFT_LIGHT_getInstance(), BlendMode_DIFFERENCE_getInstance(), BlendMode_EXCLUSION_getInstance(), BlendMode_MULTIPLY_getInstance(), BlendMode_HUE_getInstance(), BlendMode_SATURATION_getInstance(), BlendMode_COLOR_getInstance(), BlendMode_LUMINOSITY_getInstance()];
  }
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_instance;
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function BreakIterator$Companion$makeCharacterInstance$lambda($locale) {
    return function ($this$withErrorGuard, it) {
      return org_jetbrains_skia_BreakIterator__1nMake(0, $this$withErrorGuard.l3g($locale), it);
    };
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.m3g_1 = -1;
    this.n3g_1 = 0;
    this.o3g_1 = 100;
    this.p3g_1 = 100;
    this.q3g_1 = 200;
    this.r3g_1 = 200;
    this.s3g_1 = 300;
    this.t3g_1 = 300;
    this.u3g_1 = 400;
    this.v3g_1 = 400;
    this.w3g_1 = 500;
    Companion_instance_46.l3f();
  }
  protoOf(Companion_1).x3g = function (locale) {
    Stats_instance.f3f();
    return new BreakIterator(withErrorGuard('Failed to create character iterator', BreakIterator$Companion$makeCharacterInstance$lambda(locale)));
  };
  protoOf(Companion_1).y3g = function (locale, $super) {
    locale = locale === VOID ? null : locale;
    return $super === VOID ? this.x3g(locale) : $super.x3g.call(this, locale);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.z3g_1 = org_jetbrains_skia_BreakIterator__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function BreakIterator$setText$lambda(this$0, $text) {
    return function ($this$withErrorGuard, it) {
      var tmp = this$0.i3f_1;
      var tmp_0;
      if ($text == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.jetbrains.skia.BreakIterator.setText.<anonymous>.<anonymous>' call
        var tmp_1 = 0;
        var tmp_2 = $text.length;
        var tmp_3 = new Int16Array(tmp_2);
        while (tmp_1 < tmp_2) {
          var tmp_4 = tmp_1;
          // Inline function 'kotlin.code' call
          var this_0 = charSequenceGet($text, tmp_4);
          var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
          tmp_3[tmp_4] = toShort(tmp$ret$0);
          tmp_1 = tmp_1 + 1 | 0;
        }
        tmp_0 = tmp_3;
      }
      var tmp_5 = $this$withErrorGuard.a3h(tmp_0);
      var tmp1_safe_receiver = $text;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.length;
      return org_jetbrains_skia_BreakIterator__1nSetText(tmp, tmp_5, tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, it);
    };
  }
  function BreakIterator(ptr) {
    Companion_getInstance_1();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_2().z3g_1);
    this.d3h_1 = null;
  }
  protoOf(BreakIterator).u1s = function () {
    protoOf(Managed).u1s.call(this);
    var tmp0_safe_receiver = this.d3h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u1s();
    }
  };
  protoOf(BreakIterator).e3h = function (offset) {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_BreakIterator__1nPreceding(this.i3f_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).f3h = function (offset) {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_BreakIterator__1nFollowing(this.i3f_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).g3h = function (text) {
    try {
      Stats_instance.f3f();
      var tmp0_safe_receiver = this.d3h_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.u1s();
      }
      var tmp = this;
      tmp.d3h_1 = new U16String(withErrorGuard('Failed to setText', BreakIterator$setText$lambda(this, text)));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.d3h_1);
    }
  };
  function withErrorGuard(message, block) {
    var errorCode = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.withErrorGuard.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.h3h(errorCode);
        var res = block($this$interopScope, handle);
        $this$interopScope.i3h(handle, errorCode);
        if (errorCode[0] > 0) {
          throw RuntimeException_init_$Create$(message + '; operation failed with status ' + toString(errorCode));
        }
        if (res === Companion_instance_48.n3f()) {
          throw IllegalArgumentException_init_$Create$(message);
        }
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return res;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Canvas_init_$Init$(bitmap, surfaceProps, $this) {
    surfaceProps = surfaceProps === VOID ? new SurfaceProps() : surfaceProps;
    Canvas.call($this, org_jetbrains_skia_Canvas__1nMakeFromBitmap(bitmap.i3f_1, surfaceProps.l3h(), surfaceProps.k3h_1.s2_1), true, bitmap);
    Stats_instance.f3f();
    reachabilityBarrier(bitmap);
    return $this;
  }
  function Canvas_init_$Create$(bitmap, surfaceProps) {
    return Canvas_init_$Init$(bitmap, surfaceProps, objectCreate(protoOf(Canvas)));
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.m3h_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_3().m3h_1, managed);
    this.p3h_1 = _owner;
  }
  protoOf(Canvas).q3h = function (x0, y0, x1, y1, paint) {
    Stats_instance.f3f();
    try {
      org_jetbrains_skia_Canvas__1nDrawLine(this.i3f_1, x0, y0, x1, y1, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).r3h = function (r, paint) {
    Stats_instance.f3f();
    try {
      org_jetbrains_skia_Canvas__1nDrawRect(this.i3f_1, r.s3h_1, r.t3h_1, r.u3h_1, r.v3h_1, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).w3h = function (x, y, radius, paint) {
    Stats_instance.f3f();
    try {
      org_jetbrains_skia_Canvas__1nDrawOval(this.i3f_1, x - radius, y - radius, x + radius, y + radius, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).x3h = function (r, paint) {
    Stats_instance.f3f();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_Canvas__1nDrawRRect(this.i3f_1, r.s3h_1, r.t3h_1, r.u3h_1, r.v3h_1, $this$interopScope.d3i(r.c3i_1), r.c3i_1.length, getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).e3i = function (path, paint) {
    Stats_instance.f3f();
    try {
      org_jetbrains_skia_Canvas__1nDrawPath(this.i3f_1, getPtr(path), getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).f3i = function (image, src, dst, samplingMode, paint, strict) {
    Stats_instance.f3f();
    try {
      org_jetbrains_skia_Canvas__1nDrawImageRect(this.i3f_1, getPtr(image), src.s3h_1, src.t3h_1, src.u3h_1, src.v3h_1, dst.s3h_1, dst.t3h_1, dst.u3h_1, dst.v3h_1, samplingMode.g3i(), samplingMode.h3i(), getPtr(paint), strict);
    }finally {
      reachabilityBarrier(image);
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).i3i = function (picture, matrix, paint) {
    Stats_instance.f3f();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var tmp = this.i3f_1;
          var tmp_0 = getPtr(picture);
          org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, $this$interopScope.d3i(matrix == null ? null : matrix.j3i_1), getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(picture);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).g32 = function (color) {
    Stats_instance.f3f();
    try {
      org_jetbrains_skia_Canvas__1nClear(this.i3f_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).k3i = function () {
    Stats_instance.f3f();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.i3f_1);
    return this;
  };
  protoOf(Canvas).l3i = function (r, mode, antiAlias) {
    Stats_instance.f3f();
    org_jetbrains_skia_Canvas__1nClipRect(this.i3f_1, r.s3h_1, r.t3h_1, r.u3h_1, r.v3h_1, mode.s2_1, antiAlias);
    return this;
  };
  protoOf(Canvas).m3i = function (r, mode, antiAlias) {
    Stats_instance.f3f();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        org_jetbrains_skia_Canvas__1nClipRRect(this.i3f_1, r.s3h_1, r.t3h_1, r.u3h_1, r.v3h_1, $this$interopScope.d3i(r.c3i_1), r.c3i_1.length, mode.s2_1, antiAlias);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).n3i = function (p, mode, antiAlias) {
    Stats_instance.f3f();
    try {
      org_jetbrains_skia_Canvas__1nClipPath(this.i3f_1, getPtr(p), mode.s2_1, antiAlias);
    }finally {
      reachabilityBarrier(p);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).k3c = function (dx, dy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        Stats_instance.f3f();
        org_jetbrains_skia_Canvas__1nTranslate(this.i3f_1, dx, dy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).o3i = function (sx, sy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        Stats_instance.f3f();
        org_jetbrains_skia_Canvas__1nScale(this.i3f_1, sx, sy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).p3i = function (matrix) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        Stats_instance.f3f();
        org_jetbrains_skia_Canvas__1nConcat44(this.i3f_1, $this$interopScope.d3i(matrix.q3i_1));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).r3i = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Canvas).s3i = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.i3f_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(Canvas).t3i = function () {
    Stats_instance.f3f();
    org_jetbrains_skia_Canvas__1nRestore(this.i3f_1);
    return this;
  };
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_instance;
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  var ColorAlphaType_UNKNOWN_instance;
  var ColorAlphaType_OPAQUE_instance;
  var ColorAlphaType_PREMUL_instance;
  var ColorAlphaType_UNPREMUL_instance;
  function values_0() {
    return [ColorAlphaType_UNKNOWN_getInstance(), ColorAlphaType_OPAQUE_getInstance(), ColorAlphaType_PREMUL_getInstance(), ColorAlphaType_UNPREMUL_getInstance()];
  }
  var ColorAlphaType_entriesInitialized;
  function ColorAlphaType_initEntries() {
    if (ColorAlphaType_entriesInitialized)
      return Unit_instance;
    ColorAlphaType_entriesInitialized = true;
    ColorAlphaType_UNKNOWN_instance = new ColorAlphaType('UNKNOWN', 0);
    ColorAlphaType_OPAQUE_instance = new ColorAlphaType('OPAQUE', 1);
    ColorAlphaType_PREMUL_instance = new ColorAlphaType('PREMUL', 2);
    ColorAlphaType_UNPREMUL_instance = new ColorAlphaType('UNPREMUL', 3);
  }
  function ColorAlphaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorAlphaType_UNKNOWN_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNKNOWN_instance;
  }
  function ColorAlphaType_OPAQUE_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_OPAQUE_instance;
  }
  function ColorAlphaType_PREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_PREMUL_instance;
  }
  function ColorAlphaType_UNPREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNPREMUL_instance;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    Companion_instance_46.l3f();
    this.u3i_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma(), false);
    this.v3i_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetLuma(), false);
  }
  protoOf(Companion_3).w3i = function (color, mode) {
    Stats_instance.f3f();
    return ColorFilter_init_$Create$(org_jetbrains_skia_ColorFilter__1nMakeBlend(color, mode.s2_1));
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$(ptr) {
    return ColorFilter_init_$Init$(ptr, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$_0(ptr, allowClose) {
    return ColorFilter_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter() {
    Companion_getInstance_3();
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.a3j_1 = new ColorInfo(ColorType_UNKNOWN_getInstance(), ColorAlphaType_UNKNOWN_getInstance(), null);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ColorInfo(colorType, alphaType, colorSpace) {
    Companion_getInstance_4();
    this.b3g_1 = colorType;
    this.c3g_1 = alphaType;
    this.d3g_1 = colorSpace;
  }
  protoOf(ColorInfo).i3g = function () {
    return this.c3g_1.equals(ColorAlphaType_OPAQUE_getInstance()) || this.b3g_1.d3j();
  };
  protoOf(ColorInfo).e3j = function () {
    return this.b3g_1.e3j();
  };
  protoOf(ColorInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ColorInfo))
      return false;
    if (!this.b3g_1.equals(other.b3g_1))
      return false;
    if (!this.c3g_1.equals(other.c3g_1))
      return false;
    return equals(this.d3g_1, other.d3g_1);
  };
  protoOf(ColorInfo).hashCode = function () {
    var prime = 59;
    var result = 1;
    result = imul(result, prime) + this.b3g_1.hashCode() | 0;
    result = imul(result, prime) + this.c3g_1.hashCode() | 0;
    var tmp = imul(result, prime);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.d3g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(ColorInfo).toString = function () {
    return 'ColorInfo(_colorType=' + this.b3g_1.toString() + ', _alphaType=' + this.c3g_1.toString() + ', _colorSpace=' + toString_0(this.d3g_1) + ')';
  };
  function Companion_5() {
    Companion_instance_5 = this;
    Companion_instance_46.l3f();
    this.f3j_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.g3j_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.h3j_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ColorSpace_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().i3j_1, true);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr) {
    return ColorSpace_init_$Init$(ptr, objectCreate(protoOf(ColorSpace)));
  }
  function ColorSpace_init_$Init$_0(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().i3j_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$_0(ptr, managed) {
    return ColorSpace_init_$Init$_0(ptr, managed, objectCreate(protoOf(ColorSpace)));
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.i3j_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function ColorSpace() {
    Companion_getInstance_5();
  }
  var ColorType_UNKNOWN_instance;
  var ColorType_ALPHA_8_instance;
  var ColorType_RGB_565_instance;
  var ColorType_ARGB_4444_instance;
  var ColorType_RGBA_8888_instance;
  var ColorType_RGB_888X_instance;
  var ColorType_BGRA_8888_instance;
  var ColorType_RGBA_1010102_instance;
  var ColorType_BGRA_1010102_instance;
  var ColorType_RGB_101010X_instance;
  var ColorType_BGR_101010X_instance;
  var ColorType_BGR_101010X_XR_instance;
  var ColorType_BGRA_10101010_XR_instance;
  var ColorType_RGBA_10x6_instance;
  var ColorType_GRAY_8_instance;
  var ColorType_RGBA_F16NORM_instance;
  var ColorType_RGBA_F16_instance;
  var ColorType_RGBA_F32_instance;
  var ColorType_R8G8_UNORM_instance;
  var ColorType_A16_FLOAT_instance;
  var ColorType_R16G16_FLOAT_instance;
  var ColorType_A16_UNORM_instance;
  var ColorType_R16G16_UNORM_instance;
  var ColorType_R16G16B16A16_UNORM_instance;
  function Companion_6() {
    Companion_instance_6 = this;
    this.j3j_1 = ColorType_BGRA_8888_getInstance();
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    ColorType_initEntries();
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function values_1() {
    return [ColorType_UNKNOWN_getInstance(), ColorType_ALPHA_8_getInstance(), ColorType_RGB_565_getInstance(), ColorType_ARGB_4444_getInstance(), ColorType_RGBA_8888_getInstance(), ColorType_RGB_888X_getInstance(), ColorType_BGRA_8888_getInstance(), ColorType_RGBA_1010102_getInstance(), ColorType_BGRA_1010102_getInstance(), ColorType_RGB_101010X_getInstance(), ColorType_BGR_101010X_getInstance(), ColorType_BGR_101010X_XR_getInstance(), ColorType_BGRA_10101010_XR_getInstance(), ColorType_RGBA_10x6_getInstance(), ColorType_GRAY_8_getInstance(), ColorType_RGBA_F16NORM_getInstance(), ColorType_RGBA_F16_getInstance(), ColorType_RGBA_F32_getInstance(), ColorType_R8G8_UNORM_getInstance(), ColorType_A16_FLOAT_getInstance(), ColorType_R16G16_FLOAT_getInstance(), ColorType_A16_UNORM_getInstance(), ColorType_R16G16_UNORM_getInstance(), ColorType_R16G16B16A16_UNORM_getInstance()];
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_instance;
    ColorType_entriesInitialized = true;
    ColorType_UNKNOWN_instance = new ColorType('UNKNOWN', 0);
    ColorType_ALPHA_8_instance = new ColorType('ALPHA_8', 1);
    ColorType_RGB_565_instance = new ColorType('RGB_565', 2);
    ColorType_ARGB_4444_instance = new ColorType('ARGB_4444', 3);
    ColorType_RGBA_8888_instance = new ColorType('RGBA_8888', 4);
    ColorType_RGB_888X_instance = new ColorType('RGB_888X', 5);
    ColorType_BGRA_8888_instance = new ColorType('BGRA_8888', 6);
    ColorType_RGBA_1010102_instance = new ColorType('RGBA_1010102', 7);
    ColorType_BGRA_1010102_instance = new ColorType('BGRA_1010102', 8);
    ColorType_RGB_101010X_instance = new ColorType('RGB_101010X', 9);
    ColorType_BGR_101010X_instance = new ColorType('BGR_101010X', 10);
    ColorType_BGR_101010X_XR_instance = new ColorType('BGR_101010X_XR', 11);
    ColorType_BGRA_10101010_XR_instance = new ColorType('BGRA_10101010_XR', 12);
    ColorType_RGBA_10x6_instance = new ColorType('RGBA_10x6', 13);
    ColorType_GRAY_8_instance = new ColorType('GRAY_8', 14);
    ColorType_RGBA_F16NORM_instance = new ColorType('RGBA_F16NORM', 15);
    ColorType_RGBA_F16_instance = new ColorType('RGBA_F16', 16);
    ColorType_RGBA_F32_instance = new ColorType('RGBA_F32', 17);
    ColorType_R8G8_UNORM_instance = new ColorType('R8G8_UNORM', 18);
    ColorType_A16_FLOAT_instance = new ColorType('A16_FLOAT', 19);
    ColorType_R16G16_FLOAT_instance = new ColorType('R16G16_FLOAT', 20);
    ColorType_A16_UNORM_instance = new ColorType('A16_UNORM', 21);
    ColorType_R16G16_UNORM_instance = new ColorType('R16G16_UNORM', 22);
    ColorType_R16G16B16A16_UNORM_instance = new ColorType('R16G16B16A16_UNORM', 23);
    Companion_getInstance_6();
  }
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorType).e3j = function () {
    var tmp;
    switch (this.s2_1) {
      case 0:
        tmp = 0;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 2;
        break;
      case 4:
        tmp = 4;
        break;
      case 6:
        tmp = 4;
        break;
      case 5:
        tmp = 4;
        break;
      case 7:
        tmp = 4;
        break;
      case 9:
        tmp = 4;
        break;
      case 8:
        tmp = 4;
        break;
      case 10:
        tmp = 4;
        break;
      case 11:
        tmp = 4;
        break;
      case 12:
        tmp = 4;
        break;
      case 13:
        tmp = 8;
        break;
      case 14:
        tmp = 1;
        break;
      case 15:
        tmp = 8;
        break;
      case 16:
        tmp = 8;
        break;
      case 17:
        tmp = 16;
        break;
      case 18:
        tmp = 2;
        break;
      case 21:
        tmp = 2;
        break;
      case 22:
        tmp = 4;
        break;
      case 19:
        tmp = 2;
        break;
      case 20:
        tmp = 4;
        break;
      case 23:
        tmp = 8;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorType).d3j = function () {
    return org_jetbrains_skia_ColorType__1nIsAlwaysOpaque(this.s2_1);
  };
  function ColorType_UNKNOWN_getInstance() {
    ColorType_initEntries();
    return ColorType_UNKNOWN_instance;
  }
  function ColorType_ALPHA_8_getInstance() {
    ColorType_initEntries();
    return ColorType_ALPHA_8_instance;
  }
  function ColorType_RGB_565_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_565_instance;
  }
  function ColorType_ARGB_4444_getInstance() {
    ColorType_initEntries();
    return ColorType_ARGB_4444_instance;
  }
  function ColorType_RGBA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_8888_instance;
  }
  function ColorType_RGB_888X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_888X_instance;
  }
  function ColorType_BGRA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_8888_instance;
  }
  function ColorType_RGBA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_1010102_instance;
  }
  function ColorType_BGRA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_1010102_instance;
  }
  function ColorType_RGB_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_101010X_instance;
  }
  function ColorType_BGR_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_instance;
  }
  function ColorType_BGR_101010X_XR_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_XR_instance;
  }
  function ColorType_BGRA_10101010_XR_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_10101010_XR_instance;
  }
  function ColorType_RGBA_10x6_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_10x6_instance;
  }
  function ColorType_GRAY_8_getInstance() {
    ColorType_initEntries();
    return ColorType_GRAY_8_instance;
  }
  function ColorType_RGBA_F16NORM_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16NORM_instance;
  }
  function ColorType_RGBA_F16_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16_instance;
  }
  function ColorType_RGBA_F32_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F32_instance;
  }
  function ColorType_R8G8_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R8G8_UNORM_instance;
  }
  function ColorType_A16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_FLOAT_instance;
  }
  function ColorType_R16G16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_FLOAT_instance;
  }
  function ColorType_A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_UNORM_instance;
  }
  function ColorType_R16G16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_UNORM_instance;
  }
  function ColorType_R16G16B16A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16B16A16_UNORM_instance;
  }
  function CubicResampler(b, c) {
    this.k3j_1 = b;
    this.l3j_1 = c;
  }
  protoOf(CubicResampler).g3i = function () {
    return toBits(this.k3j_1) | -2147483648;
  };
  protoOf(CubicResampler).h3i = function () {
    return toBits(this.l3j_1);
  };
  protoOf(CubicResampler).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CubicResampler))
      return false;
    if (!(compareTo(this.k3j_1, other.k3j_1) === 0))
      return false;
    return compareTo(this.l3j_1, other.l3j_1) === 0;
  };
  protoOf(CubicResampler).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.k3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.l3j_1) | 0;
    return result;
  };
  protoOf(CubicResampler).toString = function () {
    return 'CubicResampler(_B=' + this.k3j_1 + ', _C=' + this.l3j_1 + ')';
  };
  function Companion_7() {
    Companion_instance_7 = this;
    Companion_instance_46.l3f();
  }
  protoOf(Companion_7).m3j = function (bytes, offset, length) {
    Stats_instance.f3f();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromBytes.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$1 = org_jetbrains_skia_Data__1nMakeFromBytes($this$interopScope.n3j(bytes), offset, length);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return new Data(tmp$ret$1);
  };
  protoOf(Companion_7).o3j = function (bytes, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    return $super === VOID ? this.m3j(bytes, offset, length) : $super.m3j.call(this, bytes, offset, length);
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.p3j_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function Data(ptr) {
    Companion_getInstance_7();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_5().p3j_1);
    this.s3j_1 = null;
  }
  protoOf(Data).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.j3f(otherData);
  };
  protoOf(Data).j3f = function (other) {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_Data__1nEquals(this.i3f_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_instance_46.l3f();
  }
  protoOf(Companion_8).t3j = function () {
    Stats_instance.f3f();
    loadOpenGLLibrary();
    var ptr = org_jetbrains_skia_DirectContext__1nMakeGL();
    if (ptr === Companion_instance_48.n3f())
      throw new RenderException("Can't create OpenGL DirectContext");
    return new DirectContext(ptr);
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function DirectContext(ptr) {
    Companion_getInstance_8();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(DirectContext).w3j = function () {
    Stats_instance.f3f();
    org_jetbrains_skia_DirectContext__1nFlushDefault(this.i3f_1);
    return this;
  };
  protoOf(DirectContext).x3j = function (surface, syncCpu) {
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_DirectContext__1nFlushAndSubmit(this.i3f_1, surface.i3f_1, syncCpu);
    }finally {
      reachabilityBarrier(this);
    }
  };
  protoOf(DirectContext).y3j = function (surface, syncCpu, $super) {
    syncCpu = syncCpu === VOID ? false : syncCpu;
    var tmp;
    if ($super === VOID) {
      this.x3j(surface, syncCpu);
      tmp = Unit_instance;
    } else {
      tmp = $super.x3j.call(this, surface, syncCpu);
    }
    return tmp;
  };
  function FilterMipmap(filterMode, mipmapMode) {
    mipmapMode = mipmapMode === VOID ? MipmapMode_NONE_getInstance() : mipmapMode;
    this.z3j_1 = filterMode;
    this.a3k_1 = mipmapMode;
  }
  protoOf(FilterMipmap).g3i = function () {
    return this.z3j_1.s2_1;
  };
  protoOf(FilterMipmap).h3i = function () {
    return this.a3k_1.s2_1;
  };
  protoOf(FilterMipmap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FilterMipmap))
      return false;
    if (!this.z3j_1.equals(other.z3j_1))
      return false;
    return this.a3k_1.equals(other.a3k_1);
  };
  protoOf(FilterMipmap).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.z3j_1.hashCode() | 0;
    result = imul(result, PRIME) + this.a3k_1.hashCode() | 0;
    return result;
  };
  protoOf(FilterMipmap).toString = function () {
    return 'FilterMipmap(_filterMode=' + this.z3j_1.toString() + ', _mipmapMode=' + this.a3k_1.toString() + ')';
  };
  var FilterMode_NEAREST_instance;
  var FilterMode_LINEAR_instance;
  var FilterMode_entriesInitialized;
  function FilterMode_initEntries() {
    if (FilterMode_entriesInitialized)
      return Unit_instance;
    FilterMode_entriesInitialized = true;
    FilterMode_NEAREST_instance = new FilterMode('NEAREST', 0);
    FilterMode_LINEAR_instance = new FilterMode('LINEAR', 1);
  }
  function FilterMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterMode_NEAREST_getInstance() {
    FilterMode_initEntries();
    return FilterMode_NEAREST_instance;
  }
  function FilterMode_LINEAR_getInstance() {
    FilterMode_initEntries();
    return FilterMode_LINEAR_instance;
  }
  var FilterTileMode_CLAMP_instance;
  var FilterTileMode_REPEAT_instance;
  var FilterTileMode_MIRROR_instance;
  var FilterTileMode_DECAL_instance;
  var FilterTileMode_entriesInitialized;
  function FilterTileMode_initEntries() {
    if (FilterTileMode_entriesInitialized)
      return Unit_instance;
    FilterTileMode_entriesInitialized = true;
    FilterTileMode_CLAMP_instance = new FilterTileMode('CLAMP', 0);
    FilterTileMode_REPEAT_instance = new FilterTileMode('REPEAT', 1);
    FilterTileMode_MIRROR_instance = new FilterTileMode('MIRROR', 2);
    FilterTileMode_DECAL_instance = new FilterTileMode('DECAL', 3);
  }
  function FilterTileMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterTileMode_CLAMP_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_CLAMP_instance;
  }
  function FilterTileMode_REPEAT_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_REPEAT_instance;
  }
  function FilterTileMode_MIRROR_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_MIRROR_instance;
  }
  function FilterTileMode_DECAL_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_DECAL_instance;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Font_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_6().b3k_1);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0($this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeDefault(), $this);
    Stats_instance.f3f();
    return $this;
  }
  function Font_init_$Create$() {
    return Font_init_$Init$_0(objectCreate(protoOf(Font)));
  }
  function Font_init_$Init$_1(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_instance.f3f();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$_0(typeface, size) {
    return Font_init_$Init$_1(typeface, size, objectCreate(protoOf(Font)));
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.b3k_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.i3f_1, it);
      return Unit_instance;
    };
  }
  protoOf(Font).j3f = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.i3f_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Font).e3k = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      var tmp_0 = Companion_instance_11;
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_9();
  }
  var FontEdging_ALIAS_instance;
  var FontEdging_ANTI_ALIAS_instance;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_instance;
  var FontEdging_entriesInitialized;
  function FontEdging_initEntries() {
    if (FontEdging_entriesInitialized)
      return Unit_instance;
    FontEdging_entriesInitialized = true;
    FontEdging_ALIAS_instance = new FontEdging('ALIAS', 0);
    FontEdging_ANTI_ALIAS_instance = new FontEdging('ANTI_ALIAS', 1);
    FontEdging_SUBPIXEL_ANTI_ALIAS_instance = new FontEdging('SUBPIXEL_ANTI_ALIAS', 2);
  }
  function FontEdging(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontEdging_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_ALIAS_instance;
  }
  function FontEdging_ANTI_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_ANTI_ALIAS_instance;
  }
  function FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_SUBPIXEL_ANTI_ALIAS_instance;
  }
  function FontFeature$Companion$parseW3$lambda(it) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var parts = split(tmp$ret$0, [' ']);
    var name = parts.p(0);
    var value = getOrNull(parts, 1);
    var tmp;
    switch (value) {
      case 'on':
      case null:
        tmp = 1;
        break;
      case 'off':
        tmp = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    FontFeature.call($this, Companion_instance_14.f3k(feature), value, _UInt___init__impl__l7qpdl(0), _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, objectCreate(protoOf(FontFeature)));
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.g3k_1 = _UInt___init__impl__l7qpdl(0);
    this.h3k_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.i3k_1 = fillArrayVal(Array(0), null);
    this.j3k_1 = compilePattern('\\s+');
    this.k3k_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.l3k_1 = 1;
    this.m3k_1 = 2;
    this.n3k_1 = 3;
    this.o3k_1 = 4;
    this.p3k_1 = 5;
  }
  protoOf(Companion_10).q3k = function (str) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = splitToSequence(str, [',']);
    var this_0 = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    return copyToArray(this_0);
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_10();
    this.r3k_1 = _tag;
    this.s3k_1 = value;
    this.t3k_1 = start;
    this.u3k_1 = end;
  }
  protoOf(FontFeature).v3k = function () {
    return Companion_instance_14.w3k(this.r3k_1);
  };
  protoOf(FontFeature).toString = function () {
    var range = '';
    var tmp;
    // Inline function 'kotlin.UInt.compareTo' call
    var this_0 = this.t3k_1;
    var other = _UInt___init__impl__l7qpdl(0);
    if (uintCompare(_UInt___get_data__impl__f0vqqw(this_0), _UInt___get_data__impl__f0vqqw(other)) > 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.UInt.compareTo' call
      var this_1 = this.u3k_1;
      var other_0 = _UInt___init__impl__l7qpdl(-1);
      tmp = uintCompare(_UInt___get_data__impl__f0vqqw(this_1), _UInt___get_data__impl__f0vqqw(other_0)) < 0;
    }
    if (tmp) {
      var tmp_0;
      // Inline function 'kotlin.UInt.compareTo' call
      var this_2 = this.t3k_1;
      var other_1 = _UInt___init__impl__l7qpdl(0);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(this_2), _UInt___get_data__impl__f0vqqw(other_1)) > 0) {
        tmp_0 = new UInt(this.t3k_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      // Inline function 'kotlin.UInt.compareTo' call
      var this_3 = this.u3k_1;
      var other_2 = _UInt___init__impl__l7qpdl(-1);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(this_3), _UInt___get_data__impl__f0vqqw(other_2)) < 0) {
        tmp_2 = new UInt(this.u3k_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.s3k_1 === 0)
      valuePrefix = '-';
    else if (this.s3k_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.s3k_1;
    return 'FontFeature(' + valuePrefix + this.r3k_1 + range + valueSuffix + ')';
  };
  protoOf(FontFeature).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.v3k() === other.v3k()))
      return false;
    if (!(this.s3k_1 === other.s3k_1))
      return false;
    if (!(this.t3k_1 === other.t3k_1))
      return false;
    return this.u3k_1 === other.u3k_1;
  };
  protoOf(FontFeature).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.r3k_1 | 0;
    result = imul(result, PRIME) + this.s3k_1 | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var this_0 = this.t3k_1;
    var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> 16 | 0);
    var other = this.t3k_1;
    var this_2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) ^ _UInt___get_data__impl__f0vqqw(other));
    result = tmp + _UInt___get_data__impl__f0vqqw(this_2) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var this_3 = this.u3k_1;
    var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) >>> 16 | 0);
    var other_0 = this.u3k_1;
    var this_5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) ^ _UInt___get_data__impl__f0vqqw(other_0));
    result = tmp_0 + _UInt___get_data__impl__f0vqqw(this_5) | 0;
    return result;
  };
  var FontHinting_NONE_instance;
  var FontHinting_SLIGHT_instance;
  var FontHinting_NORMAL_instance;
  var FontHinting_FULL_instance;
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_instance;
    FontHinting_entriesInitialized = true;
    FontHinting_NONE_instance = new FontHinting('NONE', 0);
    FontHinting_SLIGHT_instance = new FontHinting('SLIGHT', 1);
    FontHinting_NORMAL_instance = new FontHinting('NORMAL', 2);
    FontHinting_FULL_instance = new FontHinting('FULL', 3);
  }
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontHinting_NONE_getInstance() {
    FontHinting_initEntries();
    return FontHinting_NONE_instance;
  }
  function FontHinting_SLIGHT_getInstance() {
    FontHinting_initEntries();
    return FontHinting_SLIGHT_instance;
  }
  function FontHinting_NORMAL_getInstance() {
    FontHinting_initEntries();
    return FontHinting_NORMAL_instance;
  }
  function FontHinting_FULL_getInstance() {
    FontHinting_initEntries();
    return FontHinting_FULL_instance;
  }
  function Companion_11() {
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    this.x3k_1 = top;
    this.y3k_1 = ascent;
    this.z3k_1 = descent;
    this.a3l_1 = bottom;
    this.b3l_1 = leading;
    this.c3l_1 = avgCharWidth;
    this.d3l_1 = maxCharWidth;
    this.e3l_1 = xMin;
    this.f3l_1 = xMax;
    this.g3l_1 = xHeight;
    this.h3l_1 = capHeight;
    this.i3l_1 = underlineThickness;
    this.j3l_1 = underlinePosition;
    this.k3l_1 = strikeoutThickness;
    this.l3l_1 = strikeoutPosition;
  }
  protoOf(FontMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.x3k_1, other.x3k_1) === 0))
      return false;
    if (!(compareTo(this.y3k_1, other.y3k_1) === 0))
      return false;
    if (!(compareTo(this.z3k_1, other.z3k_1) === 0))
      return false;
    if (!(compareTo(this.a3l_1, other.a3l_1) === 0))
      return false;
    if (!(compareTo(this.b3l_1, other.b3l_1) === 0))
      return false;
    if (!(compareTo(this.c3l_1, other.c3l_1) === 0))
      return false;
    if (!(compareTo(this.d3l_1, other.d3l_1) === 0))
      return false;
    if (!(compareTo(this.e3l_1, other.e3l_1) === 0))
      return false;
    if (!(compareTo(this.f3l_1, other.f3l_1) === 0))
      return false;
    if (!(compareTo(this.g3l_1, other.g3l_1) === 0))
      return false;
    if (!(compareTo(this.h3l_1, other.h3l_1) === 0))
      return false;
    if (this.i3l_1 == null ? !(other.i3l_1 == null) : !(this.i3l_1 == other.i3l_1))
      return false;
    if (this.j3l_1 == null ? !(other.j3l_1 == null) : !(this.j3l_1 == other.j3l_1))
      return false;
    if (this.k3l_1 == null ? !(other.k3l_1 == null) : !(this.k3l_1 == other.k3l_1))
      return false;
    return !(this.l3l_1 == null ? !(other.l3l_1 == null) : !(this.l3l_1 == other.l3l_1));
  };
  protoOf(FontMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.x3k_1) | 0;
    result = imul(result, PRIME) + toBits(this.y3k_1) | 0;
    result = imul(result, PRIME) + toBits(this.z3k_1) | 0;
    result = imul(result, PRIME) + toBits(this.a3l_1) | 0;
    result = imul(result, PRIME) + toBits(this.b3l_1) | 0;
    result = imul(result, PRIME) + toBits(this.c3l_1) | 0;
    result = imul(result, PRIME) + toBits(this.d3l_1) | 0;
    result = imul(result, PRIME) + toBits(this.e3l_1) | 0;
    result = imul(result, PRIME) + toBits(this.f3l_1) | 0;
    result = imul(result, PRIME) + toBits(this.g3l_1) | 0;
    result = imul(result, PRIME) + toBits(this.h3l_1) | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.i3l_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.j3l_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.k3l_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    var tmp_2 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.l3l_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    return result;
  };
  protoOf(FontMetrics).toString = function () {
    return 'FontMetrics(_top=' + this.x3k_1 + ', _ascent=' + this.y3k_1 + ', _descent=' + this.z3k_1 + ', _bottom=' + this.a3l_1 + ', _leading=' + this.b3l_1 + ', _avgCharWidth=' + this.c3l_1 + ', _maxCharWidth=' + this.d3l_1 + ', _xMin=' + this.e3l_1 + ', _xMax=' + this.f3l_1 + ', _xHeight=' + this.g3l_1 + ', _capHeight=' + this.h3l_1 + ', _underlineThickness=' + this.i3l_1 + ', _underlinePosition=' + this.j3l_1 + ', _strikeoutThickness=' + this.k3l_1 + ', _strikeoutPosition=' + this.l3l_1 + ')';
  };
  function fromInteropPointer(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(15);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.m3l(result);
        block($this$interopScope, handle);
        $this$interopScope.n3l(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return fromRawData(_this__u8e3s4, result);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_0 = rawData[11];
    var tmp_10 = isNaN_0(this_0) ? null : this_0;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_1 = rawData[12];
    var tmp_11 = isNaN_0(this_1) ? null : this_1;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_2 = rawData[13];
    var tmp_12 = isNaN_0(this_2) ? null : this_2;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_3 = rawData[14];
    var tmp$ret$3 = isNaN_0(this_3) ? null : this_3;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    Companion_instance_46.l3f();
    this.o3l_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(FontMgr)));
  }
  protoOf(FontMgr).r3l = function (data, ttcIndex) {
    var tmp;
    try {
      Stats_instance.f3f();
      var ptr = org_jetbrains_skia_FontMgr__1nMakeFromData(this.i3f_1, getPtr(data), ttcIndex);
      tmp = ptr === Companion_instance_48.n3f() ? null : new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(data);
    }
    return tmp;
  };
  protoOf(FontMgr).s3l = function (data, ttcIndex, $super) {
    ttcIndex = ttcIndex === VOID ? 0 : ttcIndex;
    return $super === VOID ? this.r3l(data, ttcIndex) : $super.r3l.call(this, data, ttcIndex);
  };
  protoOf(FontMgr).t3l = function (name, style) {
    var tmp;
    try {
      Stats_instance.f3f();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.FontMgr.legacyMakeTypeface.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          tmp$ret$1 = org_jetbrains_skia_FontMgr__1nLegacyMakeTypeface(this.i3f_1, $this$interopScope.l3g(name), style.u3l_1);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_instance_48.n3f() ? null : new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function FontMgr() {
    Companion_getInstance_12();
  }
  function FontMgrWithFallback(fallbackProvider) {
    FontMgr_init_$Init$(org_jetbrains_skia_FontMgrWithFallback__1nDefaultWithFallbackFontProvider(fallbackProvider.i3f_1), this);
  }
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_2() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_instance;
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.u3l_1 = weight & 65535 | (width & 255) << 16 | slant.s2_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, objectCreate(protoOf(FontStyle)));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.u3l_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, objectCreate(protoOf(FontStyle)));
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.v3l_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    this.w3l_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    this.x3l_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    this.y3l_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  protoOf(FontStyle).z3l = function () {
    return this.u3l_1 & 65535;
  };
  protoOf(FontStyle).a3m = function (weight) {
    return FontStyle_init_$Create$(weight, this.g3c(), this.b3m());
  };
  protoOf(FontStyle).g3c = function () {
    return this.u3l_1 >> 16 & 255;
  };
  protoOf(FontStyle).b3m = function () {
    return values_2()[this.u3l_1 >> 24 & 255];
  };
  protoOf(FontStyle).toString = function () {
    return 'FontStyle(weight=' + this.z3l() + ', width=' + this.g3c() + ', slant=' + this.b3m().toString() + ')';
  };
  protoOf(FontStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.u3l_1 === other.u3l_1;
  };
  protoOf(FontStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.u3l_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_13();
  }
  function Companion_14() {
  }
  protoOf(Companion_14).f3k = function (name) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(name.length === 4)) {
      // Inline function 'org.jetbrains.skia.Companion.fromString.<anonymous>' call
      var message = "Name must be exactly 4 symbols, got: '" + name + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(name, 0);
    var tmp = (Char__toInt_impl_vasixd(this_0) & 255) << 24;
    // Inline function 'kotlin.code' call
    var this_1 = charSequenceGet(name, 1);
    var tmp_0 = tmp | (Char__toInt_impl_vasixd(this_1) & 255) << 16;
    // Inline function 'kotlin.code' call
    var this_2 = charSequenceGet(name, 2);
    var tmp_1 = tmp_0 | (Char__toInt_impl_vasixd(this_2) & 255) << 8;
    // Inline function 'kotlin.code' call
    var this_3 = charSequenceGet(name, 3);
    return tmp_1 | Char__toInt_impl_vasixd(this_3) & 255;
  };
  protoOf(Companion_14).w3k = function (tag) {
    // Inline function 'kotlin.charArrayOf' call
    var tmp$ret$0 = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    return concatToString(tmp$ret$0);
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.c3m_1 = 1;
    this.d3m_1 = new GradientStyle(FilterTileMode_CLAMP_getInstance(), true, null);
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function GradientStyle(tileMode, isPremul, localMatrix) {
    Companion_getInstance_15();
    this.e3m_1 = tileMode;
    this.f3m_1 = isPremul;
    this.g3m_1 = localMatrix;
  }
  protoOf(GradientStyle).h3m = function () {
    return 0 | (this.f3m_1 ? Companion_getInstance_15().c3m_1 : 0);
  };
  protoOf(GradientStyle).i3m = function () {
    var tmp0_safe_receiver = this.g3m_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j3i_1;
  };
  protoOf(GradientStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof GradientStyle))
      return false;
    if (!(this.f3m_1 === other.f3m_1))
      return false;
    if (!this.e3m_1.equals(other.e3m_1))
      return false;
    return !(this.g3m_1 == null ? !(other.g3m_1 == null) : !equals(this.g3m_1, other.g3m_1));
  };
  protoOf(GradientStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.f3m_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.e3m_1.hashCode() | 0;
    var tmp = imul(result, PRIME);
    var tmp0_safe_receiver = this.g3m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 43 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(GradientStyle).toString = function () {
    return 'GradientStyle(_tileMode=' + this.e3m_1.toString() + ', _premul=' + this.f3m_1 + ', _localMatrix=' + toString_0(this.g3m_1) + ')';
  };
  function IHasImageInfo() {
  }
  function Companion_16() {
  }
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function IRange(start, end) {
    this.j3m_1 = start;
    this.k3m_1 = end;
  }
  protoOf(IRange).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof IRange))
      return false;
    if (!(this.j3m_1 === other.j3m_1))
      return false;
    return this.k3m_1 === other.k3m_1;
  };
  protoOf(IRange).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.j3m_1 | 0;
    result = imul(result, PRIME) + this.k3m_1 | 0;
    return result;
  };
  protoOf(IRange).toString = function () {
    return 'IRange(_start=' + this.j3m_1 + ', _end=' + this.k3m_1 + ')';
  };
  function fromInteropPointer_0(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.l3m(result);
        block($this$interopScope, handle);
        $this$interopScope.i3h(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    var result_0 = result;
    return new IRange(result_0[0], result_0[1]);
  }
  function Companion_17() {
    Companion_instance_17 = this;
    Companion_instance_46.l3f();
  }
  protoOf(Companion_17).m3m = function (bitmap) {
    var tmp;
    try {
      Stats_instance.f3f();
      var ptr = org_jetbrains_skia_Image__1nMakeFromBitmap(getPtr(bitmap));
      if (ptr === Companion_instance_48.n3f())
        throw RuntimeException_init_$Create$('Failed to Image::makeFromBitmap ' + bitmap.toString());
      tmp = new Image(ptr);
    }finally {
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Image_nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Image__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'Image_nGetImageInfo';
    return l;
  }
  function Image$_get_imageInfo_$lambda_c2a05w(this$0) {
    return function () {
      var tmp;
      if (this$0.p3m_1 == null) {
        var tmp_0 = this$0;
        var tmp_1 = Companion_getInstance_18();
        var tmp_2 = this$0.i3f_1;
        tmp_0.p3m_1 = tmp_1.v3f(tmp_2, Image_nGetImageInfo$ref());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image(ptr) {
    Companion_getInstance_17();
    RefCnt_init_$Init$(ptr, this);
    this.p3m_1 = null;
  }
  protoOf(Image).t3f = function () {
    var tmp;
    try {
      if (this.p3m_1 == null) {
        commonSynchronized(this, Image$_get_imageInfo_$lambda_c2a05w(this));
      }
      tmp = ensureNotNull(this.p3m_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function ImageInfo_init_$Init$(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo.call($this, new ColorInfo(colorType, alphaType, colorSpace), width, height);
    return $this;
  }
  function ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo_init_$Init$(width, height, values_1()[colorType], values_0()[alphaType], colorSpace === Companion_instance_48.n3f() ? null : ColorSpace_init_$Create$(colorSpace), $this);
    return $this;
  }
  function ImageInfo_init_$Create$(width, height, colorType, alphaType, colorSpace) {
    return ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, objectCreate(protoOf(ImageInfo)));
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.u3f_1 = new ImageInfo(Companion_getInstance_4().a3j_1, 0, 0);
  }
  protoOf(Companion_18).v3f = function (_ptr, _nGetImageInfo) {
    Stats_instance.f3f();
    var colorSpacePtr = null;
    // Inline function 'kotlin.let' call
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(4);
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.l3m(result);
        // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        var result_0 = new NativePointerArray(1);
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0_0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var $this$interopScope_0 = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var handle_0 = $this$interopScope_0.q3m(result_0);
            // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>.<anonymous>' call
            _nGetImageInfo(_ptr, handle, handle_0);
            $this$interopScope_0.r3m(handle_0, result_0);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
            }
          }
        }
        colorSpacePtr = result_0.p(0);
        $this$interopScope.i3h(handle, result);
        break $l$block_0;
      }finally {
        var tmp1_0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1_0 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
    return ImageInfo_init_$Create$(result[0], result[1], result[2], result[3], ensureNotNull(colorSpacePtr));
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function ImageInfo(colorInfo, width, height) {
    Companion_getInstance_18();
    this.y3f_1 = colorInfo;
    this.z3f_1 = width;
    this.a3g_1 = height;
  }
  protoOf(ImageInfo).f3g = function () {
    return imul(this.z3f_1, this.e3j());
  };
  protoOf(ImageInfo).e3j = function () {
    return this.y3f_1.e3j();
  };
  protoOf(ImageInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ImageInfo))
      return false;
    if (!(this.z3f_1 === other.z3f_1))
      return false;
    if (!(this.a3g_1 === other.a3g_1))
      return false;
    return this.y3f_1.equals(other.y3f_1);
  };
  protoOf(ImageInfo).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.z3f_1 | 0;
    result = imul(result, PRIME) + this.a3g_1 | 0;
    result = imul(result, PRIME) + this.y3f_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageInfo).toString = function () {
    return 'ImageInfo(_colorInfo=' + this.y3f_1.toString() + ', _width=' + this.z3f_1 + ', _height=' + this.a3g_1 + ')';
  };
  function Companion_19() {
    Companion_instance_19 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function ManagedString_init_$Init$(s, $this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.ManagedString.<init>.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$1 = org_jetbrains_skia_ManagedString__1nMake($this$interopScope.l3g(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    ManagedString.call($this, tmp$ret$1);
    Stats_instance.f3f();
    return $this;
  }
  function ManagedString_init_$Create$(s) {
    return ManagedString_init_$Init$(s, objectCreate(protoOf(ManagedString)));
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.t3m_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_19();
    managed = managed === VOID ? true : managed;
    Managed.call(this, ptr, _FinalizerHolder_getInstance_7().t3m_1, managed);
  }
  protoOf(ManagedString).toString = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.i3f_1);
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var result = new Int8Array(size);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var handle = $this$interopScope.u3m(result);
          // Inline function 'org.jetbrains.skia.ManagedString.toString.<anonymous>' call
          org_jetbrains_skia_ManagedString__nStringData(this.i3f_1, handle, size);
          $this$interopScope.v3m(handle, result);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
      tmp = decodeToString(result);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ManagedString).y3m = function (s) {
    Stats_instance.f3f();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        org_jetbrains_skia_ManagedString__1nAppend(this.i3f_1, $this$interopScope.l3g(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return this;
  };
  function Companion_20() {
    Companion_instance_20 = this;
    this.z3m_1 = this.a3n(0.0, 0.0);
  }
  protoOf(Companion_20).a3n = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Matrix33(mat) {
    Companion_getInstance_20();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 9)) {
      // Inline function 'org.jetbrains.skia.Matrix33.<anonymous>' call
      var message = 'Expected 9 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.j3i_1 = mat;
  }
  protoOf(Matrix33).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.j3i_1, other.j3i_1);
  };
  protoOf(Matrix33).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.j3i_1) | 0;
    return result;
  };
  protoOf(Matrix33).toString = function () {
    return 'Matrix33(_mat=' + toString(this.j3i_1) + ')';
  };
  function Companion_21() {
    Companion_instance_21 = this;
    this.b3n_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function Matrix44(mat) {
    Companion_getInstance_21();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 16)) {
      // Inline function 'org.jetbrains.skia.Matrix44.<anonymous>' call
      var message = 'Expected 16 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.q3i_1 = mat;
  }
  protoOf(Matrix44).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.q3i_1, other.q3i_1);
  };
  protoOf(Matrix44).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.q3i_1) | 0;
    return result;
  };
  protoOf(Matrix44).toString = function () {
    return 'Matrix44(_mat=' + toString(this.q3i_1) + ')';
  };
  var MipmapMode_NONE_instance;
  var MipmapMode_NEAREST_instance;
  var MipmapMode_LINEAR_instance;
  var MipmapMode_entriesInitialized;
  function MipmapMode_initEntries() {
    if (MipmapMode_entriesInitialized)
      return Unit_instance;
    MipmapMode_entriesInitialized = true;
    MipmapMode_NONE_instance = new MipmapMode('NONE', 0);
    MipmapMode_NEAREST_instance = new MipmapMode('NEAREST', 1);
    MipmapMode_LINEAR_instance = new MipmapMode('LINEAR', 2);
  }
  function MipmapMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MipmapMode_NONE_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NONE_instance;
  }
  function MipmapMode_NEAREST_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NEAREST_instance;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.c3n_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function Paint_init_$Init$($this) {
    Managed.call($this, org_jetbrains_skia_Paint__1nMake(), _FinalizerHolder_getInstance_8().c3n_1);
    Paint.call($this);
    Stats_instance.f3f();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(objectCreate(protoOf(Paint)));
  }
  protoOf(Paint).j3f = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.i3f_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Paint).f3n = function () {
    Stats_instance.f3f();
    org_jetbrains_skia_Paint__1nReset(this.i3f_1);
    return this;
  };
  protoOf(Paint).g3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetAntiAlias(this.i3f_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).h3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetMode(this.i3f_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).i3n = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = values_3()[org_jetbrains_skia_Paint__1nGetMode(this.i3f_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).j3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetColor(this.i3f_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).k3n = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).l3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.i3f_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).m3n = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).n3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.i3f_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).o3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.i3f_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).p3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.i3f_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).q3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetShader(this.i3f_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).r3n = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      var shaderPtr = org_jetbrains_skia_Paint__1nGetShader(this.i3f_1);
      tmp = shaderPtr === Companion_instance_48.n3f() ? null : new Shader(shaderPtr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).s3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.i3f_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).t3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.i3f_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).u3n = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = values()[org_jetbrains_skia_Paint__1nGetBlendMode(this.i3f_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).v3n = function () {
    return this.u3n().equals(BlendMode_SRC_OVER_getInstance());
  };
  protoOf(Paint).w3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.i3f_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).x3n = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.i3f_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_22();
  }
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  function values_3() {
    return [PaintMode_FILL_getInstance(), PaintMode_STROKE_getInstance(), PaintMode_STROKE_AND_FILL_getInstance()];
  }
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_instance;
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  function PaintMode_STROKE_AND_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_AND_FILL_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_instance;
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_instance;
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_23() {
    Companion_instance_23 = this;
    Companion_instance_46.l3f();
  }
  protoOf(Companion_23).y3n = function (one, two, op) {
    var tmp;
    try {
      Stats_instance.f3f();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.s2_1);
      tmp = ptr === Companion_instance_48.n3f() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.z3n_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_instance.f3f();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(objectCreate(protoOf(Path)));
  }
  function Path$_get_bounds_$lambda_qr8ora(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Path__1nGetBounds(this$0.i3f_1, it);
      return Unit_instance;
    };
  }
  function Path(ptr) {
    Companion_getInstance_23();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_9().z3n_1);
  }
  protoOf(Path).j3f = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.i3f_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).c3o = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Path__1nSetFillMode(this.i3f_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).d3o = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = values_4()[org_jetbrains_skia_Path__1nGetFillMode(this.i3f_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).f3n = function () {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nReset(this.i3f_1);
    return this;
  };
  protoOf(Path).e3o = function () {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nRewind(this.i3f_1);
    return this;
  };
  protoOf(Path).u1w = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).f3o = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      var tmp_0 = Companion_instance_30;
      tmp = tmp_0.g3o(Path$_get_bounds_$lambda_qr8ora(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).h3o = function (x, y) {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nMoveTo(this.i3f_1, x, y);
    return this;
  };
  protoOf(Path).i3o = function (dx, dy) {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nRMoveTo(this.i3f_1, dx, dy);
    return this;
  };
  protoOf(Path).j3o = function (x, y) {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nLineTo(this.i3f_1, x, y);
    return this;
  };
  protoOf(Path).k3o = function (dx, dy) {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nRLineTo(this.i3f_1, dx, dy);
    return this;
  };
  protoOf(Path).l3o = function (x1, y1, x2, y2) {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nQuadTo(this.i3f_1, x1, y1, x2, y2);
    return this;
  };
  protoOf(Path).m3o = function (dx1, dy1, dx2, dy2) {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nRQuadTo(this.i3f_1, dx1, dy1, dx2, dy2);
    return this;
  };
  protoOf(Path).n3o = function (x1, y1, x2, y2, x3, y3) {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nCubicTo(this.i3f_1, x1, y1, x2, y2, x3, y3);
    return this;
  };
  protoOf(Path).o3o = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nRCubicTo(this.i3f_1, dx1, dy1, dx2, dy2, dx3, dy3);
    return this;
  };
  protoOf(Path).p3o = function () {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nClosePath(this.i3f_1);
    return this;
  };
  protoOf(Path).q3o = function (rect, dir, start) {
    Stats_instance.f3f();
    org_jetbrains_skia_Path__1nAddRect(this.i3f_1, rect.s3h_1, rect.t3h_1, rect.u3h_1, rect.v3h_1, dir.s2_1, start);
    return this;
  };
  protoOf(Path).r3o = function (rect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 0 : start;
    return $super === VOID ? this.q3o(rect, dir, start) : $super.q3o.call(this, rect, dir, start);
  };
  protoOf(Path).s3o = function (rrect, dir, start) {
    Stats_instance.f3f();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        org_jetbrains_skia_Path__1nAddRRect(this.i3f_1, rrect.s3h_1, rrect.t3h_1, rrect.u3h_1, rrect.v3h_1, $this$interopScope.d3i(rrect.c3i_1), rrect.c3i_1.length, dir.s2_1, start);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return this;
  };
  protoOf(Path).t3o = function (rrect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 6 : start;
    return $super === VOID ? this.s3o(rrect, dir, start) : $super.s3o.call(this, rrect, dir, start);
  };
  protoOf(Path).u3o = function (src, dx, dy, extend) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_Path__1nAddPathOffset(this.i3f_1, getPtr(src), dx, dy, extend);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(src);
    }
    return tmp;
  };
  protoOf(Path).v3o = function (src, dx, dy, extend, $super) {
    extend = extend === VOID ? false : extend;
    return $super === VOID ? this.u3o(src, dx, dy, extend) : $super.u3o.call(this, src, dx, dy, extend);
  };
  protoOf(Path).w3o = function (matrix, dst, applyPerspectiveClip) {
    var tmp;
    try {
      Stats_instance.f3f();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_Path__1nTransform(this.i3f_1, $this$interopScope.d3i(matrix.j3i_1), getPtr(dst), applyPerspectiveClip);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  protoOf(Path).x3o = function (matrix, dst, applyPerspectiveClip, $super) {
    dst = dst === VOID ? null : dst;
    applyPerspectiveClip = applyPerspectiveClip === VOID ? true : applyPerspectiveClip;
    return $super === VOID ? this.w3o(matrix, dst, applyPerspectiveClip) : $super.w3o.call(this, matrix, dst, applyPerspectiveClip);
  };
  protoOf(Path).g = function () {
    return this.y3o(false);
  };
  protoOf(Path).y3o = function (forceClose) {
    return Companion_getInstance_25().z3o(this, forceClose);
  };
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_instance;
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_4() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_instance;
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function PathMeasure_init_$Init$($this) {
    PathMeasure.call($this, org_jetbrains_skia_PathMeasure__1nMake());
    return $this;
  }
  function PathMeasure_init_$Create$() {
    return PathMeasure_init_$Init$(objectCreate(protoOf(PathMeasure)));
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.a3p_1 = org_jetbrains_skia_PathMeasure__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function PathMeasure(ptr) {
    Companion_getInstance_24();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_10().a3p_1);
  }
  protoOf(PathMeasure).d3p = function (path, forceClosed) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_PathMeasure__1nSetPath(this.i3f_1, getPtr(path), forceClosed);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
    }
    return tmp;
  };
  protoOf(PathMeasure).a = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_PathMeasure__1nGetLength(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathMeasure).e3p = function (startD, endD, dst, startWithMoveTo) {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_PathMeasure__1nGetSegment(this.i3f_1, startD, endD, getPtr(dst), startWithMoveTo);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_instance;
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, values_5()[verbOrdinal], new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(verbOrdinal === PathVerb_MOVE_getInstance().s2_1 || verbOrdinal === PathVerb_CLOSE_getInstance().s2_1)) {
      // Inline function 'org.jetbrains.skia.PathSegment.<init>.<anonymous>' call
      var message = 'Expected MOVE or CLOSE, got ' + values_5()[verbOrdinal].toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_0(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    verb = verb === VOID ? PathVerb_DONE_getInstance() : verb;
    p0 = p0 === VOID ? null : p0;
    p1 = p1 === VOID ? null : p1;
    p2 = p2 === VOID ? null : p2;
    p3 = p3 === VOID ? null : p3;
    conicWeight = conicWeight === VOID ? 0.0 : conicWeight;
    isCloseLine = isCloseLine === VOID ? false : isCloseLine;
    isClosedContour = isClosedContour === VOID ? false : isClosedContour;
    this.f3p_1 = verb;
    this.g3p_1 = p0;
    this.h3p_1 = p1;
    this.i3p_1 = p2;
    this.j3p_1 = p3;
    this.k3p_1 = conicWeight;
    this.l3p_1 = isCloseLine;
    this.m3p_1 = isClosedContour;
  }
  protoOf(PathSegment).toString = function () {
    return 'Segment(verb=' + this.f3p_1.toString() + (!this.f3p_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + toString_0(this.g3p_1) : '') + (this.f3p_1.equals(PathVerb_LINE_getInstance()) || this.f3p_1.equals(PathVerb_QUAD_getInstance()) || this.f3p_1.equals(PathVerb_CONIC_getInstance()) || this.f3p_1.equals(PathVerb_CUBIC_getInstance()) ? ', p1=' + toString_0(this.h3p_1) : '') + (this.f3p_1.equals(PathVerb_QUAD_getInstance()) || this.f3p_1.equals(PathVerb_CONIC_getInstance()) || this.f3p_1.equals(PathVerb_CUBIC_getInstance()) ? ', p2=' + toString_0(this.i3p_1) : '') + (this.f3p_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + toString_0(this.j3p_1) : '') + (this.f3p_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.k3p_1 : '') + (this.f3p_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.l3p_1 : '') + (!this.f3p_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.m3p_1 : '') + ')';
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return this.f3p_1.equals(other.f3p_1) && (!this.f3p_1.equals(PathVerb_DONE_getInstance()) ? equals(this.g3p_1, other.g3p_1) : true) && (this.f3p_1.equals(PathVerb_LINE_getInstance()) || this.f3p_1.equals(PathVerb_QUAD_getInstance()) || this.f3p_1.equals(PathVerb_CONIC_getInstance()) || this.f3p_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.h3p_1, other.h3p_1) : true) && (this.f3p_1.equals(PathVerb_QUAD_getInstance()) || this.f3p_1.equals(PathVerb_CONIC_getInstance()) || this.f3p_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.i3p_1, other.i3p_1) : true) && (this.f3p_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.j3p_1, other.j3p_1) : true) && (this.f3p_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.k3p_1, this.k3p_1) === 0 : true) && (this.f3p_1.equals(PathVerb_LINE_getInstance()) ? this.l3p_1 === other.l3p_1 : true) && (!this.f3p_1.equals(PathVerb_DONE_getInstance()) ? this.m3p_1 === other.m3p_1 : true);
  };
  protoOf(PathSegment).hashCode = function () {
    var tmp;
    switch (this.f3p_1.s2_1) {
      case 6:
        tmp = objectHashes([this.f3p_1]);
        break;
      case 0:
        tmp = objectHashes([this.f3p_1, this.g3p_1, this.m3p_1]);
        break;
      case 1:
        tmp = objectHashes([this.f3p_1, this.g3p_1, this.h3p_1, this.l3p_1, this.m3p_1]);
        break;
      case 2:
        tmp = objectHashes([this.f3p_1, this.g3p_1, this.h3p_1, this.i3p_1, this.m3p_1]);
        break;
      case 3:
        tmp = objectHashes([this.f3p_1, this.g3p_1, this.h3p_1, this.i3p_1, this.k3p_1, this.m3p_1]);
        break;
      case 4:
        tmp = objectHashes([this.f3p_1, this.g3p_1, this.h3p_1, this.i3p_1, this.j3p_1, this.m3p_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_instance_46.l3f();
  }
  protoOf(Companion_25).z3o = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.q3p_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function nextSegment($this) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(10);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.l3m(result);
        // Inline function 'org.jetbrains.skia.PathSegmentIterator.nextSegment.<anonymous>' call
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.i3f_1, handle);
        $this$interopScope.i3h(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return pathSegmentFromIntArray(result);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_25();
    Managed.call(this, ptr, org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer());
    this.p3p_1 = _path;
    this.q3p_1 = null;
    Stats_instance.f3f();
  }
  protoOf(PathSegmentIterator).i = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.q3p_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f3p_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.q3p_1;
      this.q3p_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathSegmentIterator).h = function () {
    var tmp0_safe_receiver = this.q3p_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f3p_1, PathVerb_DONE_getInstance());
  };
  protoOf(PathSegmentIterator).j4 = function () {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp;
    switch (values_5()[verb].s2_1) {
      case 0:
      case 5:
        // Inline function 'kotlin.fromBits' call

        var bits = points[0];
        var tmp_0 = floatFromBits(bits);
        // Inline function 'kotlin.fromBits' call

        var bits_0 = points[1];
        var tmp$ret$1 = floatFromBits(bits_0);
        tmp = PathSegment_init_$Create$(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        // Inline function 'kotlin.fromBits' call

        var bits_1 = points[0];
        var tmp_1 = floatFromBits(bits_1);
        // Inline function 'kotlin.fromBits' call

        var bits_2 = points[1];
        var tmp_2 = floatFromBits(bits_2);
        // Inline function 'kotlin.fromBits' call

        var bits_3 = points[2];
        var tmp_3 = floatFromBits(bits_3);
        // Inline function 'kotlin.fromBits' call

        var bits_4 = points[3];
        var tmp$ret$5 = floatFromBits(bits_4);
        tmp = PathSegment_init_$Create$_0(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        // Inline function 'kotlin.fromBits' call

        var bits_5 = points[0];
        var tmp_4 = floatFromBits(bits_5);
        // Inline function 'kotlin.fromBits' call

        var bits_6 = points[1];
        var tmp_5 = floatFromBits(bits_6);
        // Inline function 'kotlin.fromBits' call

        var bits_7 = points[2];
        var tmp_6 = floatFromBits(bits_7);
        // Inline function 'kotlin.fromBits' call

        var bits_8 = points[3];
        var tmp_7 = floatFromBits(bits_8);
        // Inline function 'kotlin.fromBits' call

        var bits_9 = points[4];
        var tmp_8 = floatFromBits(bits_9);
        // Inline function 'kotlin.fromBits' call

        var bits_10 = points[5];
        var tmp$ret$11 = floatFromBits(bits_10);
        tmp = PathSegment_init_$Create$_1(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        // Inline function 'kotlin.fromBits' call

        var bits_11 = points[0];
        var tmp_9 = floatFromBits(bits_11);
        // Inline function 'kotlin.fromBits' call

        var bits_12 = points[1];
        var tmp_10 = floatFromBits(bits_12);
        // Inline function 'kotlin.fromBits' call

        var bits_13 = points[2];
        var tmp_11 = floatFromBits(bits_13);
        // Inline function 'kotlin.fromBits' call

        var bits_14 = points[3];
        var tmp_12 = floatFromBits(bits_14);
        // Inline function 'kotlin.fromBits' call

        var bits_15 = points[4];
        var tmp_13 = floatFromBits(bits_15);
        // Inline function 'kotlin.fromBits' call

        var bits_16 = points[5];
        var tmp_14 = floatFromBits(bits_16);
        // Inline function 'kotlin.fromBits' call

        var bits_17 = points[8];
        var tmp$ret$18 = floatFromBits(bits_17);
        tmp = PathSegment_init_$Create$_2(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        // Inline function 'kotlin.fromBits' call

        var bits_18 = points[0];
        var tmp_15 = floatFromBits(bits_18);
        // Inline function 'kotlin.fromBits' call

        var bits_19 = points[1];
        var tmp_16 = floatFromBits(bits_19);
        // Inline function 'kotlin.fromBits' call

        var bits_20 = points[2];
        var tmp_17 = floatFromBits(bits_20);
        // Inline function 'kotlin.fromBits' call

        var bits_21 = points[3];
        var tmp_18 = floatFromBits(bits_21);
        // Inline function 'kotlin.fromBits' call

        var bits_22 = points[4];
        var tmp_19 = floatFromBits(bits_22);
        // Inline function 'kotlin.fromBits' call

        var bits_23 = points[5];
        var tmp_20 = floatFromBits(bits_23);
        // Inline function 'kotlin.fromBits' call

        var bits_24 = points[6];
        var tmp_21 = floatFromBits(bits_24);
        // Inline function 'kotlin.fromBits' call

        var bits_25 = points[7];
        var tmp$ret$26 = floatFromBits(bits_25);
        tmp = PathSegment_init_$Create$_3(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = new PathSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_5() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_instance;
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Picture(ptr) {
    Companion_getInstance_26();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_27() {
    Companion_instance_27 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_instance.f3f();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(objectCreate(protoOf(PictureRecorder)));
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.r3p_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_27();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_11().r3p_1);
  }
  protoOf(PictureRecorder).u3p = function (bounds, bbh) {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.i3f_1, bounds.s3h_1, bounds.t3h_1, bounds.u3h_1, bounds.v3h_1, getPtr(bbh)), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PictureRecorder).v3p = function (bounds, bbh, $super) {
    bbh = bbh === VOID ? null : bbh;
    return $super === VOID ? this.u3p(bounds, bbh) : $super.u3p.call(this, bounds, bbh);
  };
  protoOf(PictureRecorder).w3p = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.i3f_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_instance;
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_28() {
    Companion_instance_28 = this;
    this.x3p_1 = new Point(0.0, 0.0);
  }
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function Point(x, y) {
    Companion_getInstance_28();
    this.y3p_1 = x;
    this.z3p_1 = y;
  }
  protoOf(Point).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.y3p_1, other.y3p_1) === 0))
      return false;
    return compareTo(this.z3p_1, other.z3p_1) === 0;
  };
  protoOf(Point).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.y3p_1) | 0;
    result = imul(result, PRIME) + toBits(this.z3p_1) | 0;
    return result;
  };
  protoOf(Point).toString = function () {
    return 'Point(_x=' + this.y3p_1 + ', _y=' + this.z3p_1 + ')';
  };
  function Point3(x, y, z) {
    this.a3q_1 = x;
    this.b3q_1 = y;
    this.c3q_1 = z;
  }
  protoOf(Point3).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.a3q_1, other.a3q_1) === 0))
      return false;
    if (!(compareTo(this.b3q_1, other.b3q_1) === 0))
      return false;
    return compareTo(this.c3q_1, other.c3q_1) === 0;
  };
  protoOf(Point3).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.a3q_1) | 0;
    result = imul(result, PRIME) + toBits(this.b3q_1) | 0;
    result = imul(result, PRIME) + toBits(this.c3q_1) | 0;
    return result;
  };
  protoOf(Point3).toString = function () {
    return 'Point3(_x=' + this.a3q_1 + ', _y=' + this.b3q_1 + ', _z=' + this.c3q_1 + ')';
  };
  function Companion_29() {
  }
  protoOf(Companion_29).d3q = function (l, t, r, b, xRad, yRad) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([xRad, yRad]);
    return new RRect(l, t, r, b, tmp$ret$0);
  };
  protoOf(Companion_29).e3q = function (l, t, r, b, radii) {
    return new RRect(l, t, r, b, radii);
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    return Companion_instance_29;
  }
  function RRect(l, t, r, b, radii) {
    Rect.call(this, l, t, r, b);
    this.c3i_1 = radii;
  }
  protoOf(RRect).toString = function () {
    return 'RRect(_left=' + this.s3h_1 + ', _top=' + this.t3h_1 + ', _right=' + this.u3h_1 + ', _bottom=' + this.v3h_1 + ', _radii=' + joinToString(this.c3i_1) + ')';
  };
  protoOf(RRect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof RRect))
      return false;
    if (!protoOf(Rect).equals.call(this, other))
      return false;
    var tmp;
    if (this.c3i_1.length === other.c3i_1.length) {
      tmp = contentEquals(this.c3i_1, other.c3i_1);
    } else {
      tmp = contentEquals(normalizeRadii(this.c3i_1), normalizeRadii(other.c3i_1));
    }
    return tmp;
  };
  protoOf(RRect).hashCode = function () {
    var PRIME = 59;
    var result = protoOf(Rect).hashCode.call(this);
    result = imul(result, PRIME) + contentHashCode(this.c3i_1) | 0;
    return result;
  };
  function normalizeRadii(radii) {
    var tmp;
    switch (radii.length) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = new Float32Array(8);
        while (tmp_0 < 8) {
          tmp_1[tmp_0] = 0.0;
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = tmp_1;
        break;
      case 1:
        var tmp_2 = 0;
        var tmp_3 = new Float32Array(8);
        while (tmp_2 < 8) {
          tmp_3[tmp_2] = radii[0];
          tmp_2 = tmp_2 + 1 | 0;
        }

        tmp = tmp_3;
        break;
      case 2:
        var tmp_4 = 0;
        var tmp_5 = new Float32Array(8);
        while (tmp_4 < 8) {
          var tmp_6 = tmp_4;
          tmp_5[tmp_6] = radii[tmp_6 % 2 | 0];
          tmp_4 = tmp_4 + 1 | 0;
        }

        tmp = tmp_5;
        break;
      case 4:
        var tmp_7 = 0;
        var tmp_8 = new Float32Array(8);
        while (tmp_7 < 8) {
          var tmp_9 = tmp_7;
          tmp_8[tmp_9] = radii[tmp_9 / 2 | 0];
          tmp_7 = tmp_7 + 1 | 0;
        }

        tmp = tmp_8;
        break;
      case 8:
        tmp = radii;
        break;
      default:
        throw Error_init_$Create$('illegal radii array');
    }
    return tmp;
  }
  function Companion_30() {
  }
  protoOf(Companion_30).f3q = function (l, t, r, b) {
    return new Rect(l, t, r, b);
  };
  protoOf(Companion_30).g3q = function (l, t, w, h) {
    return new Rect(l, t, l + w, t + h);
  };
  protoOf(Companion_30).g3o = function (block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(4);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.m3l(result);
        block($this$interopScope, handle);
        $this$interopScope.n3l(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    var result_0 = result;
    return new Rect(result_0[0], result_0[1], result_0[2], result_0[3]);
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    return Companion_instance_30;
  }
  function Rect(left, top, right, bottom) {
    this.s3h_1 = left;
    this.t3h_1 = top;
    this.u3h_1 = right;
    this.v3h_1 = bottom;
  }
  protoOf(Rect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.s3h_1, other.s3h_1) === 0))
      return false;
    if (!(compareTo(this.t3h_1, other.t3h_1) === 0))
      return false;
    if (!(compareTo(this.u3h_1, other.u3h_1) === 0))
      return false;
    return compareTo(this.v3h_1, other.v3h_1) === 0;
  };
  protoOf(Rect).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.s3h_1) | 0;
    result = imul(result, PRIME) + toBits(this.t3h_1) | 0;
    result = imul(result, PRIME) + toBits(this.u3h_1) | 0;
    result = imul(result, PRIME) + toBits(this.v3h_1) | 0;
    return result;
  };
  protoOf(Rect).toString = function () {
    return 'Rect(_left=' + this.s3h_1 + ', _top=' + this.t3h_1 + ', _right=' + this.u3h_1 + ', _bottom=' + this.v3h_1 + ')';
  };
  function Companion_31() {
    Companion_instance_31 = this;
    Companion_instance_46.l3f();
  }
  protoOf(Companion_31).h3q = function (x0, y0, x1, y1, colors, positions, style) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(positions == null || colors.length === positions.length)) {
      // Inline function 'org.jetbrains.skia.Companion.makeLinearGradient.<anonymous>' call
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.f3f();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeLinearGradient.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeLinearGradient(x0, y0, x1, y1, $this$interopScope.h3h(colors), $this$interopScope.d3i(positions), colors.length, style.e3m_1.s2_1, style.h3m(), $this$interopScope.d3i(style.i3m()));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  var Companion_instance_31;
  function Companion_getInstance_31() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Shader(ptr) {
    Companion_getInstance_31();
    RefCnt_init_$Init$(ptr, this);
  }
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_instance_46.l3f();
  }
  protoOf(ShadowUtils).i3q = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_instance.f3f();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    try {
      org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.a3q_1, zPlaneParams.b3q_1, zPlaneParams.c3q_1, lightPos.a3q_1, lightPos.b3q_1, lightPos.c3q_1, lightRadius, ambientColor, spotColor, flags);
    }finally {
      reachabilityBarrier(canvas);
      reachabilityBarrier(path);
    }
  };
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.j3q_1 = ptr;
    this.k3q_1 = disposePtr;
  }
  protoOf(ArrayDecoder).ot = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.j3q_1, this.k3q_1);
  };
  protoOf(ArrayDecoder).l3q = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.j3q_1, index);
  };
  protoOf(ArrayDecoder).k = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.j3q_1);
  };
  function Companion_32() {
    Companion_instance_32 = this;
    Companion_instance_46.l3f();
  }
  protoOf(Companion_32).m3q = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_instance.f3f();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.Companion.makeFromBackendRenderTarget.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var tmp_0 = getPtr(context);
          var tmp_1 = getPtr(rt);
          var tmp_2 = getPtr(colorSpace);
          tmp$ret$1 = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(tmp_0, tmp_1, origin.s2_1, colorFormat.s2_1, tmp_2, $this$interopScope.h3h(surfaceProps == null ? null : surfaceProps.n3q()));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_instance_48.n3f() ? null : Surface_init_$Create$(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function Surface_init_$Init$(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.q3q_1 = context;
    $this.r3q_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$(ptr, context, renderTarget) {
    return Surface_init_$Init$(ptr, context, renderTarget, objectCreate(protoOf(Surface)));
  }
  protoOf(Surface).s3q = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.i3f_1);
      var tmp_0;
      if (ptr === Companion_instance_48.n3f()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).t3q = function () {
    var tmp0_safe_receiver = this.q3q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y3j(this);
    }
  };
  function Surface() {
    Companion_getInstance_32();
  }
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_instance;
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_instance;
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function _getPixelGeometryOrdinal($this) {
    return $this.k3h_1.s2_1;
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    isDeviceIndependentFonts = isDeviceIndependentFonts === VOID ? false : isDeviceIndependentFonts;
    pixelGeometry = pixelGeometry === VOID ? PixelGeometry_UNKNOWN_getInstance() : pixelGeometry;
    this.j3h_1 = isDeviceIndependentFonts;
    this.k3h_1 = pixelGeometry;
  }
  protoOf(SurfaceProps).l3h = function () {
    return 0 | (this.j3h_1 ? 1 : 0);
  };
  protoOf(SurfaceProps).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.j3h_1 === other.j3h_1))
      return false;
    return this.k3h_1.equals(other.k3h_1);
  };
  protoOf(SurfaceProps).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.j3h_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.k3h_1.hashCode() | 0;
    return result;
  };
  protoOf(SurfaceProps).toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.j3h_1 + ', _pixelGeometry=' + this.k3h_1.toString() + ')';
  };
  protoOf(SurfaceProps).n3q = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([this.l3h(), _getPixelGeometryOrdinal(this)]);
  };
  function Companion_33() {
    Companion_instance_33 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_33;
  function Companion_getInstance_33() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function Typeface(ptr) {
    Companion_getInstance_33();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Typeface).w3q = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_Typeface__1nGetFontStyle(this.i3f_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).x3q = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_Typeface__1nGetUniqueId(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).j3f = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.i3f_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Typeface).y3q = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      // Inline function 'org.jetbrains.skia.impl.use' call
      // Inline function 'org.jetbrains.skia.Typeface.<get-familyName>.<anonymous>' call
      var tmp$ret$0 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.i3f_1);
      var this_0 = new ManagedString(tmp$ret$0);
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.impl.withStringResult.<anonymous>' call
        tmp_0 = this_0.toString();
      }finally {
        this_0.u1s();
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).toString = function () {
    return "Typeface(familyName='" + this.y3q() + "', fontStyle=" + this.w3q().toString() + ', uniqueId=' + this.x3q() + ')';
  };
  function Companion_34() {
    Companion_instance_34 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_34;
  function Companion_getInstance_34() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.z3q_1 = org_jetbrains_skia_U16String__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function U16String(ptr) {
    Companion_getInstance_34();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_12().z3q_1);
  }
  function CharDirection() {
    CharDirection_instance = this;
    Companion_instance_46.l3f();
    this.a3r_1 = 0;
    this.b3r_1 = 1;
    this.c3r_1 = 2;
    this.d3r_1 = 3;
    this.e3r_1 = 4;
    this.f3r_1 = 5;
    this.g3r_1 = 6;
    this.h3r_1 = 7;
    this.i3r_1 = 8;
    this.j3r_1 = 9;
    this.k3r_1 = 10;
    this.l3r_1 = 11;
    this.m3r_1 = 12;
    this.n3r_1 = 13;
    this.o3r_1 = 14;
    this.p3r_1 = 15;
    this.q3r_1 = 16;
    this.r3r_1 = 17;
    this.s3r_1 = 18;
    this.t3r_1 = 19;
    this.u3r_1 = 20;
    this.v3r_1 = 21;
    this.w3r_1 = 22;
  }
  protoOf(CharDirection).x3r = function (codePoint) {
    return org_jetbrains_skia_icu_Unicode_charDirection(codePoint);
  };
  var CharDirection_instance;
  function CharDirection_getInstance() {
    if (CharDirection_instance == null)
      new CharDirection();
    return CharDirection_instance;
  }
  function getPtr(n) {
    var tmp1_elvis_lhs = n == null ? null : n.i3f_1;
    return tmp1_elvis_lhs == null ? Companion_instance_48.n3f() : tmp1_elvis_lhs;
  }
  var Affinity_UPSTREAM_instance;
  var Affinity_DOWNSTREAM_instance;
  var Affinity_entriesInitialized;
  function Affinity_initEntries() {
    if (Affinity_entriesInitialized)
      return Unit_instance;
    Affinity_entriesInitialized = true;
    Affinity_UPSTREAM_instance = new Affinity('UPSTREAM', 0);
    Affinity_DOWNSTREAM_instance = new Affinity('DOWNSTREAM', 1);
  }
  function Affinity(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Affinity_UPSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_UPSTREAM_instance;
  }
  function Affinity_DOWNSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_DOWNSTREAM_instance;
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_instance;
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_instance;
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_instance;
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function DecorationLineStyle_DOUBLE_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOUBLE_instance;
  }
  function DecorationLineStyle_DOTTED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOTTED_instance;
  }
  function DecorationLineStyle_DASHED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DASHED_instance;
  }
  function DecorationLineStyle_WAVY_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_WAVY_instance;
  }
  function Companion_35() {
    Companion_instance_35 = this;
    this.y3r_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  var Companion_instance_35;
  function Companion_getInstance_35() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_35();
    this.z3r_1 = _underline;
    this.a3s_1 = _overline;
    this.b3s_1 = _lineThrough;
    this.c3s_1 = _gaps;
    this.d3s_1 = color;
    this.e3s_1 = lineStyle;
    this.f3s_1 = thicknessMultiplier;
  }
  protoOf(DecorationStyle).g3s = function () {
    return this.e3s_1;
  };
  protoOf(DecorationStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.z3r_1 === other.z3r_1))
      return false;
    if (!(this.a3s_1 === other.a3s_1))
      return false;
    if (!(this.b3s_1 === other.b3s_1))
      return false;
    if (!(this.c3s_1 === other.c3s_1))
      return false;
    if (!(this.d3s_1 === other.d3s_1))
      return false;
    if (!(compareTo(this.f3s_1, other.f3s_1) === 0))
      return false;
    return this.g3s().equals(other.g3s());
  };
  protoOf(DecorationStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.z3r_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.a3s_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.b3s_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.c3s_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.d3s_1 | 0;
    result = imul(result, PRIME) + toBits(this.f3s_1) | 0;
    result = imul(result, PRIME) + this.g3s().hashCode() | 0;
    return result;
  };
  protoOf(DecorationStyle).toString = function () {
    return 'DecorationStyle(_underline=' + this.z3r_1 + ', _overline=' + this.a3s_1 + ', _lineThrough=' + this.b3s_1 + ', _gaps=' + this.c3s_1 + ', _color=' + this.d3s_1 + ', _lineStyle=' + this.g3s().toString() + ', _thicknessMultiplier=' + this.f3s_1 + ')';
  };
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_6() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_36() {
    Companion_instance_36 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_36;
  function Companion_getInstance_36() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_instance.f3f();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(objectCreate(protoOf(FontCollection)));
  }
  function FontCollection(ptr) {
    Companion_getInstance_36();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(FontCollection).j3s = function (fontMgr) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.i3f_1, getPtr(fontMgr), Companion_instance_48.n3f());
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).k3s = function (fontMgr) {
    return this.l3s(fontMgr, null);
  };
  protoOf(FontCollection).l3s = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_instance.f3f();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.i3f_1, getPtr(fontMgr), $this$interopScope.l3g(defaultFamilyName));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).m3s = function (familyNames, style) {
    var tmp;
    try {
      Stats_instance.f3f();
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var tmp_1 = this.i3f_1;
            var tmp_2 = $this$interopScope.n3s(familyNames);
            var tmp1_elvis_lhs = familyNames == null ? null : familyNames.length;
            tmp$ret$1 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.u3l_1);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
            }
          }
        }
        arrayDecoder = new ArrayDecoder(tmp$ret$1, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var arrayDecoder_0 = arrayDecoder;
        // Inline function 'kotlin.collections.toTypedArray' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = until(0, arrayDecoder_0.k());
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var inductionVariable = this_0.y_1;
        var last = this_0.z_1;
        if (inductionVariable <= last)
          do {
            var item = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var i = item;
            var tmp$ret$3 = new Typeface(arrayDecoder_0.l3q(i));
            destination.e(tmp$ret$3);
          }
           while (!(item === last));
        tmp_0 = copyToArray(destination);
      }finally {
        var tmp0_safe_receiver = arrayDecoder;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.ot();
        }
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function FontRastrSettings(edging, hinting, subpixel) {
    this.o3s_1 = edging;
    this.p3s_1 = hinting;
    this.q3s_1 = subpixel;
  }
  protoOf(FontRastrSettings).toString = function () {
    return 'FontRastrSettings(edging=' + this.o3s_1.toString() + ', hinting=' + this.p3s_1.toString() + ', subpixel=' + this.q3s_1 + ')';
  };
  protoOf(FontRastrSettings).hashCode = function () {
    var result = this.o3s_1.hashCode();
    result = imul(result, 31) + this.p3s_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q3s_1) | 0;
    return result;
  };
  protoOf(FontRastrSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontRastrSettings))
      return false;
    var tmp0_other_with_cast = other instanceof FontRastrSettings ? other : THROW_CCE();
    if (!this.o3s_1.equals(tmp0_other_with_cast.o3s_1))
      return false;
    if (!this.p3s_1.equals(tmp0_other_with_cast.p3s_1))
      return false;
    if (!(this.q3s_1 === tmp0_other_with_cast.q3s_1))
      return false;
    return true;
  };
  var HeightMode_ALL_instance;
  var HeightMode_DISABLE_FIRST_ASCENT_instance;
  var HeightMode_DISABLE_LAST_DESCENT_instance;
  var HeightMode_DISABLE_ALL_instance;
  var HeightMode_entriesInitialized;
  function HeightMode_initEntries() {
    if (HeightMode_entriesInitialized)
      return Unit_instance;
    HeightMode_entriesInitialized = true;
    HeightMode_ALL_instance = new HeightMode('ALL', 0);
    HeightMode_DISABLE_FIRST_ASCENT_instance = new HeightMode('DISABLE_FIRST_ASCENT', 1);
    HeightMode_DISABLE_LAST_DESCENT_instance = new HeightMode('DISABLE_LAST_DESCENT', 2);
    HeightMode_DISABLE_ALL_instance = new HeightMode('DISABLE_ALL', 3);
  }
  function HeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HeightMode_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_ALL_instance;
  }
  function HeightMode_DISABLE_FIRST_ASCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_FIRST_ASCENT_instance;
  }
  function HeightMode_DISABLE_LAST_DESCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_LAST_DESCENT_instance;
  }
  function HeightMode_DISABLE_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_ALL_instance;
  }
  function Companion_37() {
  }
  protoOf(Companion_37).r3s = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  protoOf(Companion_37).s3s = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  protoOf(Companion_37).t3s = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.l3m(intArray);
        // Inline function 'org.jetbrains.skia.paragraph.Companion.getArrayElement.<anonymous>' call
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0_0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var $this$interopScope_0 = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var handle_0 = $this$interopScope_0.u3s(doubleArray);
            // Inline function 'org.jetbrains.skia.paragraph.Companion.getArrayElement.<anonymous>.<anonymous>' call
            org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, handle, handle_0);
            $this$interopScope_0.v3s(handle_0, doubleArray);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
            }
          }
        }
        $this$interopScope.i3h(handle, intArray);
        break $l$block_0;
      }finally {
        var tmp1_0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1_0 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  var Companion_instance_37;
  function Companion_getInstance_37() {
    return Companion_instance_37;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    this.w3s_1 = startIndex;
    this.x3s_1 = endIndex;
    this.y3s_1 = endExcludingWhitespaces;
    this.z3s_1 = endIncludingNewline;
    this.a3t_1 = isHardBreak;
    this.b3t_1 = ascent;
    this.c3t_1 = descent;
    this.d3t_1 = unscaledAscent;
    this.e3t_1 = height;
    this.f3t_1 = width;
    this.g3t_1 = left;
    this.h3t_1 = baseline;
    this.i3t_1 = lineNumber;
  }
  protoOf(LineMetrics).j3t = function () {
    return this.g3t_1 + this.f3t_1;
  };
  protoOf(LineMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.w3s_1 === other.w3s_1))
      return false;
    if (!(this.x3s_1 === other.x3s_1))
      return false;
    if (!(this.y3s_1 === other.y3s_1))
      return false;
    if (!(this.z3s_1 === other.z3s_1))
      return false;
    if (!(this.a3t_1 === other.a3t_1))
      return false;
    if (!(compareTo(this.b3t_1, other.b3t_1) === 0))
      return false;
    if (!(compareTo(this.c3t_1, other.c3t_1) === 0))
      return false;
    if (!(compareTo(this.d3t_1, other.d3t_1) === 0))
      return false;
    if (!(compareTo(this.e3t_1, other.e3t_1) === 0))
      return false;
    if (!(compareTo(this.f3t_1, other.f3t_1) === 0))
      return false;
    if (!(compareTo(this.g3t_1, other.g3t_1) === 0))
      return false;
    if (!(compareTo(this.h3t_1, other.h3t_1) === 0))
      return false;
    return this.i3t_1 === other.i3t_1;
  };
  protoOf(LineMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.w3s_1 | 0;
    result = imul(result, PRIME) + this.x3s_1 | 0;
    result = imul(result, PRIME) + this.y3s_1 | 0;
    result = imul(result, PRIME) + this.z3s_1 | 0;
    result = imul(result, PRIME) + (this.a3t_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + toBits_0(this.b3t_1).o3() | 0;
    result = imul(result, PRIME) + toBits_0(this.c3t_1).o3() | 0;
    result = imul(result, PRIME) + toBits_0(this.d3t_1).o3() | 0;
    result = imul(result, PRIME) + toBits_0(this.e3t_1).o3() | 0;
    result = imul(result, PRIME) + toBits_0(this.f3t_1).o3() | 0;
    result = imul(result, PRIME) + toBits_0(this.g3t_1).o3() | 0;
    result = imul(result, PRIME) + toBits_0(this.h3t_1).o3() | 0;
    result = imul(result, PRIME) + this.i3t_1 | 0;
    return result;
  };
  protoOf(LineMetrics).toString = function () {
    return 'LineMetrics(_startIndex=' + this.w3s_1 + ', _endIndex=' + this.x3s_1 + ', _endExcludingWhitespaces=' + this.y3s_1 + ', _endIncludingNewline=' + this.z3s_1 + ', _hardBreak=' + this.a3t_1 + ', _ascent=' + this.b3t_1 + ', _descent=' + this.c3t_1 + ', _unscaledAscent=' + this.d3t_1 + ', _height=' + this.e3t_1 + ', _width=' + this.f3t_1 + ', _left=' + this.g3t_1 + ', _baseline=' + this.h3t_1 + ', _lineNumber=' + this.i3t_1 + ')';
  };
  function Companion_38() {
    Companion_instance_38 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_38;
  function Companion_getInstance_38() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.k3t_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function Paragraph$getWordBoundary$lambda(this$0, $offset) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary(this$0.i3f_1, $offset, it);
      return Unit_instance;
    };
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_38();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_13().k3t_1);
    Stats_instance.f3f();
    this.n3t_1 = text;
  }
  protoOf(Paragraph).u1s = function () {
    if (!(this.n3t_1 == null)) {
      ensureNotNull(this.n3t_1).u1s();
      this.n3t_1 = null;
    }
    protoOf(Managed).u1s.call(this);
  };
  protoOf(Paragraph).h3c = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).o3t = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).p3t = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).q3t = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).r3t = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).s3t = function (width) {
    Stats_instance.f3f();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.i3f_1, width);
    return this;
  };
  protoOf(Paragraph).t3t = function (canvas, x, y) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.i3f_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  protoOf(Paragraph).u3t = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_instance.f3f();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.getRectsForRange.<anonymous>' call
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.i3f_1, start, end, rectHeightMode.s2_1, rectWidthMode.s2_1);
          var size = Companion_instance_42.r3s(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_42.t3s(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_42.s3s(this_0);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).v3t = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-rectsForPlaceholders>.<anonymous>' call
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.i3f_1);
          var size = Companion_instance_42.r3s(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_42.t3s(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_42.s3s(this_0);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).w3t = function (dx, dy) {
    var tmp;
    try {
      Stats_instance.f3f();
      var res = org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate(this.i3f_1, dx, dy);
      tmp = res >= 0 ? new PositionWithAffinity(res, Affinity_DOWNSTREAM_getInstance()) : new PositionWithAffinity((-res | 0) - 1 | 0, Affinity_UPSTREAM_getInstance());
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).x3t = function (offset) {
    var tmp;
    try {
      Stats_instance.f3f();
      var tmp_0 = Companion_instance_16;
      tmp = fromInteropPointer_0(tmp_0, Paragraph$getWordBoundary$lambda(this, offset));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).y3t = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.n3t_1 == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [];
      } else {
        Stats_instance.f3f();
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-lineMetrics>.<anonymous>' call
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.i3f_1, getPtr(this.n3t_1));
            var size = Companion_instance_37.r3s(this_0);
            var tmp_1 = 0;
            // Inline function 'kotlin.arrayOfNulls' call
            var tmp_2 = fillArrayVal(Array(size), null);
            while (tmp_1 < size) {
              var tmp_3 = tmp_1;
              tmp_2[tmp_3] = Companion_instance_37.t3s(this_0, tmp_3);
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_2;
            Companion_instance_37.s3s(this_0);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
            }
          }
        }
        tmp_0 = result;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.n3t_1);
    }
    return tmp;
  };
  protoOf(Paragraph).z3t = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.i3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).a3u = function () {
    Stats_instance.f3f();
    org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty(this.i3f_1);
    return this;
  };
  protoOf(Paragraph).b3u = function (from, to, paint) {
    var tmp;
    try {
      if (!(this.n3t_1 == null)) {
        Stats_instance.f3f();
        org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint(this.i3f_1, from, to, getPtr(paint), getPtr(this.n3t_1));
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
      reachabilityBarrier(this.n3t_1);
    }
    return tmp;
  };
  function Companion_39() {
    Companion_instance_39 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_39;
  function Companion_getInstance_39() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.c3u_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_39();
    Managed.call(this, makeParagraphBuilder(style, fc), _FinalizerHolder_getInstance_14().c3u_1);
    this.f3u_1 = null;
  }
  protoOf(ParagraphBuilder).g3u = function (style) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.i3f_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  protoOf(ParagraphBuilder).h3u = function (text) {
    Stats_instance.f3f();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.i3f_1, $this$interopScope.l3g(text));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    if (this.f3u_1 == null)
      this.f3u_1 = ManagedString_init_$Create$(text);
    else {
      ensureNotNull(this.f3u_1).y3m(text);
    }
    return this;
  };
  protoOf(ParagraphBuilder).i3u = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(style.j3u_1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(style.k3u_1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(style.n3u_1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_1 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.i3f_1, style.j3u_1, style.k3u_1, style.o3u().s2_1, style.p3u().s2_1, style.n3u_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(ParagraphBuilder).k1u = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.i3f_1), this.f3u_1);
      this.f3u_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function makeParagraphBuilder(style, fc) {
    Stats_instance.f3f();
    var tmp;
    try {
      tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    }finally {
      reachabilityBarrier(style);
      reachabilityBarrier(fc);
    }
    return tmp;
  }
  function Companion_40() {
    Companion_instance_40 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_40;
  function Companion_getInstance_40() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function _FinalizerHolder_15() {
    _FinalizerHolder_instance_15 = this;
    this.q3u_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_15;
  function _FinalizerHolder_getInstance_15() {
    if (_FinalizerHolder_instance_15 == null)
      new _FinalizerHolder_15();
    return _FinalizerHolder_instance_15;
  }
  function ParagraphStyle() {
    Companion_getInstance_40();
    Managed.call(this, org_jetbrains_skia_paragraph_ParagraphStyle__1nMake(), _FinalizerHolder_getInstance_15().q3u_1);
    Stats_instance.f3f();
  }
  protoOf(ParagraphStyle).j3f = function (other) {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.i3f_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).t3u = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.i3f_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).u3u = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.i3f_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).v3u = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.i3f_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).w3u = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.i3f_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).x3u = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.i3f_1, $this$interopScope.l3g(value));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).y3u = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode(this.i3f_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).z3u = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings(this.i3f_1, value.o3s_1.s2_1, value.p3s_1.s2_1, value.q3s_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).a3v = function (value) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.i3f_1, value.b3v_1, value.c3v_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_instance;
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.j3u_1 = width;
    this.k3u_1 = height;
    this.l3u_1 = alignment;
    this.m3u_1 = baselineMode;
    this.n3u_1 = baseline;
  }
  protoOf(PlaceholderStyle).o3u = function () {
    return this.l3u_1;
  };
  protoOf(PlaceholderStyle).p3u = function () {
    return this.m3u_1;
  };
  protoOf(PlaceholderStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.j3u_1, other.j3u_1) === 0))
      return false;
    if (!(compareTo(this.k3u_1, other.k3u_1) === 0))
      return false;
    if (!(compareTo(this.n3u_1, other.n3u_1) === 0))
      return false;
    if (!this.o3u().equals(other.o3u()))
      return false;
    return this.p3u().equals(other.p3u());
  };
  protoOf(PlaceholderStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.j3u_1) | 0;
    result = imul(result, PRIME) + toBits(this.k3u_1) | 0;
    result = imul(result, PRIME) + toBits(this.n3u_1) | 0;
    result = imul(result, PRIME) + this.o3u().hashCode() | 0;
    result = imul(result, PRIME) + this.p3u().hashCode() | 0;
    return result;
  };
  protoOf(PlaceholderStyle).toString = function () {
    return 'PlaceholderStyle(_width=' + this.j3u_1 + ', _height=' + this.k3u_1 + ', _alignment=' + this.o3u().toString() + ', _baselineMode=' + this.p3u().toString() + ', _baseline=' + this.n3u_1 + ')';
  };
  function PositionWithAffinity(position, affinity) {
    this.d3v_1 = position;
    this.e3v_1 = affinity;
  }
  protoOf(PositionWithAffinity).f3v = function () {
    return this.e3v_1;
  };
  protoOf(PositionWithAffinity).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PositionWithAffinity))
      return false;
    if (!(this.d3v_1 === other.d3v_1))
      return false;
    return this.f3v().equals(other.f3v());
  };
  protoOf(PositionWithAffinity).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.d3v_1 | 0;
    result = imul(result, PRIME) + this.f3v().hashCode() | 0;
    return result;
  };
  protoOf(PositionWithAffinity).toString = function () {
    return 'PositionWithAffinity(_position=' + this.d3v_1 + ', _affinity=' + this.f3v().toString() + ')';
  };
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_instance;
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_instance;
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_41() {
  }
  var Companion_instance_41;
  function Companion_getInstance_41() {
    return Companion_instance_41;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    this.g3v_1 = color;
    this.h3v_1 = offsetX;
    this.i3v_1 = offsetY;
    this.j3v_1 = blurSigma;
  }
  protoOf(Shadow).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.g3v_1 === other.g3v_1))
      return false;
    if (!(compareTo(this.h3v_1, other.h3v_1) === 0))
      return false;
    if (!(compareTo(this.i3v_1, other.i3v_1) === 0))
      return false;
    return compareTo(this.j3v_1, other.j3v_1) === 0;
  };
  protoOf(Shadow).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.g3v_1 | 0;
    result = imul(result, PRIME) + toBits(this.h3v_1) | 0;
    result = imul(result, PRIME) + toBits(this.i3v_1) | 0;
    var blurSigma = toBits_0(this.j3v_1);
    result = imul(result, PRIME) + blurSigma.j3(32).m3(blurSigma).o3() | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(_color=' + this.g3v_1 + ', _offsetX=' + this.h3v_1 + ', _offsetY=' + this.i3v_1 + ', _blurSigma=' + this.j3v_1 + ')';
  };
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_instance_30.f3q(l, t, r, b), values_6()[direction]);
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, objectCreate(protoOf(TextBox)));
  }
  function Companion_42() {
  }
  protoOf(Companion_42).t3s = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var rectPtr = $this$interopScope.d3i(rect);
        var directionPtr = $this$interopScope.h3h(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        $this$interopScope.n3l(rectPtr, rect);
        $this$interopScope.i3h(directionPtr, direction);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  protoOf(Companion_42).r3s = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  protoOf(Companion_42).s3s = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  var Companion_instance_42;
  function Companion_getInstance_42() {
    return Companion_instance_42;
  }
  function TextBox(rect, direction) {
    this.k3v_1 = rect;
    this.l3v_1 = direction;
  }
  protoOf(TextBox).m3v = function () {
    return this.l3v_1;
  };
  protoOf(TextBox).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.k3v_1.equals(other.k3v_1))
      return false;
    return this.m3v().equals(other.m3v());
  };
  protoOf(TextBox).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.k3v_1.hashCode() | 0;
    result = imul(result, PRIME) + this.m3v().hashCode() | 0;
    return result;
  };
  protoOf(TextBox).toString = function () {
    return 'TextBox(_rect=' + this.k3v_1.toString() + ', _direction=' + this.m3v().toString() + ')';
  };
  function TextIndent(firstLine, restLine) {
    firstLine = firstLine === VOID ? 0.0 : firstLine;
    restLine = restLine === VOID ? 0.0 : restLine;
    this.b3v_1 = firstLine;
    this.c3v_1 = restLine;
  }
  protoOf(TextIndent).toString = function () {
    return 'TextIndent(firstLine=' + this.b3v_1 + ', restLine=' + this.c3v_1 + ')';
  };
  protoOf(TextIndent).hashCode = function () {
    var result = getNumberHashCode(this.b3v_1);
    result = imul(result, 31) + getNumberHashCode(this.c3v_1) | 0;
    return result;
  };
  protoOf(TextIndent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    var tmp0_other_with_cast = other instanceof TextIndent ? other : THROW_CCE();
    if (!equals(this.b3v_1, tmp0_other_with_cast.b3v_1))
      return false;
    if (!equals(this.c3v_1, tmp0_other_with_cast.c3v_1))
      return false;
    return true;
  };
  function Companion_43() {
    Companion_instance_43 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_43;
  function Companion_getInstance_43() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_instance.f3f();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(objectCreate(protoOf(TextStyle)));
  }
  function _FinalizerHolder_16() {
    _FinalizerHolder_instance_16 = this;
    this.n3v_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_16;
  function _FinalizerHolder_getInstance_16() {
    if (_FinalizerHolder_instance_16 == null)
      new _FinalizerHolder_16();
    return _FinalizerHolder_instance_16;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.i3f_1, it);
      return Unit_instance;
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_43();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_16().n3v_1);
  }
  protoOf(TextStyle).j3f = function (other) {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.i3f_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(TextStyle).j3n = function (value) {
    this.q3v(value);
  };
  protoOf(TextStyle).q3v = function (color) {
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.i3f_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).r3v = function (value) {
    this.s3v(value);
  };
  protoOf(TextStyle).s3v = function (paint) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_TextStyle__1nSetForeground(this.i3f_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).t3v = function (value) {
    this.u3v(value);
  };
  protoOf(TextStyle).u3v = function (paint) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.i3f_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).v3v = function (value) {
    this.w3v(value);
  };
  protoOf(TextStyle).w3v = function (d) {
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.i3f_1, d.z3r_1, d.a3s_1, d.b3s_1, d.c3s_1, d.d3s_1, d.e3s_1.s2_1, d.f3s_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).x3v = function (value) {
    this.y3v(value);
  };
  protoOf(TextStyle).w3q = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.i3f_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).y3v = function (s) {
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.i3f_1, s.u3l_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).z3v = function (s) {
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.i3f_1, s.g3v_1, s.h3v_1, s.i3v_1, s.j3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).a3w = function (f) {
    try {
      Stats_instance.f3f();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.i3f_1, $this$interopScope.l3g(f.v3k()), f.s3k_1);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).b3w = function (FontFeatures) {
    var inductionVariable = 0;
    var last = FontFeatures.length;
    while (inductionVariable < last) {
      var s = FontFeatures[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.a3w(s);
    }
    return this;
  };
  protoOf(TextStyle).c3w = function (value) {
    this.d3w(value);
  };
  protoOf(TextStyle).d3w = function (size) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(size)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.i3f_1, size);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).e3w = function (value) {
    this.f3w(value);
  };
  protoOf(TextStyle).f3w = function (families) {
    Stats_instance.f3f();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var tmp = this.i3f_1;
        var tmp_0 = $this$interopScope.n3s(families);
        var tmp1_elvis_lhs = families == null ? null : families.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).g3w = function (value) {
    this.h3w(value);
  };
  protoOf(TextStyle).h3w = function (height) {
    if (height == null) {
      try {
        Stats_instance.f3f();
        org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.i3f_1, false, 0.0);
      }finally {
        reachabilityBarrier(this);
      }
    } else {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isNaN_0(height)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      try {
        Stats_instance.f3f();
        org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.i3f_1, true, height);
      }finally {
        reachabilityBarrier(this);
      }
    }
    return this;
  };
  protoOf(TextStyle).i3w = function (value) {
    this.j3w(value);
  };
  protoOf(TextStyle).j3w = function (letterSpacing) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(letterSpacing)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.i3f_1, letterSpacing);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).k3w = function (value) {
    this.l3w(value);
  };
  protoOf(TextStyle).l3w = function (baselineShift) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(baselineShift)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.i3f_1, baselineShift);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).m3w = function (value) {
    this.n3w(value);
  };
  protoOf(TextStyle).n3w = function (typeface) {
    var tmp;
    try {
      Stats_instance.f3f();
      org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface(this.i3f_1, getPtr(typeface));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  protoOf(TextStyle).o3w = function () {
    var tmp;
    try {
      Stats_instance.f3f();
      var tmp_0 = Companion_instance_11;
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function TypefaceFontProvider_init_$Init$($this) {
    TypefaceFontProvider.call($this, org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake());
    return $this;
  }
  function TypefaceFontProvider_init_$Create$() {
    return TypefaceFontProvider_init_$Init$(objectCreate(protoOf(TypefaceFontProvider)));
  }
  function Companion_44() {
    Companion_instance_44 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_44;
  function Companion_getInstance_44() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function TypefaceFontProvider(ptr) {
    Companion_getInstance_44();
    FontMgr_init_$Init$(ptr, this);
    Stats_instance.f3f();
  }
  function TypefaceFontProviderWithFallback_init_$Init$($this) {
    TypefaceFontProviderWithFallback.call($this, org_jetbrains_skia_paragraph_TypefaceFontProviderWithFallback__1nMakeAsFallbackProvider());
    return $this;
  }
  function TypefaceFontProviderWithFallback_init_$Create$() {
    return TypefaceFontProviderWithFallback_init_$Init$(objectCreate(protoOf(TypefaceFontProviderWithFallback)));
  }
  function Companion_45() {
    Companion_instance_45 = this;
    Companion_instance_46.l3f();
  }
  var Companion_instance_45;
  function Companion_getInstance_45() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function TypefaceFontProviderWithFallback(ptr) {
    Companion_getInstance_45();
    TypefaceFontProvider.call(this, ptr);
    Stats_instance.f3f();
  }
  protoOf(TypefaceFontProviderWithFallback).r3w = function (typeface, alias) {
    var tmp;
    try {
      Stats_instance.f3f();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.TypefaceFontProviderWithFallback.registerTypeface.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_TypefaceFontProviderWithFallback__1nRegisterTypefaceForFallback(this.i3f_1, getPtr(typeface), $this$interopScope.l3g(alias));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().o1k();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_instance;
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 5);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 6);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 7);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  var OS_Android_instance;
  var OS_Linux_instance;
  var OS_Windows_instance;
  var OS_MacOS_instance;
  var OS_Ios_instance;
  var OS_Tvos_instance;
  var OS_JS_instance;
  var OS_Unknown_instance;
  var OS_entriesInitialized;
  function OS_initEntries() {
    if (OS_entriesInitialized)
      return Unit_instance;
    OS_entriesInitialized = true;
    OS_Android_instance = new OS('Android', 0, 'android');
    OS_Linux_instance = new OS('Linux', 1, 'linux');
    OS_Windows_instance = new OS('Windows', 2, 'windows');
    OS_MacOS_instance = new OS('MacOS', 3, 'macos');
    OS_Ios_instance = new OS('Ios', 4, 'ios');
    OS_Tvos_instance = new OS('Tvos', 5, 'tvos');
    OS_JS_instance = new OS('JS', 6, 'js');
    OS_Unknown_instance = new OS('Unknown', 7, 'unknown');
  }
  function OS(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.u3w_1 = id;
  }
  protoOf(OS).v3w = function () {
    return this.equals(OS_MacOS_getInstance());
  };
  var Arch_X64_instance;
  var Arch_Arm64_instance;
  var Arch_JS_instance;
  var Arch_WASM_instance;
  var Arch_Unknown_instance;
  var Arch_entriesInitialized;
  function Arch_initEntries() {
    if (Arch_entriesInitialized)
      return Unit_instance;
    Arch_entriesInitialized = true;
    Arch_X64_instance = new Arch('X64', 0, 'x64');
    Arch_Arm64_instance = new Arch('Arm64', 1, 'arm64');
    Arch_JS_instance = new Arch('JS', 2, 'js');
    Arch_WASM_instance = new Arch('WASM', 3, 'wasm');
    Arch_Unknown_instance = new Arch('Unknown', 4, 'unknown');
  }
  function Arch(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.y3w_1 = id;
  }
  function OS_Android_getInstance() {
    OS_initEntries();
    return OS_Android_instance;
  }
  function OS_Linux_getInstance() {
    OS_initEntries();
    return OS_Linux_instance;
  }
  function OS_Windows_getInstance() {
    OS_initEntries();
    return OS_Windows_instance;
  }
  function OS_MacOS_getInstance() {
    OS_initEntries();
    return OS_MacOS_instance;
  }
  function OS_Ios_getInstance() {
    OS_initEntries();
    return OS_Ios_instance;
  }
  function OS_Unknown_getInstance() {
    OS_initEntries();
    return OS_Unknown_instance;
  }
  function Arch_Unknown_getInstance() {
    Arch_initEntries();
    return Arch_Unknown_instance;
  }
  function ClipboardManager() {
  }
  protoOf(ClipboardManager).z3w = function (text) {
    return ClipboardManager_setText(text);
  };
  protoOf(ClipboardManager).a3x = function () {
    return ClipboardManager_getText();
  };
  protoOf(ClipboardManager).b3x = function () {
    return ClipboardManager_hasText();
  };
  function URIManager() {
  }
  function RenderException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  var SystemTheme_DARK_instance;
  var SystemTheme_LIGHT_instance;
  var SystemTheme_UNKNOWN_instance;
  var SystemTheme_entriesInitialized;
  function SystemTheme_initEntries() {
    if (SystemTheme_entriesInitialized)
      return Unit_instance;
    SystemTheme_entriesInitialized = true;
    SystemTheme_DARK_instance = new SystemTheme('DARK', 0);
    SystemTheme_LIGHT_instance = new SystemTheme('LIGHT', 1);
    SystemTheme_UNKNOWN_instance = new SystemTheme('UNKNOWN', 2);
  }
  function SystemTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SystemTheme_UNKNOWN_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_UNKNOWN_instance;
  }
  function get_registry() {
    _init_properties_Managed_js_kt__4ok5rc();
    return registry;
  }
  var registry;
  function unregister(managed) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().register(managed, thunk);
  }
  function registry$lambda(it) {
    _init_properties_Managed_js_kt__4ok5rc();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.e3x();
    return Unit_instance;
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function _init_properties_Managed_js_kt__4ok5rc() {
    if (!properties_initialized_Managed_js_kt_llxy4m) {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(array.length);
      $this.j3g_1.e(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 2));
      $this.j3g_1.e(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.j3g_1.e(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.j3g_1.e(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 8));
      $this.j3g_1.e(data);
      if (copyArrayToWasm) {
        toWasm_3(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_4($this, array, copyArrayToWasm) {
    var tmp;
    if (!(array == null) && array.k() > 0) {
      var data = _malloc(imul(array.k(), 4));
      $this.j3g_1.e(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array.s3m_1);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j3g_1 = ArrayList_init_$Create$_0();
    this.k3g_1 = false;
  }
  protoOf(InteropScope).l3g = function (string) {
    var tmp;
    if (!(string == null)) {
      tmp = this.n3j(convertToZeroTerminatedString(string));
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).n3j = function (array) {
    return toInterop(this, array, true);
  };
  protoOf(InteropScope).u3m = function (array) {
    return toInterop(this, array, false);
  };
  protoOf(InteropScope).a3h = function (array) {
    return toInterop_0(this, array, true);
  };
  protoOf(InteropScope).i3h = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  protoOf(InteropScope).h3h = function (array) {
    return toInterop_1(this, array, true);
  };
  protoOf(InteropScope).l3m = function (array) {
    return toInterop_1(this, array, false);
  };
  protoOf(InteropScope).n3l = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  protoOf(InteropScope).d3i = function (array) {
    return toInterop_2(this, array, true);
  };
  protoOf(InteropScope).m3l = function (array) {
    return toInterop_2(this, array, false);
  };
  protoOf(InteropScope).v3s = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  protoOf(InteropScope).u3s = function (array) {
    return toInterop_3(this, array, false);
  };
  protoOf(InteropScope).v3m = function (_this__u8e3s4, result) {
    fromWasm_2(_this__u8e3s4, result);
  };
  protoOf(InteropScope).q3m = function (array) {
    return toInterop_4(this, array, false);
  };
  protoOf(InteropScope).r3m = function (_this__u8e3s4, result) {
    return fromWasm(_this__u8e3s4, result.s3m_1);
  };
  protoOf(InteropScope).n3s = function (stringArray) {
    var tmp;
    var tmp_0;
    if (!(stringArray == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(stringArray.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(stringArray.length);
      var inductionVariable = 0;
      var last = stringArray.length;
      while (inductionVariable < last) {
        var item = stringArray[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.skia.impl.InteropScope.toInterop.<anonymous>' call
        var tmp$ret$2 = this.l3g(item);
        destination.e(tmp$ret$2);
      }
      var ptrs = toIntArray(destination);
      tmp = this.h3h(ptrs);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).o1k = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.j3g_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'org.jetbrains.skia.impl.InteropScope.release.<anonymous>' call
      _free(element);
    }
    this.j3g_1.c2();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.k3g_1) {
      _releaseLocalCallbackScope$accessor$wmqves();
      this.k3g_1 = false;
    }
  };
  function toWasm(dest, src) {
    return HEAPU8.set(src, dest);
  }
  function toWasm_0(dest, src) {
    return HEAPU16.set(src, dest / 2 | 0);
  }
  function fromWasm(src, result) {
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_1(dest, src) {
    return HEAPU32.set(src, dest / 4 | 0);
  }
  function fromWasm_0(src, result) {
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_2(dest, src) {
    return HEAPF32.set(src, dest / 4 | 0);
  }
  function fromWasm_1(src, result) {
    var startIndex = src / 8 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF64.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_3(dest, src) {
    return HEAPF64.set(src, dest / 8 | 0);
  }
  function fromWasm_2(src, result) {
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU8.subarray(src, src + result.length | 0));
  }
  function _createLocalCallbackScope$accessor$wmqves() {
    return _createLocalCallbackScope();
  }
  function _releaseLocalCallbackScope$accessor$wmqves() {
    return _releaseLocalCallbackScope();
  }
  function getNavigatorInfo() {
    var tmp = navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform;
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function makeGLContextCurrent(contextPointer) {
    GL.makeContextCurrent(contextPointer);
  }
  function createWebGLContext(canvas, attr) {
    attr = attr === VOID ? null : attr;
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    if (_this__u8e3s4.alpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.alpha = _this__u8e3s4.alpha;
    }
    if (_this__u8e3s4.depth == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.depth = _this__u8e3s4.depth;
    }
    if (_this__u8e3s4.stencil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.stencil = _this__u8e3s4.stencil;
    }
    if (_this__u8e3s4.antialias == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.antialias = _this__u8e3s4.antialias;
    }
    if (_this__u8e3s4.premultipliedAlpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    if (_this__u8e3s4.preserveDrawingBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    if (_this__u8e3s4.preferLowPowerToHighPerformance == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    if (_this__u8e3s4.failIfMajorPerformanceCaveat == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    if (_this__u8e3s4.enableExtensionsByDefault == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    if (_this__u8e3s4.explicitSwapControl == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    if (_this__u8e3s4.renderViaOffscreenBackBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    if (_this__u8e3s4.majorVersion == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp1_elvis_lhs = $attr == null ? null : $attr.alpha;
    tmp.f3x_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs_0 = $attr == null ? null : $attr.depth;
    tmp_0.g3x_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp1_elvis_lhs_1 = $attr == null ? null : $attr.stencil;
    tmp_1.h3x_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp1_elvis_lhs_2 = $attr == null ? null : $attr.antialias;
    tmp_2.i3x_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp1_elvis_lhs_3 = $attr == null ? null : $attr.premultipliedAlpha;
    tmp_3.j3x_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp1_elvis_lhs_4 = $attr == null ? null : $attr.preserveDrawingBuffer;
    tmp_4.k3x_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp1_elvis_lhs_5 = $attr == null ? null : $attr.preferLowPowerToHighPerformance;
    tmp_5.l3x_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp1_elvis_lhs_6 = $attr == null ? null : $attr.failIfMajorPerformanceCaveat;
    tmp_6.m3x_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp1_elvis_lhs_7 = $attr == null ? null : $attr.enableExtensionsByDefault;
    tmp_7.n3x_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp1_elvis_lhs_8 = $attr == null ? null : $attr.explicitSwapControl;
    tmp_8.o3x_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp1_elvis_lhs_9 = $attr == null ? null : $attr.renderViaOffscreenBackBuffer;
    tmp_9.p3x_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp1_elvis_lhs_10 = $attr == null ? null : $attr.majorVersion;
    tmp_10.q3x_1 = tmp1_elvis_lhs_10 == null ? 2 : tmp1_elvis_lhs_10;
  }
  protoOf(createWebGLContext$contextAttributes$1).r3x = function () {
    return this.f3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).s3x = function () {
    return this.g3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).t3x = function () {
    return this.h3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).u3x = function () {
    return this.i3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).v3x = function () {
    return this.j3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).w3x = function () {
    return this.k3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).x3x = function () {
    return this.l3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).y3x = function () {
    return this.m3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).z3x = function () {
    return this.n3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).a3y = function () {
    return this.o3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).b3y = function () {
    return this.p3x_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).c3y = function () {
    return this.q3x_1;
  };
  var LANG$delegate;
  function Pattern(regex) {
    this.d3y_1 = Regex_init_$Create$(regex);
  }
  function compilePattern(regex) {
    _init_properties_Actuals_js_kt__v403ki();
    return new Pattern(regex);
  }
  function commonSynchronized(lock, block) {
    _init_properties_Actuals_js_kt__v403ki();
    block();
  }
  function LANG$delegate$lambda() {
    _init_properties_Actuals_js_kt__v403ki();
    var lang = window.navigator.language;
    var tmp;
    var tmp_0;
    if (lang == null) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_0 = charSequenceLength(lang) === 0;
    }
    if (tmp_0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_js_kt_fw1oy4;
  function _init_properties_Actuals_js_kt__v403ki() {
    if (!properties_initialized_Actuals_js_kt_fw1oy4) {
      properties_initialized_Actuals_js_kt_fw1oy4 = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_46() {
  }
  protoOf(Companion_46).l3f = function () {
  };
  var Companion_instance_46;
  function Companion_getInstance_46() {
    return Companion_instance_46;
  }
  function FinalizationThunk(finalizer, obj) {
    this.c3x_1 = finalizer;
    this.d3x_1 = obj;
  }
  protoOf(FinalizationThunk).e3x = function () {
    if (!(this.d3x_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.c3x_1, this.d3x_1);
    }
    this.d3x_1 = 0;
  };
  function Managed(ptr, finalizer, managed) {
    managed = managed === VOID ? true : managed;
    Native.call(this, ptr);
    this.h3f_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(ptr === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message = 'Managed ptr is 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(finalizer === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message_0 = 'Managed finalizer is 0';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.h3f_1 = thunk;
    }
  }
  protoOf(Managed).u1s = function () {
    if (Companion_instance_48.n3f() === this.i3f_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).ka() + ', _ptr=' + this.i3f_1);
    else if (null == this.h3f_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).ka() + ', _ptr=' + this.i3f_1);
    else {
      unregister(this);
      ensureNotNull(this.h3f_1).e3x();
      this.h3f_1 = null;
      this.i3f_1 = 0;
    }
  };
  function get_INTEROP_SCOPE() {
    _init_properties_Native_js_kt__80argu();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    _init_properties_Native_js_kt__80argu();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function Companion_47() {
  }
  var Companion_instance_47;
  function Companion_getInstance_47() {
    return Companion_instance_47;
  }
  function NativePointerArray(size) {
    this.s3m_1 = new Int32Array(size);
  }
  protoOf(NativePointerArray).p = function (index) {
    return this.s3m_1[index];
  };
  protoOf(NativePointerArray).k = function () {
    return this.s3m_1.length;
  };
  function Companion_48() {
  }
  protoOf(Companion_48).n3f = function () {
    return 0;
  };
  var Companion_instance_48;
  function Companion_getInstance_48() {
    return Companion_instance_48;
  }
  function Native(ptr) {
    if (ptr === Companion_instance_48.n3f())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.i3f_1 = ptr;
  }
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.i3f_1 === other.i3f_1 ? true : this.j3f(other);
  };
  protoOf(Native).hashCode = function () {
    return this.i3f_1;
  };
  protoOf(Native).j3f = function (other) {
    return false;
  };
  protoOf(Native).toString = function () {
    return plus(getKClassFromExpression(this).ka(), '(_ptr=0x') + toString_1(this.i3f_1, 16) + ')';
  };
  function reachabilityBarrier(obj) {
    _init_properties_Native_js_kt__80argu();
  }
  function _set_interopScopeCounter_$accessor$14q3g08_7yblxt(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    return set_interopScopeCounter(_set____db54di);
  }
  function _get_interopScopeCounter_$accessor$14q3g08_y31ph7() {
    _init_properties_Native_js_kt__80argu();
    return get_interopScopeCounter();
  }
  function _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi() {
    _init_properties_Native_js_kt__80argu();
    return get_INTEROP_SCOPE();
  }
  var properties_initialized_Native_js_kt_fdhhkg;
  function _init_properties_Native_js_kt__80argu() {
    if (!properties_initialized_Native_js_kt_fdhhkg) {
      properties_initialized_Native_js_kt_fdhhkg = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_17().e3y_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_17().e3y_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  protoOf(RefCnt).z3i = function () {
    Stats_instance.f3f();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.i3f_1);
  };
  protoOf(RefCnt).toString = function () {
    var s = protoOf(Managed).toString.call(this);
    // Inline function 'kotlin.text.substring' call
    var endIndex = s.length - 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return s.substring(0, endIndex) + ', refCount=' + this.z3i() + ')';
  };
  function RefCnt() {
  }
  function _FinalizerHolder_17() {
    _FinalizerHolder_instance_17 = this;
    this.e3y_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  var _FinalizerHolder_instance_17;
  function _FinalizerHolder_getInstance_17() {
    if (_FinalizerHolder_instance_17 == null)
      new _FinalizerHolder_17();
    return _FinalizerHolder_instance_17;
  }
  function Stats() {
  }
  protoOf(Stats).f3f = function () {
  };
  var Stats_instance;
  function Stats_getInstance() {
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function loadOpenGLLibrary() {
  }
  function ClipboardManager_setText(text) {
    window.navigator.clipboard.writeText(text);
  }
  function ClipboardManager_getText() {
    return null;
  }
  function ClipboardManager_hasText() {
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = ClipboardManager_getText();
    // Inline function 'kotlin.contracts.contract' call
    return !(this_0 == null || charSequenceLength(this_0) === 0);
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.j3y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u1s();
    }
    $this.j3y_1 = null;
    var tmp1_safe_receiver = $this.k3y_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.u1s();
    }
    $this.k3y_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.m3y_1 = false;
      makeGLContextCurrent(this$0.f3y_1);
      var tmp0_safe_receiver = this$0.l3y_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.g32(-1);
      var tmp1_safe_receiver = this$0.l3y_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.k3i();
      this$0.n3y(timestamp);
      var tmp2_safe_receiver = this$0.j3y_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.t3q();
      }
      this$0.i3y_1.w3j();
      return Unit_instance;
    };
  }
  function CanvasRenderer(contextPointer, width, height) {
    this.f3y_1 = contextPointer;
    this.g3y_1 = width;
    this.h3y_1 = height;
    this.j3y_1 = null;
    this.k3y_1 = null;
    this.l3y_1 = null;
    makeGLContextCurrent(this.f3y_1);
    this.i3y_1 = Companion_getInstance_8().t3j();
    this.o3y();
    this.m3y_1 = false;
  }
  protoOf(CanvasRenderer).o3y = function () {
    disposeCanvas(this);
    this.k3y_1 = Companion_getInstance().m3f(this.g3y_1, this.h3y_1, 1, 8, 0, 32856);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance_32().m3q(this.i3y_1, ensureNotNull(this.k3y_1), SurfaceOrigin_BOTTOM_LEFT_getInstance(), SurfaceColorFormat_RGBA_8888_getInstance(), Companion_getInstance_5().f3j_1, new SurfaceProps());
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new RenderException('Cannot create surface');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.j3y_1 = tmp_0;
    this.l3y_1 = ensureNotNull(this.j3y_1).s3q();
  };
  protoOf(CanvasRenderer).p3y = function () {
    if (this.m3y_1) {
      return Unit_instance;
    }
    this.m3y_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  function get_hostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostOs;
  }
  var hostOs;
  function get_hostArch() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostArch;
  }
  var hostArch;
  var hostId$delegate;
  function detectHostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    // Inline function 'kotlin.takeIf' call
    var this_0 = getNavigatorInfo();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.jetbrains.skiko.detectHostOs.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var platformInfo = tmp0_elvis_lhs == null ? window.navigator.userAgent : tmp0_elvis_lhs;
    return contains(platformInfo, 'Android', true) ? OS_Android_getInstance() : contains(platformInfo, 'iPhone', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iOS', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iPad', true) ? OS_Ios_getInstance() : contains(platformInfo, 'Linux', true) ? OS_Linux_getInstance() : contains(platformInfo, 'Mac', true) ? OS_MacOS_getInstance() : contains(platformInfo, 'Win', true) ? OS_Windows_getInstance() : OS_Unknown_getInstance();
  }
  function hostId$delegate$lambda() {
    _init_properties_OsArch_js_kt__jkqwph();
    return get_hostOs().u3w_1 + '-' + get_hostArch().y3w_1;
  }
  var properties_initialized_OsArch_js_kt_ik094d;
  function _init_properties_OsArch_js_kt__jkqwph() {
    if (!properties_initialized_OsArch_js_kt_ik094d) {
      properties_initialized_OsArch_js_kt_ik094d = true;
      hostOs = detectHostOs();
      hostArch = Arch_Unknown_getInstance();
      hostId$delegate = lazy(hostId$delegate$lambda);
    }
  }
  function attachTo($this, htmlCanvas) {
    $this.t3y_1 = htmlCanvas;
    var tmp = $this;
    tmp.q3y_1 = new SkiaLayer$attachTo$1(htmlCanvas, $this);
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.c3z_1 = this$0;
    CanvasRenderer.call(this, createWebGLContext($htmlCanvas), $htmlCanvas.width, $htmlCanvas.height);
  }
  protoOf(SkiaLayer$attachTo$1).n3y = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.c3z_1.s3y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d3z(ensureNotNull(this.l3y_1), this.g3y_1, this.h3y_1, numberToLong(currentNanos));
    }
  };
  function SkiaLayer() {
    this.q3y_1 = null;
    this.r3y_1 = GraphicsApi_WEBGL_getInstance();
    this.s3y_1 = null;
    this.t3y_1 = null;
  }
  protoOf(SkiaLayer).p3y = function () {
    var tmp0_safe_receiver = this.q3y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p3y();
    }
  };
  protoOf(SkiaLayer).e3z = function (container) {
    attachTo(this, container instanceof HTMLCanvasElement ? container : THROW_CCE());
  };
  function get_currentSystemTheme() {
    return SystemTheme_UNKNOWN_getInstance();
  }
  function convertToZeroTerminatedString(string) {
    var utf8 = encodeToByteArray(string);
    return copyOf(utf8, utf8.length + 1 | 0);
  }
  //region block: post-declaration
  protoOf(Bitmap).g3c = get_width;
  protoOf(Bitmap).h3c = get_height;
  protoOf(Bitmap).g3g = get_colorType;
  protoOf(Bitmap).h3g = get_colorSpace;
  protoOf(Bitmap).i3g = get_isOpaque;
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'alpha', function () {
    return this.r3x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'depth', function () {
    return this.s3x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'stencil', function () {
    return this.t3x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'antialias', function () {
    return this.u3x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'premultipliedAlpha', function () {
    return this.v3x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preserveDrawingBuffer', function () {
    return this.w3x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preferLowPowerToHighPerformance', function () {
    return this.x3x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'failIfMajorPerformanceCaveat', function () {
    return this.y3x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'enableExtensionsByDefault', function () {
    return this.z3x();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'explicitSwapControl', function () {
    return this.a3y();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'renderViaOffscreenBackBuffer', function () {
    return this.b3y();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'majorVersion', function () {
    return this.c3y();
  });
  //endregion
  //region block: init
  Companion_instance_11 = new Companion_11();
  Companion_instance_14 = new Companion_14();
  Companion_instance_16 = new Companion_16();
  Companion_instance_29 = new Companion_29();
  Companion_instance_30 = new Companion_30();
  Companion_instance_37 = new Companion_37();
  Companion_instance_41 = new Companion_41();
  Companion_instance_42 = new Companion_42();
  Companion_instance_46 = new Companion_46();
  Companion_instance_47 = new Companion_47();
  Companion_instance_48 = new Companion_48();
  Stats_instance = new Stats();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Alignment_CENTER_getInstance;
  _.$_$.b = Alignment_END_getInstance;
  _.$_$.c = Alignment_JUSTIFY_getInstance;
  _.$_$.d = Alignment_LEFT_getInstance;
  _.$_$.e = Alignment_RIGHT_getInstance;
  _.$_$.f = Alignment_START_getInstance;
  _.$_$.g = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.h = DecorationLineStyle_DASHED_getInstance;
  _.$_$.i = DecorationLineStyle_DOTTED_getInstance;
  _.$_$.j = DecorationLineStyle_DOUBLE_getInstance;
  _.$_$.k = DecorationLineStyle_SOLID_getInstance;
  _.$_$.l = DecorationLineStyle_WAVY_getInstance;
  _.$_$.m = Direction_LTR_getInstance;
  _.$_$.n = Direction_RTL_getInstance;
  _.$_$.o = HeightMode_ALL_getInstance;
  _.$_$.p = HeightMode_DISABLE_ALL_getInstance;
  _.$_$.q = HeightMode_DISABLE_FIRST_ASCENT_getInstance;
  _.$_$.r = HeightMode_DISABLE_LAST_DESCENT_getInstance;
  _.$_$.s = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.t = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.u = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.v = PlaceholderAlignment_TOP_getInstance;
  _.$_$.w = RectHeightMode_MAX_getInstance;
  _.$_$.x = RectHeightMode_STRUT_getInstance;
  _.$_$.y = RectWidthMode_TIGHT_getInstance;
  _.$_$.z = BlendMode_CLEAR_getInstance;
  _.$_$.a1 = BlendMode_COLOR_BURN_getInstance;
  _.$_$.b1 = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.c1 = BlendMode_COLOR_getInstance;
  _.$_$.d1 = BlendMode_DARKEN_getInstance;
  _.$_$.e1 = BlendMode_DIFFERENCE_getInstance;
  _.$_$.f1 = BlendMode_DST_ATOP_getInstance;
  _.$_$.g1 = BlendMode_DST_IN_getInstance;
  _.$_$.h1 = BlendMode_DST_OUT_getInstance;
  _.$_$.i1 = BlendMode_DST_OVER_getInstance;
  _.$_$.j1 = BlendMode_DST_getInstance;
  _.$_$.k1 = BlendMode_EXCLUSION_getInstance;
  _.$_$.l1 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.m1 = BlendMode_HUE_getInstance;
  _.$_$.n1 = BlendMode_LIGHTEN_getInstance;
  _.$_$.o1 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.p1 = BlendMode_MODULATE_getInstance;
  _.$_$.q1 = BlendMode_MULTIPLY_getInstance;
  _.$_$.r1 = BlendMode_OVERLAY_getInstance;
  _.$_$.s1 = BlendMode_PLUS_getInstance;
  _.$_$.t1 = BlendMode_SATURATION_getInstance;
  _.$_$.u1 = BlendMode_SCREEN_getInstance;
  _.$_$.v1 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.w1 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.x1 = BlendMode_SRC_IN_getInstance;
  _.$_$.y1 = BlendMode_SRC_OUT_getInstance;
  _.$_$.z1 = BlendMode_SRC_OVER_getInstance;
  _.$_$.a2 = BlendMode_SRC_getInstance;
  _.$_$.b2 = BlendMode_XOR_getInstance;
  _.$_$.c2 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.d2 = ClipMode_INTERSECT_getInstance;
  _.$_$.e2 = ColorAlphaType_OPAQUE_getInstance;
  _.$_$.f2 = ColorAlphaType_PREMUL_getInstance;
  _.$_$.g2 = ColorType_ALPHA_8_getInstance;
  _.$_$.h2 = ColorType_RGBA_F16_getInstance;
  _.$_$.i2 = ColorType_RGB_565_getInstance;
  _.$_$.j2 = FilterMode_LINEAR_getInstance;
  _.$_$.k2 = FilterMode_NEAREST_getInstance;
  _.$_$.l2 = FilterTileMode_CLAMP_getInstance;
  _.$_$.m2 = FilterTileMode_DECAL_getInstance;
  _.$_$.n2 = FilterTileMode_MIRROR_getInstance;
  _.$_$.o2 = FilterTileMode_REPEAT_getInstance;
  _.$_$.p2 = FontEdging_ALIAS_getInstance;
  _.$_$.q2 = FontEdging_ANTI_ALIAS_getInstance;
  _.$_$.r2 = FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance;
  _.$_$.s2 = FontHinting_FULL_getInstance;
  _.$_$.t2 = FontHinting_NONE_getInstance;
  _.$_$.u2 = FontHinting_NORMAL_getInstance;
  _.$_$.v2 = FontHinting_SLIGHT_getInstance;
  _.$_$.w2 = FontSlant_ITALIC_getInstance;
  _.$_$.x2 = FontSlant_UPRIGHT_getInstance;
  _.$_$.y2 = MipmapMode_NEAREST_getInstance;
  _.$_$.z2 = MipmapMode_NONE_getInstance;
  _.$_$.a3 = PaintMode_FILL_getInstance;
  _.$_$.b3 = PaintMode_STROKE_getInstance;
  _.$_$.c3 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.d3 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.e3 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.f3 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.g3 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.h3 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.i3 = PathDirection_CLOCKWISE_getInstance;
  _.$_$.j3 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.k3 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.l3 = PathFillMode_WINDING_getInstance;
  _.$_$.m3 = PathOp_DIFFERENCE_getInstance;
  _.$_$.n3 = PathOp_INTERSECT_getInstance;
  _.$_$.o3 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.p3 = PathOp_UNION_getInstance;
  _.$_$.q3 = PathOp_XOR_getInstance;
  _.$_$.r3 = FontCollection_init_$Create$;
  _.$_$.s3 = TextStyle_init_$Create$;
  _.$_$.t3 = TypefaceFontProviderWithFallback_init_$Create$;
  _.$_$.u3 = Bitmap_init_$Create$;
  _.$_$.v3 = Canvas_init_$Create$;
  _.$_$.w3 = Font_init_$Create$_0;
  _.$_$.x3 = FontStyle_init_$Create$;
  _.$_$.y3 = Paint_init_$Create$;
  _.$_$.z3 = Path_init_$Create$;
  _.$_$.a4 = PathMeasure_init_$Create$;
  _.$_$.b4 = PictureRecorder_init_$Create$;
  _.$_$.c4 = RTreeFactory_init_$Create$;
  _.$_$.d4 = CharDirection_getInstance;
  _.$_$.e4 = Companion_getInstance_1;
  _.$_$.f4 = Companion_getInstance_3;
  _.$_$.g4 = Companion_getInstance_5;
  _.$_$.h4 = Companion_getInstance_6;
  _.$_$.i4 = Companion_getInstance_7;
  _.$_$.j4 = Companion_getInstance_10;
  _.$_$.k4 = Companion_getInstance_12;
  _.$_$.l4 = Companion_getInstance_13;
  _.$_$.m4 = Companion_getInstance_17;
  _.$_$.n4 = Companion_getInstance_20;
  _.$_$.o4 = Companion_getInstance_23;
  _.$_$.p4 = Companion_instance_29;
  _.$_$.q4 = Companion_instance_30;
  _.$_$.r4 = Companion_getInstance_31;
  _.$_$.s4 = ShadowUtils_getInstance;
  _.$_$.t4 = DecorationStyle;
  _.$_$.u4 = FontRastrSettings;
  _.$_$.v4 = LineMetrics;
  _.$_$.w4 = ParagraphBuilder;
  _.$_$.x4 = ParagraphStyle;
  _.$_$.y4 = PlaceholderStyle;
  _.$_$.z4 = Shadow;
  _.$_$.a5 = TextBox;
  _.$_$.b5 = TextIndent;
  _.$_$.c5 = ColorInfo;
  _.$_$.d5 = CubicResampler;
  _.$_$.e5 = FilterMipmap;
  _.$_$.f5 = FontMgrWithFallback;
  _.$_$.g5 = GradientStyle;
  _.$_$.h5 = ImageInfo;
  _.$_$.i5 = Matrix33;
  _.$_$.j5 = Matrix44;
  _.$_$.k5 = Point3;
  _.$_$.l5 = Rect;
  _.$_$.m5 = ClipboardManager;
  _.$_$.n5 = SkiaLayer;
  _.$_$.o5 = URIManager;
  _.$_$.p5 = currentNanoTime;
  _.$_$.q5 = get_currentSystemTheme;
  _.$_$.r5 = get_hostOs;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map

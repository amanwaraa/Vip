         <!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>متجر نورهان - Norhan Store</title>

  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');

    body{
      font-family:'Cairo',sans-serif;
      background:#f8f9fa;
      user-select:none;
      -webkit-tap-highlight-color:transparent
    }

    .view-section{display:none;min-height:100vh}
    .view-section.active{display:block}

    .loader{
      border:4px solid #f3f3f3;
      border-top:4px solid #ef4444;
      border-radius:50%;
      width:46px;height:46px;
      animation:spin .8s linear infinite
    }
    @keyframes spin{
      0%{transform:rotate(0)}
      100%{transform:rotate(360deg)}
    }

    .product-card{
      transition:all .2s ease;
      cursor:pointer;
      border:2px solid transparent;
      position:relative;
      border-radius:2rem!important
    }
    .product-card.selected{
      border-color:#ef4444;
      background:#fffafa
    }
    .product-card:active{transform:scale(.96)}

    .discount-badge{
      position:absolute;
      top:10px;
      right:10px;
      background:#ef4444;
      color:#fff;
      font-size:10px;
      font-weight:800;
      padding:5px 10px;
      border-radius:1rem;
      z-index:10;
      display:flex;
      align-items:center;
      gap:4px
    }

    .cart-item-card{
      border:2px solid transparent;
      transition:all .2s ease;
      border-radius:2rem!important
    }
    .cart-item-card.selected{
      border-color:#ef4444;
      background:#fef2f2
    }

    .info-card{
      border:1px solid #eee;
      border-radius:2rem!important;
      background:#fff;
      overflow:hidden
    }

    .no-scrollbar::-webkit-scrollbar{display:none}

    .toast-notification{animation:slideUp .3s ease-out forwards}
    @keyframes slideUp{
      from{transform:translate(-50%,100%);opacity:0}
      to{transform:translate(-50%,0);opacity:1}
    }

    .payment-option{
      border:2px solid #f3f4f6;
      transition:all .2s;
      border-radius:1.5rem!important
    }
    .payment-option.selected{
      border-color:#ef4444;
      background:#fef2f2
    }

    .modal-overlay{
      background:rgba(0,0,0,.5);
      backdrop-filter:blur(4px)
    }

    .product-img{
      width:100%;
      aspect-ratio:1/1;
      height:auto!important;
      border-radius:1.75rem!important;
      object-fit:cover;
      border:none!important;
      box-shadow:none!important;
      background:#fff;
      overflow:hidden
    }

    .product-thumb-rounded{
      border-radius:1.75rem!important;
      overflow:hidden
    }

    .country-icon{
      width:22px;
      height:22px;
      object-fit:cover;
      border-radius:999px;
      box-shadow:0 0 0 1px #e5e7eb inset;
      background:#fff
    }

    .country-select-modern{position:relative}
    .country-select-menu{
      position:absolute;
      top:calc(100% + 8px);
      right:0;
      left:0;
      background:#fff;
      border:1px solid #e5e7eb;
      border-radius:1.5rem;
      box-shadow:0 20px 40px rgba(0,0,0,.08);
      padding:10px;
      z-index:80;
      max-height:320px;
      overflow:auto
    }
    .country-option-modern{
      display:flex;
      align-items:center;
      gap:10px;
      width:100%;
      padding:10px 12px;
      border-radius:1rem;
      font-weight:800;
      font-size:13px;
      transition:.2s
    }
    .country-option-modern:hover{background:#f9fafb}
    .country-option-modern.active{
      background:#fef2f2;
      color:#dc2626
    }

    .admin-section{animation:fadeIn .18s ease}
    @keyframes fadeIn{
      from{opacity:0;transform:translateY(4px)}
      to{opacity:1;transform:translateY(0)}
    }

    .builder-card{
      border:1px solid #e5e7eb;
      background:#fff;
      border-radius:1.5rem;
      padding:14px
    }
    .builder-card.dragging{opacity:.45}
    .drag-handle{cursor:grab}
    .block-label{
      background:#f3f4f6;
      color:#111827;
      font-size:11px;
      font-weight:800;
      padding:6px 10px;
      border-radius:999px
    }

    .json-preview *{max-width:100%}
    .json-preview img{max-width:100%;height:auto;border-radius:1rem}

    .check-grid{
      display:grid;
      grid-template-columns:repeat(auto-fill,minmax(130px,1fr));
      gap:8px
    }

    .small-scroll{
      max-height:220px;
      overflow:auto
    }
    .small-scroll::-webkit-scrollbar{width:6px}
    .small-scroll::-webkit-scrollbar-thumb{background:#ddd;border-radius:20px}

    .product-availability-badge{
      display:flex;
      align-items:center;
      gap:8px;
      background:#eff6ff;
      color:#1d4ed8;
      border:1px solid #bfdbfe;
      padding:10px 12px;
      border-radius:1rem;
      font-size:12px;
      font-weight:800;
      margin-bottom:12px
    }

    .ad-card{
      background:#fff;
      border:1px solid #eee;
      border-radius:2rem;
      overflow:hidden;
      position:relative;
      box-shadow:0 1px 3px rgba(0,0,0,.05)
    }
    .ad-card.ad-no-border{
      border:none!important;
      box-shadow:none!important;
      background:transparent!important;
    }
    .ad-card.ad-no-border .ad-render-wrap,
    .ad-card.ad-no-border .ad-slider-shell,
    .ad-card.ad-no-border .ad-products-shell,
    .ad-card.ad-no-border .ad-image-shell{
      background:transparent!important;
      border:none!important;
      box-shadow:none!important;
    }
    .ad-badge{
      position:absolute;
      top:10px;
      left:10px;
      z-index:6;
      background:#111827;
      color:#fff;
      font-size:10px;
      font-weight:800;
      padding:5px 10px;
      border-radius:999px;
      display:flex;
      align-items:center;
      gap:5px
    }
    .ad-slot-1{grid-column:span 1 / span 1}
    .ad-slot-2{grid-column:span 2 / span 2}
    .ad-slot-free{
      grid-column:1 / -1;
      background:transparent!important;
      border:none!important;
      border-radius:0!important;
      box-shadow:none!important;
      overflow:visible!important;
      padding:0!important
    }
    .ad-slot-free .ad-render-wrap{
      min-height:auto!important;
      background:transparent!important
    }
    .ad-slot-free iframe{
      min-height:auto!important;
      height:auto!important
    }

    .ad-render-wrap{
      width:100%;
      min-height:170px;
      background:#fff;
      position:relative;
      overflow:visible!important;
    }
    .ad-render-wrap iframe{
      width:100%;
      border:none;
      display:block;
      min-height:170px;
      background:#fff
    }
    .ad-click-cover{
      position:absolute;
      inset:0;
      z-index:5;
      cursor:pointer;
      background:transparent
    }

    .store-brand-image{
      max-height:32px;
      object-fit:contain;
      display:block
    }

    .store-title-image{
      max-height:32px;
      object-fit:contain;
      display:block
    }

    .middle-render-frame{
      width:100%;
      min-height:180px;
      border:none;
      background:#fff;
      display:block
    }

    .discount-row-card{
      border:1px solid #eee;
      border-radius:1.5rem;
      background:#fff
    }

    .ad-slider-shell,
    .ad-products-shell,
    .ad-image-shell{
      position:relative;
      width:100%;
      background:#fff;
      min-height:170px;
    }
    .ad-slider-track,
    .ad-products-track{
      display:flex;
      overflow-x:auto;
      scroll-snap-type:x mandatory;
      scroll-behavior:smooth;
      gap:12px;
      padding:12px;
    }
    .ad-slider-track::-webkit-scrollbar,
    .ad-products-track::-webkit-scrollbar{display:none}
    .ad-slide{
      min-width:100%;
      scroll-snap-align:start;
      position:relative;
      border-radius:1.5rem;
      overflow:hidden;
      background:#f8fafc;
    }
    .ad-slide img{
      width:100%;
      display:block;
      object-fit:cover;
      max-height:420px;
    }
    .ad-products-track .ad-product-item{
      min-width:180px;
      max-width:180px;
      scroll-snap-align:start;
      flex:0 0 180px;
    }
    .ad-nav-btn{
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      width:36px;
      height:36px;
      border-radius:999px;
      background:rgba(17,24,39,.82);
      color:#fff;
      z-index:7;
      display:flex;
      align-items:center;
      justify-content:center;
      border:none;
      cursor:pointer;
    }
    .ad-nav-btn.prev{right:10px}
    .ad-nav-btn.next{left:10px}
    .ad-dots{
      display:flex;
      justify-content:center;
      gap:6px;
      padding:0 12px 12px;
    }
    .ad-dot{
      width:8px;
      height:8px;
      border-radius:999px;
      background:#d1d5db;
      transition:.2s;
    }
    .ad-dot.active{
      width:20px;
      background:#111827;
    }
    .ad-image-only{
      width:100%;
      display:block;
      object-fit:cover;
      max-height:420px;
    }

    @media (max-width:640px){
      .ad-slot-2,.ad-slot-free{grid-column:span 2 / span 2}
      .ad-products-track .ad-product-item{
        min-width:160px;
        max-width:160px;
        flex-basis:160px;
      }
    }

    input,button,select,.rounded-xl,.rounded-2xl,.rounded-3xl{
      border-radius:2rem!important
    }
    textarea{border-radius:1.5rem!important}
    code{direction:ltr;unicode-bidi:bidi-override}
  </style>

  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>
</head>

<body class="bg-gray-50">

  <div id="loadingOverlay" class="fixed inset-0 bg-white/85 backdrop-blur-sm z-[9999] flex items-center justify-center">
    <div class="flex flex-col items-center">
      <div class="loader mb-3"></div>
      <p class="text-red-500 font-bold">جاري التحميل...</p>
    </div>
  </div>

  <div id="exitModal" class="fixed inset-0 z-[10000] modal-overlay hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-[2rem] p-6 w-full max-w-sm text-center">
      <div class="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
        <i class="fas fa-exclamation-triangle"></i>
      </div>
      <h3 class="font-bold text-lg mb-2">هل تود الخروج؟</h3>
      <p class="text-gray-500 text-sm mb-6">سيتم إلغاء طلبك الحالي في حال الخروج من صفحة الدفع.</p>
      <div class="flex gap-3">
        <button onclick="closeExitModal()" class="flex-1 py-3 bg-gray-100 font-bold">إلغاء</button>
        <button onclick="confirmExit()" class="flex-1 py-3 bg-red-500 text-white font-bold">نعم، اخرج</button>
      </div>
    </div>
  </div>

  <div id="adminLoginModal" class="fixed inset-0 z-[10000] modal-overlay hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-[2rem] p-6 w-full max-w-sm">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-lg">دخول الموظفين فقط</h3>
        <button onclick="closeAdminLogin()" class="w-9 h-9 bg-gray-100 rounded-full"><i class="fas fa-xmark"></i></button>
      </div>

      <div class="bg-gray-50 text-gray-500 px-4 py-3 rounded-[1.5rem] text-sm font-bold mb-4">
        يجب إدخال البريد وكلمة المرور للدخول.
      </div>

      <div class="mb-3">
        <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">البريد</label>
        <input id="adminEmailInput" type="email" placeholder="أدخل البريد"
               class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
      </div>

      <div class="mb-4">
        <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">كلمة المرور</label>
        <input id="adminPinInput" type="password" inputmode="numeric" placeholder="****"
               class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold tracking-widest">
      </div>

      <button onclick="adminLogin()" class="w-full py-3 bg-red-500 text-white font-bold shadow-lg active:scale-95 transition-transform">دخول</button>
    </div>
  </div>

  <div id="adminChangePinModal" class="fixed inset-0 z-[10000] modal-overlay hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-[2rem] p-6 w-full max-w-sm">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-lg">تغيير كلمة المرور</h3>
        <button onclick="closeChangePinModal()" class="w-9 h-9 bg-gray-100 rounded-full"><i class="fas fa-xmark"></i></button>
      </div>
      <div class="bg-red-50 text-red-600 px-4 py-3 rounded-[2rem] text-sm font-bold mb-4">
        <i class="fas fa-shield-halved ml-1"></i> مطلوب تغيير كلمة المرور
      </div>
      <input id="newPin1" type="password" inputmode="numeric" placeholder="كلمة مرور جديدة (4 أرقام أو أكثر)"
             class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3">
      <input id="newPin2" type="password" inputmode="numeric" placeholder="تأكيد كلمة المرور"
             class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-4">
      <button onclick="changeAdminPin()" class="w-full py-3 bg-gray-900 text-white font-bold shadow-lg active:scale-95 transition-transform">
        حفظ كلمة المرور الجديدة
      </button>
    </div>
  </div>

  <div id="productEditorModal" class="fixed inset-0 z-[10000] modal-overlay hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-[2rem] p-6 w-full max-w-6xl max-h-[94vh] overflow-auto">
      <div class="flex items-center justify-between mb-4">
        <h3 id="productEditorTitle" class="font-bold text-lg">إضافة/تعديل منتج</h3>
        <button onclick="closeProductEditor()" class="w-9 h-9 bg-gray-100 rounded-full"><i class="fas fa-xmark"></i></button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="space-y-3">
          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">اسم المنتج</label>
            <input id="pe_name" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
          </div>

          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">القسم</label>
            <select id="pe_categorySelect" onchange="toggleCustomCategoryInput()" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold"></select>
          </div>

          <div id="customCategoryWrap" class="hidden">
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">قسم مخصص</label>
            <input id="pe_categoryCustom" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold" placeholder="مثال: pubg">
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">السعر بالشيكل</label>
              <input id="pe_price" type="number" min="0" step="0.01" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
            </div>
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">السعر القديم بالشيكل</label>
              <input id="pe_oldPrice" type="number" min="0" step="0.01" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
            </div>
          </div>

          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">التسليم</label>
            <input id="pe_delivery" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
          </div>

          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">صورة المنتج من الجهاز</label>
            <input id="pe_imageFile" type="file" accept="image/*" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
          </div>

          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">أو رابط صورة المنتج</label>
            <input id="pe_image" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold" placeholder="https://...">
          </div>

          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">وصف قصير</label>
            <input id="pe_desc" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
          </div>

          <div class="flex items-center gap-3 mt-1">
            <input id="pe_isDynamic" type="checkbox" class="w-5 h-5 accent-red-500">
            <label for="pe_isDynamic" class="text-sm font-bold text-gray-700">منتج ديناميكي (مثل الرصيد)</label>
          </div>

          <div class="flex items-center gap-3 mt-1">
            <input id="pe_enabled" type="checkbox" class="w-5 h-5 accent-red-500" checked>
            <label for="pe_enabled" class="text-sm font-bold text-gray-700">ظاهر في المتجر</label>
          </div>

          <div class="bg-gray-50 rounded-[1.75rem] p-4 border border-gray-100">
            <h4 class="font-bold mb-3">الدول التي يظهر فيها المنتج</h4>
            <div class="flex items-center gap-3 mb-3">
              <input id="pe_visibleAllCountries" type="checkbox" class="w-5 h-5 accent-red-500" checked onchange="toggleVisibleCountriesBox()">
              <label for="pe_visibleAllCountries" class="text-sm font-bold text-gray-700">يظهر في كل الدول</label>
            </div>
            <div id="pe_visibleCountriesBox" class="hidden">
              <div id="pe_visibleCountriesList" class="check-grid small-scroll bg-white border border-gray-200 p-3 rounded-[1.5rem]"></div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-[1.75rem] p-4 border border-gray-100">
            <h4 class="font-bold mb-3">سلوك زر \"اشتري الآن\" لهذا المنتج</h4>
            <div class="grid grid-cols-1 gap-3">
              <div>
                <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">نوع السلوك</label>
                <select id="pe_primaryActionType" onchange="togglePrimaryActionFields()" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
                  <option value="default">الافتراضي - يفتح اختيار طريقة الدفع</option>
                  <option value="toast">عرض توست فقط</option>
                  <option value="link">فتح رابط</option>
                </select>
              </div>

              <div id="primaryToastFields" class="hidden space-y-3">
                <div>
                  <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">نص التوست</label>
                  <input id="pe_primaryToastMessage" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
                </div>
                <div>
                  <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">نوع التوست</label>
                  <select id="pe_primaryToastType" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
                    <option value="success">قبول</option>
                    <option value="error">رفض</option>
                    <option value="info">معلومة</option>
                  </select>
                </div>
              </div>

              <div id="primaryLinkFields" class="hidden">
                <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">الرابط</label>
                <input id="pe_primaryLinkUrl" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold" placeholder="https://...">
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <div class="bg-gray-50 rounded-[1.75rem] p-4 border border-gray-100">
            <div class="flex flex-wrap gap-2 items-center justify-between mb-3">
              <h4 class="font-bold">منشئ القسم العلوي</h4>
              <div class="flex flex-wrap gap-2">
                <button onclick="addBuilderBlock('text')" type="button" class="px-3 py-2 bg-white border font-bold text-xs">+ نص</button>
                <button onclick="addBuilderBlock('field')" type="button" class="px-3 py-2 bg-white border font-bold text-xs">+ حقل</button>
                <button onclick="addBuilderBlock('button')" type="button" class="px-3 py-2 bg-white border font-bold text-xs">+ زر</button>
                <button onclick="addBuilderBlock('toast')" type="button" class="px-3 py-2 bg-white border font-bold text-xs">+ توست</button>
                <button onclick="addBuilderBlock('image')" type="button" class="px-3 py-2 bg-white border font-bold text-xs">+ صورة</button>
              </div>
            </div>
            <div class="bg-white border rounded-[1.5rem] p-3 mb-3 text-[12px] text-gray-500 font-bold">
              هذا الجزء خاص بالقسم العلوي فقط.
            </div>
            <div id="builderList" class="space-y-3"></div>
          </div>

          <div class="bg-gray-50 rounded-[1.75rem] p-4 border border-gray-100">
            <div class="flex items-center justify-between mb-3">
              <h4 class="font-bold">القسم الأوسط داخل معلومات الدفع</h4>
            </div>

            <div class="mb-3">
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">نوع العرض</label>
              <select id="pe_middleMode" onchange="toggleMiddleModeFields()" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none text-sm font-bold">
                <option value="json">JSON مرئي</option>
                <option value="web">HTML / CSS / JS</option>
              </select>
            </div>

            <div id="peMiddleJsonWrap">
              <div class="flex items-center justify-between mb-2">
                <label class="text-xs font-bold text-gray-500 block mr-1">JSON حر</label>
                <button onclick="previewMiddleJson()" type="button" class="px-3 py-2 bg-gray-900 text-white font-bold text-xs">معاينة</button>
              </div>
              <textarea id="pe_middleJson" rows="14" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none text-xs font-bold" style="direction:ltr"></textarea>
            </div>

            <div id="peMiddleWebWrap" class="hidden">
              <div class="flex items-center justify-between mb-2">
                <label class="text-xs font-bold text-gray-500 block mr-1">HTML / CSS / JS</label>
                <button onclick="previewMiddleWeb()" type="button" class="px-3 py-2 bg-gray-900 text-white font-bold text-xs">معاينة</button>
              </div>
              <textarea id="pe_middleWebCode" rows="14" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none text-xs font-bold" style="direction:ltr"></textarea>
            </div>

            <div id="middleJsonPreview" class="json-preview mt-3 bg-white border border-gray-200 rounded-[1.5rem] p-4 min-h-[70px]"></div>
          </div>
        </div>
      </div>

      <div class="flex gap-3 mt-5">
        <button onclick="saveProductFromEditor()" class="flex-1 py-3 bg-red-500 text-white font-bold shadow-lg active:scale-95 transition-transform">حفظ</button>
        <button onclick="closeProductEditor()" class="flex-1 py-3 bg-gray-100 font-bold active:scale-95 transition-transform">إلغاء</button>
      </div>
    </div>
  </div>

  <div id="categoryEditorModal" class="fixed inset-0 z-[10000] modal-overlay hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-[2rem] p-6 w-full max-w-sm">
      <div class="flex items-center justify-between mb-4">
        <h3 id="categoryEditorTitle" class="font-bold text-lg">إضافة/تعديل صنف</h3>
        <button onclick="closeCategoryEditor()" class="w-9 h-9 bg-gray-100 rounded-full"><i class="fas fa-xmark"></i></button>
      </div>

      <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">categoryId (فريد)</label>
      <input id="ce_id" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3" placeholder="مثال: pubg" />

      <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">اسم الصنف</label>
      <input id="ce_name" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3" placeholder="مثال: PUBG UC" />

      <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">الترتيب (رقم)</label>
      <input id="ce_order" type="number" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3" value="0" />

      <div class="flex items-center gap-3 mb-4">
        <input id="ce_enabled" type="checkbox" class="w-5 h-5 accent-red-500" checked>
        <label for="ce_enabled" class="text-sm font-bold text-gray-700">مفعل/ظاهر</label>
      </div>

      <div class="flex gap-3">
        <button onclick="saveCategoryFromEditor()" class="flex-1 py-3 bg-red-500 text-white font-bold">حفظ</button>
        <button onclick="closeCategoryEditor()" class="flex-1 py-3 bg-gray-100 font-bold">إلغاء</button>
      </div>
    </div>
  </div>

  <div id="countryEditorModal" class="fixed inset-0 z-[10000] modal-overlay hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-[2rem] p-6 w-full max-w-md">
      <div class="flex items-center justify-between mb-4">
        <h3 id="countryEditorTitle" class="font-bold text-lg">إضافة/تعديل دولة</h3>
        <button onclick="closeCountryEditor()" class="w-9 h-9 bg-gray-100 rounded-full"><i class="fas fa-xmark"></i></button>
      </div>

      <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">رمز الدولة</label>
      <input id="coe_code" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3" placeholder="مثال: PS">

      <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">اسم الدولة</label>
      <input id="coe_name" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3" placeholder="مثال: فلسطين">

      <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">رابط العلم</label>
      <input id="coe_flagUrl" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3" placeholder="https://...">

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">رمز العملة</label>
          <input id="coe_currencyCode" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3" placeholder="USD">
        </div>
        <div>
          <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">رمز العرض</label>
          <input id="coe_currencySymbol" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3" placeholder="$">
        </div>
      </div>

      <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">قيمة 1 عملة بالنسبة للشيكل</label>
      <input id="coe_rateToIls" type="number" step="0.0001" min="0.0001" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3">

      <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">الترتيب</label>
      <input id="coe_order" type="number" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold mb-3" value="0">

      <div class="flex items-center gap-3 mb-4">
        <input id="coe_enabled" type="checkbox" class="w-5 h-5 accent-red-500" checked>
        <label for="coe_enabled" class="text-sm font-bold text-gray-700">مفعلة/ظاهرة</label>
      </div>

      <div class="flex gap-3">
        <button onclick="saveCountryFromEditor()" class="flex-1 py-3 bg-red-500 text-white font-bold">حفظ</button>
        <button onclick="closeCountryEditor()" class="flex-1 py-3 bg-gray-100 font-bold">إلغاء</button>
      </div>
    </div>
  </div>

  <div id="adEditorModal" class="fixed inset-0 z-[10000] modal-overlay hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-[2rem] p-6 w-full max-w-5xl max-h-[92vh] overflow-auto">
      <div class="flex items-center justify-between mb-4">
        <h3 id="adEditorTitle" class="font-bold text-lg">إضافة/تعديل إعلان</h3>
        <button onclick="closeAdEditor()" class="w-9 h-9 bg-gray-100 rounded-full"><i class="fas fa-xmark"></i></button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="space-y-3">
          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">اسم الإعلان</label>
            <input id="ae_name" class="w-full bg-gray-100 border-none py-3 px-4 outline-none text-sm font-bold">
          </div>

          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">نوع العرض</label>
            <select id="ae_type" onchange="toggleAdFields()" class="w-full bg-gray-100 border-none py-3 px-4 outline-none text-sm font-bold">
              <option value="web">HTML / CSS / JS</option>
              <option value="json">JSON مرئي</option>
              <option value="image">صورة واحدة</option>
              <option value="images_slider">سلايدر صور</option>
              <option value="product">منتج من المتجر</option>
              <option value="products_slider">سلايدر منتجات</option>
            </select>
          </div>

          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">مكان الإعلان</label>
            <select id="ae_span" class="w-full bg-gray-100 border-none py-3 px-4 outline-none text-sm font-bold">
              <option value="1">مكان منتج واحد</option>
              <option value="2">مكان منتجين</option>
              <option value="free">حر</option>
            </select>
          </div>

          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">الترتيب بين المنتجات</label>
            <input id="ae_position" type="number" min="1" value="3" class="w-full bg-gray-100 border-none py-3 px-4 outline-none text-sm font-bold">
          </div>

          <div class="grid grid-cols-2 gap-3">
            <label class="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-[1.5rem] px-4 py-3 cursor-pointer">
              <input id="ae_showBadge" type="checkbox" class="w-5 h-5 accent-red-500" checked>
              <span class="text-sm font-bold">إظهار كلمة ممول</span>
            </label>
            <label class="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-[1.5rem] px-4 py-3 cursor-pointer">
              <input id="ae_showBorder" type="checkbox" class="w-5 h-5 accent-red-500" checked>
              <span class="text-sm font-bold">إظهار الحد</span>
            </label>
          </div>

          <div class="bg-gray-50 border border-gray-100 rounded-[1.5rem] p-4">
            <h4 class="font-bold mb-3">عند الضغط على الإعلان</h4>

            <div class="space-y-3">
              <div>
                <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">التحويل إلى</label>
                <select id="ae_clickActionType" onchange="toggleAdClickActionFields()" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none text-sm font-bold">
                  <option value="none">بدون إجراء</option>
                  <option value="link">رابط</option>
                  <option value="category">قسم معين</option>
                  <option value="product">منتج معين</option>
                </select>
              </div>

              <div id="aeClickLinkWrap" class="hidden">
                <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">الرابط</label>
                <input id="ae_clickLink" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none text-sm font-bold" placeholder="https://...">
              </div>

              <div id="aeClickCategoryWrap" class="hidden">
                <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">القسم</label>
                <select id="ae_clickCategoryId" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none text-sm font-bold"></select>
              </div>

              <div id="aeClickProductWrap" class="hidden">
                <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">المنتج</label>
                <select id="ae_clickProductKey" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none text-sm font-bold"></select>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">دقائق</label>
              <input id="ae_minutes" type="number" min="0" value="0" class="w-full bg-gray-100 border-none py-3 px-4 outline-none text-sm font-bold">
            </div>
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">أيام</label>
              <input id="ae_days" type="number" min="0" value="0" class="w-full bg-gray-100 border-none py-3 px-4 outline-none text-sm font-bold">
            </div>
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">أشهر</label>
              <input id="ae_months" type="number" min="0" value="0" class="w-full bg-gray-100 border-none py-3 px-4 outline-none text-sm font-bold">
            </div>
          </div>

          <div class="flex items-center gap-3">
            <input id="ae_infinite" type="checkbox" class="w-5 h-5 accent-red-500" onchange="toggleAdDurationFields()">
            <label for="ae_infinite" class="text-sm font-bold text-gray-700">لا نهائي</label>
          </div>

          <div class="flex items-center gap-3">
            <input id="ae_enabled" type="checkbox" class="w-5 h-5 accent-red-500" checked>
            <label for="ae_enabled" class="text-sm font-bold text-gray-700">مفعل</label>
          </div>
        </div>

        <div class="space-y-3">
          <div id="adWebWrap">
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">كود HTML / CSS / JS</label>
            <textarea id="ae_code" rows="14" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none text-xs font-bold" style="direction:ltr"></textarea>
          </div>

          <div id="adJsonWrap" class="hidden">
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">JSON مرئي</label>
            <textarea id="ae_json" rows="14" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none text-xs font-bold" style="direction:ltr"></textarea>
          </div>

          <div id="adImageWrap" class="hidden">
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">رابط الصورة</label>
            <input id="ae_image" class="w-full bg-gray-100 border-none py-3 px-4 outline-none text-sm font-bold" placeholder="https://...">
          </div>

          <div id="adImagesSliderWrap" class="hidden">
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">روابط صور السلايدر (كل رابط بسطر)</label>
            <textarea id="ae_images" rows="10" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none text-xs font-bold" style="direction:ltr" placeholder="https://image1.jpg\nhttps://image2.jpg\nhttps://image3.jpg"></textarea>
          </div>

          <div id="adProductWrap" class="hidden">
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">اختر منتجًا</label>
            <select id="ae_productKey" class="w-full bg-gray-100 border-none py-3 px-4 outline-none text-sm font-bold"></select>
          </div>

          <div id="adProductsSliderWrap" class="hidden">
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">اختر المنتجات للسلايدر</label>
            <div id="ae_productsSliderList" class="check-grid small-scroll bg-white border border-gray-200 p-3 rounded-[1.5rem]"></div>
          </div>

          <button onclick="previewAdEditor()" class="px-4 py-3 bg-gray-900 text-white font-bold">معاينة</button>
          <div id="adPreview" class="bg-gray-50 border border-gray-200 rounded-[1.5rem] p-3 min-h-[140px]"></div>
        </div>
      </div>

      <div class="flex gap-3 mt-5">
        <button onclick="saveAdFromEditor()" class="flex-1 py-3 bg-red-500 text-white font-bold">حفظ</button>
        <button onclick="closeAdEditor()" class="flex-1 py-3 bg-gray-100 font-bold">إلغاء</button>
      </div>
    </div>
  </div>

  <section id="storeView" class="view-section active pb-28">
    <header class="bg-white sticky top-0 z-40 border-b">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div id="storeLogoWrap" class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 overflow-hidden">
            <i class="fas fa-store"></i>
          </div>

          <div>
            <div id="storeTitleWrap" class="text-xl font-bold">متجر نورهان</div>
            <div class="text-[11px] text-gray-400 font-bold" id="selectedCountryLabel">الدولة: عالمي</div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <div id="headerCountryIconWrap" class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <i class="fas fa-globe text-gray-700"></i>
          </div>

          <button onclick="openAdmin()" class="relative p-2" title="دخول الموظفين فقط">
            <i class="fas fa-gear text-2xl text-gray-700"></i>
          </button>

          <button onclick="navigateTo('cartView')" class="relative p-2">
            <i class="fas fa-shopping-bag text-2xl text-gray-700"></i>
            <span id="cartCountBadge" class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">0</span>
          </button>
        </div>
      </div>

      <div class="px-4 pb-3">
        <div class="country-select-modern">
          <button onclick="toggleCountryDropdown()" id="countryDropdownBtn"
            class="w-full bg-gray-100 border-none py-3 px-4 flex items-center justify-between font-bold text-sm">
            <div class="flex items-center gap-2" id="countryDropdownSelected">
              <i class="fas fa-globe text-gray-600"></i>
              <span>عالمي</span>
            </div>
            <i class="fas fa-chevron-down text-gray-400 text-xs"></i>
          </button>
          <div id="countryDropdownMenu" class="country-select-menu hidden"></div>
        </div>
      </div>

      <div id="categoriesBar" class="flex overflow-x-auto gap-2 px-4 pb-3 no-scrollbar text-sm font-semibold"></div>

      <div class="px-4 pb-3">
        <div class="relative">
          <input type="text" id="searchInput" oninput="handleSearch()" placeholder="ابحث عن شدات، هاكات، رصيد..."
                 class="w-full bg-gray-100 border-none rounded-full py-3 px-10 outline-none focus:ring-2 focus:ring-red-400 text-sm">
          <i class="fas fa-search absolute right-4 top-4 text-gray-400"></i>
        </div>
      </div>
    </header>

    <div class="p-4 grid grid-cols-2 gap-4" id="productsGrid"></div>
  </section>

  <section id="detailsView" class="view-section p-4 pb-28">
    <div class="flex items-center gap-4 mb-6">
      <button onclick="goBack()" class="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center">
        <i class="fas fa-arrow-right"></i>
      </button>
      <h2 class="font-bold text-lg">معلومات الشحن والدفع</h2>
    </div>
    <div id="detailsContent" class="info-card p-6 shadow-sm"></div>
  </section>

  <section id="visaView" class="view-section p-4 pb-28 bg-gray-50">
    <div class="flex items-center gap-4 mb-6">
      <button onclick="goBack()" class="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center">
        <i class="fas fa-arrow-right"></i>
      </button>
      <h2 class="font-bold text-lg">الدفع</h2>
    </div>

    <div class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100">
      <div class="flex items-start justify-between mb-5">
        <div>
          <p class="text-gray-400 text-xs mb-1">المبلغ المطلوب</p>
          <div id="visaAmount" class="text-3xl font-black text-gray-800">0.00 ₪</div>
          <p class="text-[11px] text-gray-400 mt-1">أدخل البيانات المطلوبة لإتمام الدفع.</p>
        </div>
        <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl">
          <i class="fas fa-credit-card"></i>
        </div>
      </div>

      <div class="space-y-3">
        <div>
          <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">اسم مالك البطاقة</label>
          <input id="cardName" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
        </div>

        <div>
          <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">رقم البطاقة</label>
          <input id="cardNumber" inputmode="numeric" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold tracking-widest"
                 placeholder="أدخل رقم البطاقة" oninput="formatNationalId(this)">
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">تاريخ العملية</label>
            <input id="cardExp" inputmode="numeric" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold"
                   placeholder="MM/YY" oninput="formatExp(this)">
          </div>
          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">رقم cvv</label>
            <input id="cardCvv" inputmode="numeric" class="w-full bg-gray-100 border-none py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold"
                   placeholder="أدخل رقم cvv">
          </div>
        </div>

        <button onclick="submitVisaPayment()" class="w-full mt-4 py-4 bg-gray-900 text-white rounded-full font-bold shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
          <i class="fas fa-bolt"></i> دفع الآن
        </button>
      </div>
    </div>
  </section>

  <section id="usdtView" class="view-section p-4 pb-28 bg-gray-50">
    <div class="flex items-center gap-4 mb-6">
      <button onclick="handleExitAttempt()" class="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center">
        <i class="fas fa-arrow-right"></i>
      </button>
      <h2 class="font-bold text-lg">دفع بواسطة USDT (TRC20)</h2>
    </div>

    <div class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 text-center">
      <div class="bg-red-50 text-red-600 inline-block px-4 py-2 rounded-full text-sm font-bold mb-4">
        <i class="fas fa-clock ml-1"></i>
        تنتهي الجلسة خلال: <span id="timer">30:00</span>
      </div>

      <div class="bg-amber-50 border border-amber-200 text-amber-800 rounded-[1.5rem] p-4 text-sm font-bold mb-6">
        <div class="mb-2"><i class="fas fa-circle-info ml-1"></i> يجب الدفع خلال 30 دقيقة حتى يتم التحقق الآلي بنجاح.</div>
        <div><i class="fas fa-triangle-exclamation ml-1"></i> يجب دفع المبلغ بالضبط كما هو ظاهر أدناه بدون زيادة أو نقصان.</div>
      </div>

      <div class="mb-6">
        <p class="text-gray-400 text-sm mb-1">المبلغ المطلوب بالدولار</p>
        <div class="text-3xl font-black text-gray-800" id="usdtAmount">$0.00</div>
        <p class="text-[10px] text-gray-400 mt-1">سعر الصرف الحالي: <span id="usdtRateText">1$ = 3.2 ₪</span></p>
      </div>

      <div class="bg-gray-50 p-4 rounded-[2rem] mb-6 flex flex-col items-center">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCYKl7uampM2nC16zong5KTZaern3dqfoKLbwjcejPT77BNLNH1JAfaI0JsZce1G-hWOAw4U7W-8DVhIaRSpGX_yyQezSxcqRRcznVSlZhynQm8DVvknURwwBKGKaoA-9UqC_SYG-IiWjorHcG_pR8HoIOfiKHeUIYbIbQchfJBvX4yweLmqwPR_McTVTI/s419/1000006606.jpg"
             class="w-48 h-48 object-contain mb-4 shadow-md bg-white p-2 border rounded-2xl" alt="QR Code">
        <p class="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">عنوان المحفظة (TRC20)</p>
        <div class="flex items-center gap-2 bg-white border p-3 rounded-full w-full">
          <code class="text-[10px] font-bold text-gray-700 flex-grow break-all text-center">TBzfSosyHRNS8srX3Yj6jWEwJrEmDHrpgQ</code>
          <button onclick="copyWallet()" class="text-red-500 p-2"><i class="fas fa-copy"></i></button>
        </div>
      </div>

      <div id="usdtInlineAlert" class="hidden mb-4 text-right bg-red-50 border border-red-200 text-red-700 rounded-[1.5rem] px-4 py-3 text-sm font-bold"></div>

      <button onclick="verifyUsdtPayment()" class="w-full py-4 bg-gray-900 text-white rounded-full font-bold shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
        <i class="fas fa-paper-plane"></i> لقد دفعت بالفعل
      </button>
    </div>
  </section>

  <section id="cartView" class="view-section p-4 pb-28">
    <div class="flex items-center gap-4 mb-6">
      <button onclick="goBack()" class="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center text-gray-700">
        <i class="fas fa-arrow-right"></i>
      </button>
      <h2 class="font-bold text-lg">سلة المشتريات</h2>
    </div>

    <div id="cartItemsList" class="space-y-4 mb-6"></div>

    <div id="emptyCartMsg" class="hidden text-center py-20">
      <i class="fas fa-shopping-cart text-5xl text-gray-200 mb-4"></i>
      <p class="text-gray-400">السلة فارغة حالياً</p>
    </div>
  </section>

  <section id="adminView" class="view-section p-4 pb-28">
    <div class="flex items-center gap-4 mb-6 justify-between">
      <div class="flex items-center gap-4">
        <button onclick="goBack()" class="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center">
          <i class="fas fa-arrow-right"></i>
        </button>
        <h2 class="font-bold text-lg">لوحة الموظفين</h2>
      </div>
      <button onclick="adminLogout()" class="px-4 py-2 bg-gray-900 text-white font-bold rounded-full">
        <i class="fas fa-right-from-bracket ml-1"></i> خروج
      </button>
    </div>

    <div class="info-card p-6 shadow-sm space-y-4">
      <div class="bg-gray-50 border border-gray-100 rounded-[2rem] p-4 space-y-4">
        <div>
          <h3 class="font-bold">إعدادات المتجر</h3>
          <p class="text-[11px] text-gray-400">يمكنك تغيير اسم المتجر، صورة الشعار، وصورة بدل الاسم.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-3">
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">اسم المتجر</label>
              <input id="adminStoreName" class="w-full bg-white border border-gray-200 py-3 px-4 text-sm font-bold" placeholder="اسم المتجر">
            </div>

            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">نوع العنوان</label>
              <select id="adminStoreTitleMode" class="w-full bg-white border border-gray-200 py-3 px-4 text-sm font-bold">
                <option value="text">نص</option>
                <option value="image">صورة بدل الاسم</option>
              </select>
            </div>

            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">سعر صرف الدولار</label>
              <input id="adminExchangeRate" type="number" step="0.01" min="0.01" class="w-full bg-white border border-gray-200 py-3 px-4 text-sm font-bold" placeholder="سعر الصرف">
            </div>
          </div>

          <div class="space-y-3">
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">شعار المتجر من الجهاز</label>
              <input id="adminStoreLogoFile" type="file" accept="image/*" class="w-full bg-white border border-gray-200 py-3 px-4 text-sm font-bold">
            </div>

            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">صورة العنوان من الجهاز</label>
              <input id="adminStoreTitleImageFile" type="file" accept="image/*" class="w-full bg-white border border-gray-200 py-3 px-4 text-sm font-bold">
            </div>

            <button onclick="saveStoreSettings()" class="w-full py-3 bg-gray-900 text-white font-bold">حفظ إعدادات المتجر</button>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-[1.75rem] p-4">
          <h4 class="font-bold mb-3">حماية الموظفين</h4>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">بريد الموظفين</label>
              <input id="adminHiddenEmail" type="email" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold" placeholder="example@email.com">
            </div>
            <div class="flex items-end">
              <button onclick="saveAdminSecuritySettings()" class="w-full py-3 bg-red-500 text-white font-bold">حفظ البريد</button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-5 gap-2 mb-4">
        <button onclick="showAdminSection('ordersSection')" class="admin-tab-btn py-3 bg-red-500 text-white font-bold" id="tab-ordersSection">الطلبات</button>
        <button onclick="showAdminSection('productsSection')" class="admin-tab-btn py-3 bg-gray-100 text-gray-700 font-bold" id="tab-productsSection">المنتجات</button>
        <button onclick="showAdminSection('categoriesSection')" class="admin-tab-btn py-3 bg-gray-100 text-gray-700 font-bold" id="tab-categoriesSection">الأصناف</button>
        <button onclick="showAdminSection('countriesSection')" class="admin-tab-btn py-3 bg-gray-100 text-gray-700 font-bold" id="tab-countriesSection">الدول</button>
        <button onclick="showAdminSection('adsSection')" class="admin-tab-btn py-3 bg-gray-100 text-gray-700 font-bold" id="tab-adsSection">الإعلانات</button>
      </div>

      <div id="ordersSection" class="admin-section">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="font-bold">قسم الطلبات</h3>
            <p class="text-[11px] text-gray-400">يمكن تحديد عدة طلبات وحذفها أو حذف الكل</p>
          </div>
          <div class="flex gap-2">
            <button onclick="toggleAllOrdersSelection(true)" class="px-4 py-2 bg-gray-100 font-bold rounded-full">تحديد الكل</button>
            <button onclick="toggleAllOrdersSelection(false)" class="px-4 py-2 bg-gray-100 font-bold rounded-full">إلغاء التحديد</button>
            <button onclick="deleteSelectedOrders()" class="px-4 py-2 bg-red-500 text-white font-bold rounded-full">حذف المحدد</button>
            <button onclick="deleteAllOrders()" class="px-4 py-2 bg-gray-900 text-white font-bold rounded-full">حذف الكل</button>
          </div>
        </div>
        <div id="adminOrders" class="space-y-2 mt-4"></div>
      </div>

      <div id="productsSection" class="admin-section hidden">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-bold">قسم المنتجات</h3>
            <p class="text-[11px] text-gray-400">يمكنك تحديد الدول التي سيظهر فيها كل منتج</p>
          </div>
          <button onclick="openProductEditor(null)" class="px-4 py-2 bg-gray-900 text-white font-bold rounded-full">+ إضافة منتج</button>
        </div>
        <div id="adminProducts" class="space-y-2 mt-4"></div>
      </div>

      <div id="categoriesSection" class="admin-section hidden">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-bold">قسم الأصناف</h3>
            <p class="text-[11px] text-gray-400">أصناف Firebase فقط</p>
          </div>
          <button onclick="openCategoryEditor(null)" class="px-4 py-2 bg-red-500 text-white font-bold rounded-full">+ إضافة صنف</button>
        </div>

        <div class="bg-gray-50 border border-gray-100 rounded-[2rem] p-4 mt-4">
          <div class="flex items-center justify-between mb-3">
            <div>
              <h4 class="font-bold">خصم على قسم كامل</h4>
              <p class="text-[11px] text-gray-400">اختر القسم ونسبة الخصم، وسيظهر الخصم على كل منتجات هذا القسم</p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">القسم</label>
              <select id="discountCategorySelect" class="w-full bg-white border border-gray-200 py-3 px-4 text-sm font-bold"></select>
            </div>
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">نسبة الخصم %</label>
              <input id="discountPercentInput" type="number" min="1" max="99" class="w-full bg-white border border-gray-200 py-3 px-4 text-sm font-bold" placeholder="مثال 20">
            </div>
            <div class="flex items-end">
              <button onclick="saveCategoryDiscount()" class="w-full py-3 bg-gray-900 text-white font-bold">حفظ الخصم</button>
            </div>
          </div>

          <div id="adminCategoryDiscounts" class="space-y-2"></div>
        </div>

        <div id="adminCategories" class="space-y-2 mt-4"></div>
      </div>

      <div id="countriesSection" class="admin-section hidden">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-bold">قسم الدول</h3>
            <p class="text-[11px] text-gray-400">إضافة علم الدولة + العملة + قيمتها بالنسبة للشيكل</p>
          </div>
          <button onclick="openCountryEditor(null)" class="px-4 py-2 bg-gray-900 text-white font-bold rounded-full">+ إضافة دولة</button>
        </div>
        <div id="adminCountries" class="space-y-2 mt-4"></div>
      </div>

      <div id="adsSection" class="admin-section hidden">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-bold">الإعلانات الممولة</h3>
            <p class="text-[11px] text-gray-400">HTML / JSON / صورة / سلايدر صور / منتج / سلايدر منتجات</p>
          </div>
          <button onclick="openAdEditor(null)" class="px-4 py-2 bg-gray-900 text-white font-bold rounded-full">+ إضافة إعلان</button>
        </div>
        <div id="adminAds" class="space-y-2 mt-4"></div>
      </div>

      <hr>

      <div class="flex items-center justify-between">
        <h3 class="font-bold">كلمة مرور الموظفين</h3>
        <button onclick="openForceChangePin(false)" class="px-4 py-2 bg-gray-100 font-bold rounded-full">تغيير</button>
      </div>
    </div>
  </section>

  <div id="bottomBar" class="fixed bottom-0 inset-x-0 bg-white border-t p-4 flex justify-between items-center z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
    <div class="flex flex-col">
      <span class="text-xs text-gray-400 font-semibold">المبلغ</span>
      <span id="footerTotalPrice" class="text-xl font-bold text-red-500">0.00 ₪</span>
    </div>
    <div id="actionBtnContainer">
      <button id="primaryActionBtn" onclick="handlePrimaryAction()" class="bg-red-500 text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-red-200 flex items-center gap-2 active:scale-95 transition-transform">
        <span id="actionBtnText">اشتري الآن</span>
      </button>
    </div>
  </div>

  <script>
    const firebaseConfig = {
      apiKey: "AIzaSyCnLAY7zQyBy7gUuL9wszt9aEhiJgvRmxI",
      authDomain: "shop-d52dc.firebaseapp.com",
      databaseURL: "https://shop-d52dc-default-rtdb.firebaseio.com",
      projectId: "shop-d52dc",
      storageBucket: "shop-d52dc.appspot.com",
      messagingSenderId: "97580537866",
      appId: "1:97580537866:web:abc46e5a2f527b6300a7f3",
      measurementId: "G-956RQMBP42"
    };

    firebase.initializeApp(firebaseConfig);
    const rtdb = firebase.database();
    const storage = firebase.storage();

    const PATH_SETTINGS_ADMIN = "settings/admin";
    const PATH_SETTINGS_STORE = "settings/store";
    const PATH_SETTINGS_CATEGORY_DISCOUNTS = "settings/categoryDiscounts";
    const PATH_CATEGORIES = "categories";
    const PATH_PRODUCTS = "products";
    const PATH_ORDERS = "orders";
    const PATH_COUNTRIES = "countries";
    const PATH_ADS = "ads";

    const ADMIN_SESSION_KEY = "norhan_admin_session";
    const COUNTRY_STORAGE_KEY = "norhan_selected_country";

    const GLOBAL_COUNTRY = {
      code: "GLOBAL",
      name: "عالمي",
      flagUrl: "",
      currencyCode: "USD",
      currencySymbol: "$",
      rateToIls: 3.2,
      enabled: true,
      order: -999
    };

    let storeSettings = {
      exchangeRate: 3.2,
      storeName: "متجر نورهان",
      storeLogoUrl: "",
      storeTitleMode: "text",
      storeTitleImageUrl: ""
    };

    let adminSettingsCache = {
      email: "homworkhhh76@gmail.com",
      pinHash: null,
      mustChange: true
    };

    let categoryDiscounts = {};
    let exchangeRate = 3.2;
    let cart = JSON.parse(localStorage.getItem('norhan_cart')) || [];
    let viewHistory = ['storeView'];
    let selectedProductId = null;
    let currentActiveCategory = 'all';
    let selectedPaymentMethod = 'visa';
    let dynamicPrice = 0;
    let timerInterval = null;

    let categories = [];
    let products = [];
    let countries = [];
    let ads = [];
    let ordersSelection = new Set();

    let remoteProductsMap = {};
    let remoteAdsMap = {};
    let selectedCountryCode = localStorage.getItem(COUNTRY_STORAGE_KEY) || "GLOBAL";

    let adminSession = JSON.parse(sessionStorage.getItem(ADMIN_SESSION_KEY)||"null");
    let editingProductKey = null;
    let editingCategoryId = null;
    let editingCountryCode = null;
    let editingAdKey = null;

    let builderBlocks = [];
    let builderBlockFiles = {};
    let draggedBlockId = null;

    let productsPerPage = 6;
    let renderedProductsCount = 0;
    let currentRenderedProductList = [];
    let productsObserver = null;

    function optimizedImageAttrs(){
      return `loading="lazy" decoding="async" fetchpriority="low" referrerpolicy="no-referrer"`;
    }

    function setLoading(on){
      const el=document.getElementById('loadingOverlay');
      if(!el) return;
      on ? el.classList.remove('hidden') : el.classList.add('hidden');
    }

    function showToast(msg, type="success"){
      const t=document.createElement('div');
      const icons = {
        success: '<i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i>',
        error: '<i class="fa-solid fa-circle-xmark text-rose-400 text-lg"></i>',
        info: '<i class="fa-solid fa-circle-info text-sky-400 text-lg"></i>'
      };
      t.className="toast-notification fixed bottom-24 left-1/2 -translate-x-1/2 bg-[#111827]/95 backdrop-blur-md text-white px-5 py-3 rounded-full z-[10000] text-sm font-bold flex items-center gap-3 shadow-2xl border border-white/10";
      t.innerHTML=`${icons[type] || icons.success}<span>${escapeHtml(msg)}</span>`;
      document.body.appendChild(t);
      setTimeout(()=>{
        t.style.opacity='0';
        t.style.transform='translate(-50%,20px)';
        setTimeout(()=>t.remove(),300)
      },2500);
    }

    function showUsdtInlineAlert(msg, type="error"){
      const el = document.getElementById("usdtInlineAlert");
      if(!el) return;
      el.classList.remove("hidden");
      if(type==="success"){
        el.className="mb-4 text-right bg-green-50 border border-green-200 text-green-700 rounded-[1.5rem] px-4 py-3 text-sm font-bold";
      }else if(type==="info"){
        el.className="mb-4 text-right bg-blue-50 border border-blue-200 text-blue-700 rounded-[1.5rem] px-4 py-3 text-sm font-bold";
      }else{
        el.className="mb-4 text-right bg-red-50 border border-red-200 text-red-700 rounded-[1.5rem] px-4 py-3 text-sm font-bold";
      }
      el.innerHTML = `<i class="fas fa-triangle-exclamation ml-1"></i>${escapeHtml(msg)}`;
    }

    function hideUsdtInlineAlert(){
      const el = document.getElementById("usdtInlineAlert");
      if(!el) return;
      el.classList.add("hidden");
      el.innerHTML = "";
    }

    function escapeHtml(str){
      return String(str ?? "")
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
    }

    function safeParseJSON(txt, fallback){
      try{return JSON.parse(txt);}catch{return fallback;}
    }

    function uid(prefix="id"){
      return prefix + "_" + Math.random().toString(36).slice(2,9) + Date.now().toString(36).slice(-4);
    }

    function normalizeCategoryId(value){
      return String(value||"")
        .trim()
        .toLowerCase()
        .replace(/\s+/g,'-')
        .replace(/[^a-z0-9_-]/g,'');
    }

    function normalizeCountryCode(value){
      return String(value||"").trim().toUpperCase().replace(/[^A-Z]/g,"").slice(0,3);
    }

    function getNavigatorCountryCode(){
      const lang = (navigator.language || "").toUpperCase();
      const parts = lang.split("-");
      return parts[1] || "";
    }

    function getSelectedCountry(){
      if(selectedCountryCode === "GLOBAL") return {...GLOBAL_COUNTRY, rateToIls: exchangeRate};
      return countries.find(c=>c.code===selectedCountryCode && c.enabled!==false) || {...GLOBAL_COUNTRY, rateToIls: exchangeRate};
    }

    function moneySymbolPosition(symbol){
      if(symbol==="₪" || symbol==="د.أ" || symbol==="د.إ" || symbol==="ر.س") return "after";
      return "before";
    }

    function convertIlsToSelectedCurrency(ilsAmount){
      const country = getSelectedCountry();
      const rate = Number(country.rateToIls || 1);
      if(rate <= 0) return Number(ilsAmount || 0);
      return Number(ilsAmount || 0) / rate;
    }

    function formatDisplayPrice(ilsAmount){
      const country = getSelectedCountry();
      const localValue = convertIlsToSelectedCurrency(ilsAmount);
      const symbol = country.currencySymbol || country.currencyCode || "₪";
      if(moneySymbolPosition(symbol)==="after"){
        return `${localValue.toFixed(2)} ${symbol}`;
      }
      return `${symbol}${localValue.toFixed(2)}`;
    }

    function calculateDiscountPercent(price, oldPrice){
      const p = Number(price || 0);
      const o = Number(oldPrice || 0);
      if(!(o > p && o > 0)) return null;
      return Math.round(((o - p) / o) * 100);
    }

    function getCategoryDiscountPercent(categoryId){
      const item = categoryDiscounts?.[categoryId];
      if(!item || item.enabled===false) return 0;
      const percent = Number(item.percent || 0);
      if(percent <= 0) return 0;
      return Math.min(percent, 99);
    }

    function getProductPricing(product){
      const basePrice = Number(product?.price || 0);
      const manualOldPrice = Number(product?.oldPrice || 0);
      const catPercent = getCategoryDiscountPercent(product?.category);
      if(catPercent > 0 && basePrice > 0){
        const newPrice = +(basePrice * (1 - (catPercent / 100))).toFixed(2);
        const oldPrice = manualOldPrice > basePrice ? manualOldPrice : basePrice;
        return {
          finalPrice: newPrice,
          oldPrice,
          percent: catPercent,
          source: "category"
        };
      }
      if(manualOldPrice > basePrice && basePrice > 0){
        return {
          finalPrice: basePrice,
          oldPrice: manualOldPrice,
          percent: calculateDiscountPercent(basePrice, manualOldPrice),
          source: "product"
        };
      }
      return {
        finalPrice: basePrice,
        oldPrice: 0,
        percent: 0,
        source: "none"
      };
    }

    function getProductUnitPrice(product){
      return Number(getProductPricing(product).finalPrice || 0);
    }

    function getProductOldPrice(product){
      return Number(getProductPricing(product).oldPrice || 0);
    }

    function getProductDiscountBadge(product){
      const info = getProductPricing(product);
      return info.percent > 0 ? info.percent : null;
    }

    function navigateTo(viewId, pushHistory=true){
      document.querySelectorAll('.view-section').forEach(v=>v.classList.remove('active'));
      const target = document.getElementById(viewId);
      if(target) target.classList.add('active');

      const bottomBar=document.getElementById('bottomBar');
      if(viewId==='usdtView'){
        bottomBar.classList.add('hidden');
        startTimer(30*60);
      } else {
        bottomBar.classList.remove('hidden');
        clearInterval(timerInterval);
      }

      if(pushHistory){
        viewHistory.push(viewId);
        history.pushState({view:viewId},"");
      }
      window.scrollTo(0,0);
      updateFooterDisplay();
    }

    window.onpopstate=function(){
      const active = document.querySelector('.view-section.active');
      if(active && active.id==='usdtView'){
        handleExitAttempt();
        history.pushState({view:'usdtView'},"");
        return;
      }
      if(viewHistory.length>1){
        viewHistory.pop();
        navigateTo(viewHistory[viewHistory.length-1],false);
      }
    };

    function goBack(){window.history.back();}

    async function sha256(text){
      const data=new TextEncoder().encode(text);
      const hash=await crypto.subtle.digest("SHA-256",data);
      return Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,"0")).join("");
    }

    async function ensureAdminSettings(){
      const snap = await rtdb.ref(PATH_SETTINGS_ADMIN).get();
      if(!snap.exists()){
        const defaultHash = await sha256("0000");
        const initial = {
          pinHash: defaultHash,
          mustChange: true,
          email: "homworkhhh76@gmail.com",
          updatedAt: Date.now()
        };
        await rtdb.ref(PATH_SETTINGS_ADMIN).set(initial);
        adminSettingsCache = {...initial};
        return initial;
      }
      const d=snap.val()||{};
      adminSettingsCache = {
        pinHash: d.pinHash || null,
        mustChange: d.mustChange!==false,
        email: d.email || "homworkhhh76@gmail.com"
      };
      return adminSettingsCache;
    }

    async function uploadFileToStorage(file, folder){
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g,"");
      const path = `${folder}/${Date.now()}_${Math.random().toString(16).slice(2)}.${ext}`;
      const ref = storage.ref().child(path);
      await ref.put(file);
      return await ref.getDownloadURL();
    }

    function renderStoreBrand(){
      const titleWrap = document.getElementById("storeTitleWrap");
      const logoWrap = document.getElementById("storeLogoWrap");

      if(storeSettings.storeLogoUrl){
        logoWrap.innerHTML = `<img src="${escapeHtml(storeSettings.storeLogoUrl)}" class="w-full h-full object-cover" ${optimizedImageAttrs()} onerror="this.outerHTML='<i class=&quot;fas fa-store text-red-500&quot;></i>'">`;
      }else{
        logoWrap.innerHTML = `<i class="fas fa-store"></i>`;
      }

      if(storeSettings.storeTitleMode === "image" && storeSettings.storeTitleImageUrl){
        titleWrap.innerHTML = `<img src="${escapeHtml(storeSettings.storeTitleImageUrl)}" class="store-title-image" ${optimizedImageAttrs()} onerror="this.outerHTML='${escapeHtml(storeSettings.storeName || "متجر نورهان")}'">`;
      }else{
        titleWrap.textContent = storeSettings.storeName || "متجر نورهان";
      }
    }

    async function loadStoreSettings(){
      const snap = await rtdb.ref(PATH_SETTINGS_STORE).get();
      const v = snap.val() || {};

      storeSettings = {
        exchangeRate: Number(v.exchangeRate || 3.2),
        storeName: v.storeName || "متجر نورهان",
        storeLogoUrl: v.storeLogoUrl || "",
        storeTitleMode: v.storeTitleMode || "text",
        storeTitleImageUrl: v.storeTitleImageUrl || ""
      };

      exchangeRate = Number(storeSettings.exchangeRate || 3.2);
      document.getElementById("adminExchangeRate").value = exchangeRate;
      document.getElementById("adminStoreName").value = storeSettings.storeName || "";
      document.getElementById("adminStoreTitleMode").value = storeSettings.storeTitleMode || "text";
      document.getElementById("usdtRateText").innerText = `1$ = ${exchangeRate} ₪`;

      renderStoreBrand();
    }

    async function saveStoreSettings(){
      const rate = Number(document.getElementById("adminExchangeRate").value || 0);
      const name = (document.getElementById("adminStoreName").value || "").trim();
      const titleMode = document.getElementById("adminStoreTitleMode").value || "text";
      const logoFile = document.getElementById("adminStoreLogoFile").files?.[0] || null;
      const titleImageFile = document.getElementById("adminStoreTitleImageFile").files?.[0] || null;

      if(!(rate > 0)){
        showToast("أدخل سعر صرف صحيح","error");
        return;
      }

      setLoading(true);
      try{
        let storeLogoUrl = storeSettings.storeLogoUrl || "";
        let storeTitleImageUrl = storeSettings.storeTitleImageUrl || "";

        if(logoFile){
          storeLogoUrl = await uploadFileToStorage(logoFile, "store_assets");
        }

        if(titleImageFile){
          storeTitleImageUrl = await uploadFileToStorage(titleImageFile, "store_assets");
        }

        const data = {
          exchangeRate: rate,
          storeName: name || "متجر نورهان",
          storeLogoUrl,
          storeTitleMode: titleMode,
          storeTitleImageUrl,
          updatedAt: Date.now()
        };

        await rtdb.ref(PATH_SETTINGS_STORE).update(data);
        storeSettings = {...storeSettings, ...data};
        exchangeRate = rate;

        document.getElementById("usdtRateText").innerText = `1$ = ${exchangeRate} ₪`;
        renderStoreBrand();
        renderCountryDropdown();
        renderProducts();
        renderCartItems();
        updateFooterDisplay();
        showToast("تم حفظ إعدادات المتجر","success");
      }catch(e){
        console.error(e);
        showToast("فشل حفظ إعدادات المتجر","error");
      }finally{
        setLoading(false);
      }
    }

    async function saveAdminSecuritySettings(){
      if(!adminSession || Date.now()>adminSession.expiresAt){
        showToast("سجّل الدخول أولاً","error");
        return;
      }
      const email = (document.getElementById("adminHiddenEmail").value || "").trim();
      if(!email || !email.includes("@")){
        showToast("أدخل بريدًا صحيحًا","error");
        return;
      }
      setLoading(true);
      try{
        await rtdb.ref(PATH_SETTINGS_ADMIN).update({ email, updatedAt: Date.now() });
        adminSettingsCache.email = email;
        showToast("تم حفظ البريد","success");
      }catch(e){
        console.error(e);
        showToast("فشل حفظ البريد","error");
      }finally{
        setLoading(false);
      }
    }

    async function openAdmin(){
      if(adminSession && adminSession.expiresAt && Date.now()<adminSession.expiresAt){
        enterAdmin();
        return;
      }
      document.getElementById("adminEmailInput").value="";
      document.getElementById("adminPinInput").value="";
      setLoading(true);
      try{
        await ensureAdminSettings();
        document.getElementById("adminLoginModal").classList.remove("hidden");
      }catch(e){
        console.error(e);
        showToast("تعذر تحميل بيانات الدخول","error");
      }finally{
        setLoading(false);
      }
    }

    function closeAdminLogin(){document.getElementById("adminLoginModal").classList.add("hidden");}

    async function adminLogin(){
      const email=(document.getElementById("adminEmailInput").value||"").trim().toLowerCase();
      const pin=(document.getElementById("adminPinInput").value||"").trim();

      if(!email || !email.includes("@")){
        showToast("أدخل البريد بشكل صحيح","error");
        return;
      }
      if(pin.length<4){
        showToast("أدخل كلمة مرور صحيحة","error");
        return;
      }

      setLoading(true);
      try{
        const st = adminSettingsCache.pinHash ? adminSettingsCache : await ensureAdminSettings();
        const h = await sha256(pin);

        if((st.email || "").toLowerCase() !== email){
          showToast("البريد غير صحيح","error");
          return;
        }

        if(!st.pinHash || h!==st.pinHash){
          showToast("كلمة المرور خاطئة","error");
          return;
        }

        adminSession={ok:true,expiresAt:Date.now()+2*60*60*1000};
        sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(adminSession));
        closeAdminLogin();
        if(st.mustChange){
          openForceChangePin(true);
          return;
        }
        enterAdmin();
      }catch(e){
        console.error(e);
        showToast("خطأ أثناء تسجيل الدخول","error");
      }finally{
        setLoading(false);
      }
    }

    function openForceChangePin(forced){
      document.getElementById("newPin1").value="";
      document.getElementById("newPin2").value="";
      document.getElementById("adminChangePinModal").classList.remove("hidden");
      document.getElementById("adminChangePinModal").dataset.forced = forced ? "1":"0";
    }

    function closeChangePinModal(){
      const forced = document.getElementById("adminChangePinModal").dataset.forced==="1";
      if(forced){
        showToast("يجب تغيير كلمة المرور أولاً","error");
        return;
      }
      document.getElementById("adminChangePinModal").classList.add("hidden");
    }

    async function changeAdminPin(){
      if(!adminSession || Date.now()>adminSession.expiresAt){
        showToast("سجّل الدخول أولاً","error");
        return;
      }
      const p1=(document.getElementById("newPin1").value||"").trim();
      const p2=(document.getElementById("newPin2").value||"").trim();
      if(p1.length<4 || !/^\d+$/.test(p1)){
        showToast("كلمة المرور يجب أن تكون أرقام (4+)","error");
        return;
      }
      if(p1!==p2){
        showToast("التأكيد غير مطابق","error");
        return;
      }
      setLoading(true);
      try{
        const h=await sha256(p1);
        await rtdb.ref(PATH_SETTINGS_ADMIN).update({pinHash:h,mustChange:false,updatedAt:Date.now()});
        showToast("تم تغيير كلمة المرور","success");
        document.getElementById("adminChangePinModal").classList.add("hidden");
        enterAdmin();
      }catch(e){
        console.error(e);
        showToast("فشل تغيير كلمة المرور","error");
      }finally{
        setLoading(false);
      }
    }

    function adminLogout(){
      adminSession=null;
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
      showToast("تم تسجيل الخروج","success");
      navigateTo("storeView");
    }

    function showAdminSection(sectionId){
      document.querySelectorAll('.admin-section').forEach(sec=>sec.classList.add('hidden'));
      document.getElementById(sectionId).classList.remove('hidden');

      document.querySelectorAll('.admin-tab-btn').forEach(btn=>{
        btn.classList.remove('bg-red-500','text-white');
        btn.classList.add('bg-gray-100','text-gray-700');
      });

      const activeTab = document.getElementById('tab-' + sectionId);
      if(activeTab){
        activeTab.classList.remove('bg-gray-100','text-gray-700');
        activeTab.classList.add('bg-red-500','text-white');
      }
    }

    function enterAdmin(){
      document.getElementById("adminHiddenEmail").value = adminSettingsCache.email || "homworkhhh76@gmail.com";
      navigateTo("adminView");
      refreshAdminLists();
      setTimeout(()=>showAdminSection('ordersSection'), 50);
    }

    function normalizePrimaryAction(v){
      if(!v || typeof v!=="object") return {type:"default"};
      return {
        type: v.type || "default",
        message: v.message || "",
        toastType: v.toastType || "success",
        url: v.url || ""
      };
    }

    function normalizeContentBlocks(v){
      const arr = Array.isArray(v) ? v : [];
      return arr.map(item=>{
        const type = item.type || "text";
        if(type==="field"){
          return {
            id: item.id || uid("b"),
            type: "field",
            label: item.label || "حقل",
            key: item.key || uid("field"),
            inputType: item.inputType || "text",
            required: !!item.required,
            minLen: item.minLen ?? "",
            placeholder: item.placeholder || "",
            options: Array.isArray(item.options) ? item.options.join(", ") : (item.options || "")
          };
        }
        if(type==="button"){
          return {
            id: item.id || uid("b"),
            type: "button",
            label: item.label || "زر",
            actionType: item.actionType || "toast",
            url: item.url || "",
            message: item.message || "",
            toastType: item.toastType || "success"
          };
        }
        if(type==="toast"){
          return {
            id: item.id || uid("b"),
            type: "toast",
            label: item.label || "إظهار توست",
            message: item.message || "تم",
            toastType: item.toastType || "success"
          };
        }
        if(type==="image"){
          return {
            id: item.id || uid("b"),
            type: "image",
            src: item.src || "",
            caption: item.caption || ""
          };
        }
        return {
          id: item.id || uid("b"),
          type: "text",
          title: item.title || "",
          text: item.text || ""
        };
      });
    }

    function normalizeMiddleJson(v){
      const arr = Array.isArray(v) ? v : [];
      return arr.map(item=>{
        const type = item.type || "text";
        if(type==="note"){
          return {type:"note", style:item.style || "info", text:item.text || ""};
        }
        if(type==="image"){
          return {type:"image", src:item.src || "", caption:item.caption || ""};
        }
        if(type==="button"){
          return {
            type:"button",
            label:item.label || "زر",
            actionType:item.actionType || "toast",
            url:item.url || "",
            message:item.message || "",
            toastType:item.toastType || "success"
          };
        }
        if(type==="html"){
          return {type:"html", html:item.html || ""};
        }
        if(type==="card"){
          return {type:"card", title:item.title || "", text:item.text || ""};
        }
        if(type==="grid"){
          return {
            type:"grid",
            columns:Number(item.columns || 2),
            items:Array.isArray(item.items) ? item.items : []
          };
        }
        return {type:"text", title:item.title || "", text:item.text || ""};
      });
    }

    function normalizeAdJson(v){
      return normalizeMiddleJson(v);
    }

    function normalizeAdClickAction(v){
      if(!v || typeof v!=="object") return {type:"none", link:"", categoryId:"", productKey:""};
      return {
        type: v.type || "none",
        link: v.link || "",
        categoryId: v.categoryId || "",
        productKey: v.productKey || ""
      };
    }

    function normalizeAdImages(v){
      if(Array.isArray(v)) return v.map(x=>String(x||"").trim()).filter(Boolean);
      if(typeof v === 'string') return v.split(/\n+/).map(x=>x.trim()).filter(Boolean);
      return [];
    }

    function normalizeAdProductKeys(v){
      if(Array.isArray(v)) return v.map(x=>String(x||"").trim()).filter(Boolean);
      return [];
    }

    function normalizeAdDisplay(v){
      return {
        showBadge: v?.showBadge !== false,
        showBorder: v?.showBorder !== false
      };
    }

    function buildCategories(remoteCats){
      categories = Object.entries(remoteCats || {}).map(([id,val])=>({
        id,
        name: val?.name || id,
        order: Number(val?.order || 0),
        enabled: val?.enabled !== false
      })).sort((a,b)=>(a.order||0)-(b.order||0));
    }

    function buildCountries(remote){
      countries = Object.entries(remote || {}).map(([code,val])=>({
        code,
        name: val?.name || code,
        flagUrl: val?.flagUrl || "",
        currencyCode: val?.currencyCode || code,
        currencySymbol: val?.currencySymbol || val?.currencyCode || code,
        rateToIls: Number(val?.rateToIls || 1),
        enabled: val?.enabled !== false,
        order: Number(val?.order || 0)
      })).sort((a,b)=>(a.order||0)-(b.order||0));
    }

    function buildProducts(remotePro){
      let idx=0;
      remoteProductsMap = {};
      products = Object.entries(remotePro || {}).map(([key,val])=>{
        remoteProductsMap[key]=val;
        return {
          __type:"remote",
          __key:key,
          __localId:900000 + (idx++),
          category: val?.category || "all",
          name: val?.name || "منتج",
          price: Number(val?.price || 0),
          oldPrice: Number(val?.oldPrice || 0),
          delivery: val?.delivery || "سريع",
          image: val?.image || "https://via.placeholder.com/500?text=No+Image",
          desc: val?.desc || "",
          isDynamic: !!val?.isDynamic,
          enabled: val?.enabled !== false,
          visibleCountries: Array.isArray(val?.visibleCountries) ? val.visibleCountries : [],
          contentBlocks: normalizeContentBlocks(val?.contentBlocks || []),
          middleMode: val?.middleMode || "json",
          middleJson: normalizeMiddleJson(val?.middleJson || []),
          middleWebCode: val?.middleWebCode || "",
          primaryAction: normalizePrimaryAction(val?.primaryAction)
        };
      });
    }

    function buildCategoryDiscounts(remote){
      categoryDiscounts = {};
      Object.entries(remote || {}).forEach(([categoryId, val])=>{
        categoryDiscounts[categoryId] = {
          percent: Number(val?.percent || 0),
          enabled: val?.enabled !== false
        };
      });
    }

    function adStillActive(ad){
      if(!ad || !ad.enabled) return false;
      if(ad.infinite === true) return true;
      if(!ad.endAt) return true;
      return Date.now() <= Number(ad.endAt);
    }

    function buildAds(remote){
      remoteAdsMap = remote || {};
      ads = Object.entries(remote || {}).map(([key,val])=>({
        __key:key,
        name: val?.name || "إعلان",
        type: val?.type || "web",
        code: val?.code || "",
        json: normalizeAdJson(val?.json || []),
        image: val?.image || "",
        images: normalizeAdImages(val?.images || []),
        productKey: val?.productKey || "",
        productKeys: normalizeAdProductKeys(val?.productKeys || []),
        span: val?.span || "1",
        position: Number(val?.position || 1),
        enabled: val?.enabled !== false,
        infinite: val?.infinite === true,
        startAt: Number(val?.startAt || Date.now()),
        endAt: Number(val?.endAt || 0),
        clickAction: normalizeAdClickAction(val?.clickAction),
        display: normalizeAdDisplay(val?.display)
      })).filter(adStillActive).sort((a,b)=>(a.position||0)-(b.position||0));
    }

    function getProductByRemoteKey(key){
      return products.find(p=>p.__key===key) || null;
    }

    function detectAndApplyCountry(){
      const currentExists = selectedCountryCode==="GLOBAL" || countries.find(c=>c.code===selectedCountryCode && c.enabled!==false);
      if(currentExists){
        applyCountry(selectedCountryCode, false);
        return;
      }

      const navCode = getNavigatorCountryCode();
      if(navCode){
        const found = countries.find(c=>c.code===navCode && c.enabled!==false);
        if(found){
          applyCountry(found.code, false);
          return;
        }
      }

      applyCountry("GLOBAL", false);
    }

    function applyCountry(code, rerender=true){
      if(code!=="GLOBAL"){
        const exists = countries.find(c=>c.code===code && c.enabled!==false);
        if(!exists) code="GLOBAL";
      }
      selectedCountryCode = code;
      localStorage.setItem(COUNTRY_STORAGE_KEY, code);

      updateHeaderCountryUI();
      renderCountryDropdown();

      if(rerender){
        renderCategoriesBar();
        renderProducts();
        renderCartItems();
        updateFooterDisplay();
      }
    }

    function updateHeaderCountryUI(){
      const wrap = document.getElementById("headerCountryIconWrap");
      const label = document.getElementById("selectedCountryLabel");
      const country = getSelectedCountry();

      if(country.code==="GLOBAL"){
        wrap.innerHTML = `<i class="fas fa-globe text-gray-700"></i>`;
      }else{
        wrap.innerHTML = `<img src="${escapeHtml(country.flagUrl)}" class="country-icon" ${optimizedImageAttrs()} onerror="this.outerHTML='<i class=&quot;fas fa-globe text-gray-700&quot;></i>'">`;
      }

      label.textContent = `الدولة: ${country.name}`;
    }

    function toggleCountryDropdown(){
      document.getElementById("countryDropdownMenu").classList.toggle("hidden");
    }

    function renderCountryDropdown(){
      const menu = document.getElementById("countryDropdownMenu");
      const selectedWrap = document.getElementById("countryDropdownSelected");
      const enabledCountries = countries.filter(c=>c.enabled!==false);
      const current = getSelectedCountry();

      selectedWrap.innerHTML = current.code==="GLOBAL"
        ? `<i class="fas fa-globe text-gray-600"></i><span>عالمي</span>`
        : `<img src="${escapeHtml(current.flagUrl)}" class="country-icon" ${optimizedImageAttrs()} onerror="this.style.display='none'"><span>${escapeHtml(current.name)}</span>`;

      menu.innerHTML = `
        <button class="country-option-modern ${selectedCountryCode==='GLOBAL'?'active':''}" onclick="selectCountryFromDropdown('GLOBAL')">
          <i class="fas fa-globe text-gray-600"></i>
          <span>عالمي</span>
        </button>
        ${enabledCountries.map(c=>`
          <button class="country-option-modern ${selectedCountryCode===c.code?'active':''}" onclick="selectCountryFromDropdown('${c.code}')">
            <img src="${escapeHtml(c.flagUrl)}" class="country-icon" ${optimizedImageAttrs()} onerror="this.style.display='none'">
            <span>${escapeHtml(c.name)}</span>
          </button>
        `).join('')}
      `;
    }

    function selectCountryFromDropdown(code){
      applyCountry(code);
      document.getElementById("countryDropdownMenu").classList.add("hidden");
    }

    document.addEventListener("click", (e)=>{
      const box = document.querySelector(".country-select-modern");
      if(box && !box.contains(e.target)){
        const menu = document.getElementById("countryDropdownMenu");
        if(menu) menu.classList.add("hidden");
      }
    });

    function productVisibleInCurrentCountry(product){
      if(product.enabled===false) return false;
      if(selectedCountryCode === "GLOBAL") return true;
      if(!Array.isArray(product.visibleCountries) || !product.visibleCountries.length) return true;
      return product.visibleCountries.includes(selectedCountryCode) || product.visibleCountries.includes("ALL");
    }

    function getVisibleProducts(){
      return products.filter(productVisibleInCurrentCountry);
    }

    async function loadFromFirebase(){
      try{
        const [catsSnap, proSnap, countriesSnap, adsSnap, discountsSnap] = await Promise.all([
          rtdb.ref(PATH_CATEGORIES).get(),
          rtdb.ref(PATH_PRODUCTS).get(),
          rtdb.ref(PATH_COUNTRIES).get(),
          rtdb.ref(PATH_ADS).get(),
          rtdb.ref(PATH_SETTINGS_CATEGORY_DISCOUNTS).get()
        ]);

        buildCategories(catsSnap.val()||{});
        buildCountries(countriesSnap.val()||{});
        buildProducts(proSnap.val()||{});
        buildAds(adsSnap.val()||{});
        buildCategoryDiscounts(discountsSnap.val()||{});
        await loadStoreSettings();
        detectAndApplyCountry();
      }catch(e){
        console.error(e);
        categories = [];
        products = [];
        countries = [];
        ads = [];
        categoryDiscounts = {};
        exchangeRate = 3.2;
        showToast("تعذر تحميل بعض البيانات","error");
      }

      renderCountryDropdown();
      renderCategoriesBar();
      renderProducts();
      updateCartUI();
      updateFooterDisplay();
      populateCategoryDropdown();
      populateDiscountCategorySelect();
      document.getElementById("usdtRateText").innerText = `1$ = ${exchangeRate} ₪`;
    }

    function renderCategoriesBar(){
      const bar=document.getElementById('categoriesBar');
      const visibleProducts = getVisibleProducts();
      const usedCategories = new Set(visibleProducts.map(p=>p.category));
      const enabled=categories.filter(c=>c.enabled!==false && usedCategories.has(c.id)).sort((a,b)=>(a.order||0)-(b.order||0));

      bar.innerHTML = `
        <button id="cat-all" onclick="filterCategory('all')" class="${currentActiveCategory==='all'?'bg-red-500 text-white':'bg-gray-100 text-gray-600'} px-5 py-1.5 rounded-full whitespace-nowrap transition-colors">الكل</button>
        ${enabled.map(c=>{
          const active=(c.id===currentActiveCategory);
          const hasDiscount=getCategoryDiscountPercent(c.id)>0;
          return `<button id="cat-${c.id}" onclick="filterCategory('${c.id}')" class="${active?'bg-red-500 text-white':'bg-gray-100 text-gray-600'} px-5 py-1.5 rounded-full whitespace-nowrap transition-colors">${escapeHtml(c.name)}${hasDiscount?` <span class="text-[10px]">-${getCategoryDiscountPercent(c.id)}%</span>`:''}</button>`;
        }).join('')}
      `;
      if(currentActiveCategory!=="all" && !enabled.find(c=>c.id===currentActiveCategory)) currentActiveCategory='all';
    }

    function filterCategory(cat){
      setLoading(true);
      currentActiveCategory=cat;
      renderCategoriesBar();
      setTimeout(()=>{
        renderProducts();
        setLoading(false);
      }, 250);
    }

    function handleSearch(){renderProducts();}

    function mergeProductsWithAds(productList){
      const out = [];
      let pIndex = 0;

      while(pIndex < productList.length){
        const nextPos = pIndex + 1;
        const adsHere = ads.filter(ad => Number(ad.position||1) === nextPos);
        adsHere.forEach(ad=>out.push({__kind:"ad", ...ad}));
        out.push({__kind:"product", ...productList[pIndex]});
        pIndex++;
      }

      const trailingAds = ads.filter(ad => Number(ad.position||1) > productList.length);
      trailingAds.forEach(ad=>out.push({__kind:"ad", ...ad}));
      return out;
    }

    function resetProductsPagination(){
      renderedProductsCount = 0;
      currentRenderedProductList = [];
      if(productsObserver){
        productsObserver.disconnect();
        productsObserver = null;
      }
    }

    function observeProductsLoadMore(){
      const sentinel = document.getElementById("productsLoadSentinel");
      if(!sentinel) return;

      if(productsObserver) productsObserver.disconnect();

      productsObserver = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            loadMoreProducts();
          }
        });
      }, {threshold:.2});

      productsObserver.observe(sentinel);
    }

    function loadMoreProducts(){
      const all = currentRenderedProductList;
      if(renderedProductsCount >= all.length) return;
      renderedProductsCount += productsPerPage;
      renderProductsChunk();
    }

    function getAdSpanClass(span){
      if(String(span)==="2") return "ad-slot-2";
      if(String(span)==="free") return "ad-slot-free";
      return "ad-slot-1";
    }

    function getAdCardClasses(ad){
      const display = normalizeAdDisplay(ad.display);
      return `ad-card ${getAdSpanClass(ad.span)} ${display.showBorder ? '' : 'ad-no-border'}`.trim();
    }

    function renderAdBadge(ad){
      const display = normalizeAdDisplay(ad.display);
      if(!display.showBadge) return "";
      return `<div class="ad-badge"><i class="fas fa-bullhorn"></i> ممول</div>`;
    }

    function openProductFromAd(remoteKey){
      const product = getProductByRemoteKey(remoteKey);
      if(!product) return;
      selectedProductId = product.__localId;
      openPaymentInfo();
    }

    function goToCategoryFromAd(categoryId){
      if(!categoryId) return;
      navigateTo("storeView");
      currentActiveCategory = categoryId;
      renderCategoriesBar();
      renderProducts();
      window.scrollTo({top:0,behavior:"smooth"});
    }

    function handleAdClick(ad){
      if(!ad) return;
      if(ad.type==="product" && ad.productKey){
        openProductFromAd(ad.productKey);
        return;
      }

      const action = normalizeAdClickAction(ad.clickAction);
      if(action.type==="link" && action.link){
        window.location.href = action.link;
        return;
      }
      if(action.type==="category" && action.categoryId){
        goToCategoryFromAd(action.categoryId);
        return;
      }
      if(action.type==="product" && action.productKey){
        openProductFromAd(action.productKey);
        return;
      }
    }

    function renderAdProductCard(product, compact=false){
      if(!product) return `<div class="p-4 text-center text-gray-400 font-bold">المنتج غير موجود</div>`;
      const disc = getProductDiscountBadge(product);
      const priceInfo = getProductPricing(product);
      return `
        <div onclick="openProductFromAd('${product.__key}')" class="${compact?'ad-product-item':'p-3'} cursor-pointer">
          <div class="bg-white p-3 rounded-[2rem] border border-gray-100 relative h-full">
            ${disc ? `<div class="discount-badge"><i class="fas fa-percent"></i> -${disc}%</div>` : ''}
            <img src="${escapeHtml(product.image)}" class="w-full product-img mb-2 p-1 product-thumb-rounded" ${optimizedImageAttrs()} onerror="this.src='https://via.placeholder.com/500?text=No+Image'">
            <h3 class="font-bold text-sm mb-1 truncate text-gray-800">${escapeHtml(product.name)}</h3>
            <div class="flex items-center gap-2">
              <span class="text-red-500 font-bold text-sm">${formatDisplayPrice(priceInfo.finalPrice)}</span>
              ${priceInfo.oldPrice>0?`<span class="text-gray-400 line-through text-[10px]">${formatDisplayPrice(priceInfo.oldPrice)}</span>`:''}
            </div>
          </div>
        </div>
      `;
    }

    function scrollAdTrack(id, dir=1){
      const track = document.getElementById(id);
      if(!track) return;
      const amount = track.clientWidth * 0.9;
      track.scrollBy({left: dir * amount, behavior:'smooth'});
    }

    function syncAdDots(trackId, dotsId){
      const track = document.getElementById(trackId);
      const dots = document.getElementById(dotsId);
      if(!track || !dots) return;
      const children = [...dots.querySelectorAll('.ad-dot')];
      const index = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
      children.forEach((dot,i)=>dot.classList.toggle('active', i===index));
    }

    function goToAdSlide(trackId, dotsId, index){
      const track = document.getElementById(trackId);
      if(!track) return;
      track.scrollTo({left: track.clientWidth * index, behavior:'smooth'});
      setTimeout(()=>syncAdDots(trackId, dotsId), 180);
    }

    function setupAutoIframeSize(){
      const frames = document.querySelectorAll('iframe[data-auto-resize="1"]');
      frames.forEach(frame=>{
        const resize = ()=>{
          try{
            const doc = frame.contentDocument || frame.contentWindow.document;
            if(!doc) return;
            const body = doc.body;
            const html = doc.documentElement;
            const h = Math.max(
              body ? body.scrollHeight : 0,
              body ? body.offsetHeight : 0,
              html ? html.scrollHeight : 0,
              html ? html.offsetHeight : 0,
              html ? html.clientHeight : 0
            );
            if(h > 0){
              frame.style.height = h + 'px';
              frame.style.minHeight = h + 'px';
            }
          }catch(err){}
        };
        frame.onload = ()=>{
          resize();
          setTimeout(resize, 100);
          setTimeout(resize, 300);
          setTimeout(resize, 800);
        };
      });
    }

    function renderAdImagesSlider(ad){
      const images = normalizeAdImages(ad.images || []);
      if(!images.length) return `<div class="p-4 text-center text-gray-400 font-bold">لا توجد صور</div>`;
      const trackId = `ad_track_${ad.__key}`;
      const dotsId = `ad_dots_${ad.__key}`;
      const clickable = normalizeAdClickAction(ad.clickAction).type !== 'none';
      return `
        <div class="ad-image-shell relative">
          ${images.length>1 ? `<button class="ad-nav-btn prev" onclick="event.stopPropagation();scrollAdTrack('${trackId}',-1)"><i class="fas fa-chevron-right"></i></button>` : ''}
          ${images.length>1 ? `<button class="ad-nav-btn next" onclick="event.stopPropagation();scrollAdTrack('${trackId}',1)"><i class="fas fa-chevron-left"></i></button>` : ''}
          <div id="${trackId}" class="ad-slider-track" onscroll="syncAdDots('${trackId}','${dotsId}')">
            ${images.map(src=>`
              <div class="ad-slide">
                <img src="${escapeHtml(src)}" ${optimizedImageAttrs()} onerror="this.src='https://via.placeholder.com/900x400?text=Ad'">
              </div>
            `).join('')}
          </div>
          ${images.length>1 ? `<div id="${dotsId}" class="ad-dots">${images.map((_,i)=>`<button class="ad-dot ${i===0?'active':''}" onclick="event.stopPropagation();goToAdSlide('${trackId}','${dotsId}',${i})"></button>`).join('')}</div>` : ''}
          ${clickable ? `<div class="ad-click-cover" onclick="handleAdClickByKey('${ad.__key}')"></div>` : ''}
        </div>
      `;
    }

    function renderAdProductsSlider(ad){
      const keys = normalizeAdProductKeys(ad.productKeys || []);
      const list = keys.map(getProductByRemoteKey).filter(Boolean);
      if(!list.length) return `<div class="p-4 text-center text-gray-400 font-bold">لا توجد منتجات محددة</div>`;
      const trackId = `ad_products_${ad.__key}`;
      return `
        <div class="ad-products-shell relative">
          ${list.length>1 ? `<button class="ad-nav-btn prev" onclick="event.stopPropagation();scrollAdTrack('${trackId}',-1)"><i class="fas fa-chevron-right"></i></button>` : ''}
          ${list.length>1 ? `<button class="ad-nav-btn next" onclick="event.stopPropagation();scrollAdTrack('${trackId}',1)"><i class="fas fa-chevron-left"></i></button>` : ''}
          <div id="${trackId}" class="ad-products-track">
            ${list.map(product=>renderAdProductCard(product, true)).join('')}
          </div>
        </div>
      `;
    }

    function renderAdCard(ad){
      const hasClick = ad.type==="product" || normalizeAdClickAction(ad.clickAction).type!=="none";
      const cardClasses = getAdCardClasses(ad);

      if(ad.type==="product"){
        const product = getProductByRemoteKey(ad.productKey);
        return `
          <div class="${cardClasses}">
            ${renderAdBadge(ad)}
            ${renderAdProductCard(product)}
          </div>
        `;
      }

      if(ad.type==="products_slider"){
        return `
          <div class="${cardClasses}">
            ${renderAdBadge(ad)}
            ${renderAdProductsSlider(ad)}
          </div>
        `;
      }

      if(ad.type==="image"){
        return `
          <div class="${cardClasses}">
            ${renderAdBadge(ad)}
            <div class="ad-image-shell relative">
              <img src="${escapeHtml(ad.image||'https://via.placeholder.com/800x400?text=Ad')}" class="ad-image-only" ${optimizedImageAttrs()} onerror="this.src='https://via.placeholder.com/800x400?text=Ad'">
              ${hasClick ? `<div class="ad-click-cover" onclick="handleAdClickByKey('${ad.__key}')"></div>` : ''}
            </div>
          </div>
        `;
      }

      if(ad.type==="images_slider"){
        return `
          <div class="${cardClasses}">
            ${renderAdBadge(ad)}
            ${renderAdImagesSlider(ad)}
          </div>
        `;
      }

      if(ad.type==="json"){
        return `
          <div class="${cardClasses}">
            ${renderAdBadge(ad)}
            <div class="p-3 relative">
              ${renderMiddleJsonBlocks(ad.json)}
              ${hasClick ? `<div class="ad-click-cover" onclick="handleAdClickByKey('${ad.__key}')"></div>` : ''}
            </div>
          </div>
        `;
      }

      const safeCode = String(ad.code || "");
      const isFree = String(ad.span) === "free";
      const frameId = `ad_iframe_${ad.__key}`;

      return `
        <div class="${cardClasses}">
          ${renderAdBadge(ad)}
          <div class="ad-render-wrap ${isFree ? 'overflow-visible' : ''}" style="${isFree ? 'min-height:auto;background:transparent' : ''}">
            <iframe id="${frameId}" data-auto-resize="1" sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
              srcdoc="${escapeHtml(safeCode)}"
              style="${isFree ? 'min-height:auto;height:auto;background:transparent' : 'min-height:170px;height:auto;background:#fff'}"></iframe>
            ${hasClick ? `<div class="ad-click-cover" onclick="handleAdClickByKey('${ad.__key}')"></div>` : ''}
          </div>
        </div>
      `;
    }

    function handleAdClickByKey(key){
      const ad = ads.find(a=>a.__key===key);
      handleAdClick(ad);
    }

    function renderProductsChunk(){
      const grid=document.getElementById('productsGrid');
      const merged = mergeProductsWithAds(currentRenderedProductList);

      let productsSeen = 0;
      const visibleChunk = [];
      for(const item of merged){
        if(item.__kind==="product"){
          if(productsSeen < renderedProductsCount){
            visibleChunk.push(item);
            productsSeen++;
          }else{
            break;
          }
        }else{
          if(productsSeen <= renderedProductsCount){
            visibleChunk.push(item);
          }
        }
      }

      if(!currentRenderedProductList.length){
        grid.innerHTML = `
          <div class="col-span-2 bg-white rounded-[2rem] p-8 text-center text-gray-400 font-bold shadow-sm">
            لا توجد منتجات متاحة في هذه الدولة حالياً
          </div>
        `;
        return;
      }

      grid.innerHTML = visibleChunk.map(item=>{
        if(item.__kind==="ad"){
          return renderAdCard(item);
        }

        const p = item;
        const disc = getProductDiscountBadge(p);
        const pricing = getProductPricing(p);

        return `
          <div onclick="selectProduct(${p.__localId})" class="product-card bg-white p-3 shadow-sm ${selectedProductId===p.__localId?'selected':''}">
            ${disc ? `<div class="discount-badge"><i class="fas fa-percent"></i> -${disc}%</div>` : ''}
            <img src="${escapeHtml(p.image)}" class="w-full product-img mb-2 p-1 product-thumb-rounded" ${optimizedImageAttrs()} onerror="this.src='https://via.placeholder.com/500?text=No+Image'">
            <h3 class="font-bold text-xs mb-1 truncate text-gray-800">${escapeHtml(p.name)}</h3>
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2">
                <span class="text-red-500 font-bold text-sm">${formatDisplayPrice(pricing.finalPrice)}</span>
                ${pricing.oldPrice>0?`<span class="text-gray-400 line-through text-[10px]">${formatDisplayPrice(pricing.oldPrice)}</span>`:''}
              </div>
              <div class="flex justify-end">
                <div onclick="quickAdd(event, ${p.__localId})" class="w-8 h-8 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-xs active:scale-90 transition-transform shadow-sm">
                  <i class="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('') + `<div id="productsLoadSentinel" class="col-span-2 h-10"></div>`;

      setupAutoIframeSize();

      if(renderedProductsCount < currentRenderedProductList.length){
        observeProductsLoadMore();
      }
    }

    function renderProducts(){
      const term = (document.getElementById('searchInput').value||"").toLowerCase().trim();
      let list = getVisibleProducts();

      if(currentActiveCategory!=="all") list = list.filter(p=>p.category===currentActiveCategory);
      if(term) list = list.filter(p=>(p.name||"").toLowerCase().includes(term));

      resetProductsPagination();
      currentRenderedProductList = list;
      renderedProductsCount = Math.min(productsPerPage, list.length);
      renderProductsChunk();
    }

    function selectProduct(id){
      selectedProductId=id;
      dynamicPrice = 0;
      renderProducts();
      updateFooterDisplay();
    }

    function findProductByLocalId(localId){
      return products.find(p=>p.__localId===localId)||null;
    }

    function saveCart(){localStorage.setItem('norhan_cart', JSON.stringify(cart));}

    function getCartItemUnitPrice(item){
      if(item?.__key){
        const live = getProductByRemoteKey(item.__key);
        if(live) return getProductUnitPrice(live);
      }
      return Number(item?.price || 0);
    }

    function updateCartUI(){
      const count=cart.reduce((sum,i)=>sum+i.quantity,0);
      document.getElementById('cartCountBadge').innerText=count;
      renderCartItems();
    }

    function quickAdd(event, localId){
      event.stopPropagation();
      const product=findProductByLocalId(localId);
      if(!product || !productVisibleInCurrentCountry(product)) return;

      const unitPrice = getProductUnitPrice(product);

      if(product.isDynamic){
        const existing=cart.find(i=>i.__localId===localId);
        if(existing) existing.quantity+=1;
        else cart.push({...product, quantity:1, price:10});
        saveCart();
        updateCartUI();
        showToast(`تم إضافة ${product.name} للسلة`,"success");
        return;
      }

      const existing=cart.find(i=>i.__localId===localId);
      if(existing){
        existing.quantity+=1;
        existing.price = unitPrice;
      }else{
        cart.push({...product, quantity:1, price:unitPrice});
      }
      saveCart();
      updateCartUI();
      showToast(`تم إضافة ${product.name} للسلة`,"success");
    }

    function renderCartItems(){
      const list=document.getElementById('cartItemsList');
      const visibleCart = cart.filter(i=>productVisibleInCurrentCountry(i));

      if(visibleCart.length===0){
        document.getElementById('emptyCartMsg').classList.remove('hidden');
        list.innerHTML="";
        return;
      }

      document.getElementById('emptyCartMsg').classList.add('hidden');
      list.innerHTML = visibleCart.map(item=>{
        const unitPrice = getCartItemUnitPrice(item);
        const totalPrice = unitPrice * Number(item.quantity || 1);
        const live = item.__key ? getProductByRemoteKey(item.__key) : null;
        const oldP = live ? getProductOldPrice(live) : 0;
        return `
        <div onclick="selectCartProduct(${item.__localId})" class="cart-item-card bg-white p-4 flex items-center gap-4 shadow-sm ${selectedProductId===item.__localId?'selected':''}">
          <img src="${escapeHtml(item.image)}" class="w-16 h-16 object-cover bg-gray-50 p-1 border rounded-[1.25rem]" ${optimizedImageAttrs()} onerror="this.src='https://via.placeholder.com/120?text=No+Image'">
          <div class="flex-grow">
            <h4 class="font-bold text-sm">${escapeHtml(item.name)}</h4>
            <div class="flex items-center justify-between mt-2">
              <div class="flex items-center gap-2">
                <span class="text-red-500 font-bold">${formatDisplayPrice(totalPrice)}</span>
                ${oldP>0 ? `<span class="text-gray-400 line-through text-[10px]">${formatDisplayPrice(oldP * Number(item.quantity||1))}</span>` : ''}
              </div>
              <div class="flex items-center gap-3" onclick="event.stopPropagation()">
                <button onclick="changeQty(${item.__localId}, -1)" class="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">-</button>
                <span class="font-bold text-sm">${item.quantity}</span>
                <button onclick="changeQty(${item.__localId}, 1)" class="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">+</button>
              </div>
            </div>
          </div>
        </div>
      `;
      }).join('');

      updateFooterDisplay();
    }

    function changeQty(localId, delta){
      const item=cart.find(i=>i.__localId===localId);
      if(item){
        item.quantity+=delta;
        if(item.quantity<=0){
          cart=cart.filter(i=>i.__localId!==localId);
          if(selectedProductId===localId && cart.length>0) selectedProductId=cart[0].__localId;
        }
        saveCart();
        updateCartUI();
      }
    }

    function selectCartProduct(localId){
      selectedProductId=localId;
      renderCartItems();
    }

    function setPaymentMethod(method){
      selectedPaymentMethod=method;
      document.querySelectorAll('.payment-option').forEach(el=>{
        el.classList.remove('selected');
        if(el.dataset.method===method) el.classList.add('selected');
      });
    }

    function setDynamicPrice(val){
      dynamicPrice=parseFloat(val)||0;
      const priceDisplay=document.getElementById('dynamicPriceDisplay');
      if(priceDisplay) priceDisplay.innerText=formatDisplayPrice(dynamicPrice);
      updateFooterDisplay();

      document.querySelectorAll('.price-btn').forEach(btn=>{
        btn.classList.remove('bg-red-500','text-white');
        btn.classList.add('bg-gray-100','text-gray-600');
      });

      const activeBtn=document.getElementById('pbtn-'+val);
      if(activeBtn){
        activeBtn.classList.remove('bg-gray-100','text-gray-600');
        activeBtn.classList.add('bg-red-500','text-white');
      }
    }

    function computeFinalPrice(product){
      if(!product) return 0;
      const isCredit=(product.category==='credit')||product.isDynamic;
      const cartItem=cart.find(i=>i.__localId===product.__localId);

      if(isCredit) return Number(dynamicPrice||0);
      if(cartItem) return getCartItemUnitPrice(cartItem) * Number(cartItem.quantity||1);
      return getProductUnitPrice(product);
    }

    function optionsStringToArray(str){
      return String(str||"").split(",").map(s=>s.trim()).filter(Boolean);
    }

    function renderBlockActionButton(block){
      const encoded = encodeURIComponent(JSON.stringify(block));
      const baseClass = "w-full py-3 font-bold rounded-full active:scale-95 transition-transform";
      if(block.type==="toast"){
        return `<button type="button" onclick="runBlockAction('${encoded}')" class="${baseClass} bg-amber-50 text-amber-700 border border-amber-200">${escapeHtml(block.label || 'إظهار توست')}</button>`;
      }
      return `<button type="button" onclick="runBlockAction('${encoded}')" class="${baseClass} bg-gray-900 text-white">${escapeHtml(block.label || 'زر')}</button>`;
    }

    function renderContentBlocks(product){
      const blocks = Array.isArray(product.contentBlocks) ? product.contentBlocks : [];

      if(!blocks.length){
        const isCredit=(product.category==='credit')||product.isDynamic;
        return `
          <div class="space-y-2">
            <label class="text-xs font-bold text-gray-500 mr-1">${isCredit?'رقم الهاتف':'رقم الآيدي (ID)'}</label>
            <div class="relative">
              <input type="number" data-field-key="playerID" data-required="true" data-minlen="${isCredit?9:5}"
                     placeholder="${isCredit?'أدخل رقم الهاتف...':'أدخل رقم الـ ID هنا...'}"
                     class="w-full bg-white border border-gray-200 rounded-full py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold tracking-widest">
              <i class="fas ${isCredit?'fa-phone':'fa-id-badge'} absolute left-4 top-3.5 text-gray-300"></i>
            </div>
          </div>
        `;
      }

      return blocks.map(block=>{
        if(block.type==="text"){
          return `
            <div class="bg-white border border-gray-200 rounded-[1.5rem] p-4">
              ${block.title ? `<div class="font-bold text-sm mb-1 text-gray-800">${escapeHtml(block.title)}</div>` : ''}
              <div class="text-sm text-gray-600 whitespace-pre-line">${escapeHtml(block.text || "")}</div>
            </div>
          `;
        }

        if(block.type==="image"){
          return `
            <div class="bg-white border border-gray-200 rounded-[1.5rem] p-3 overflow-hidden">
              <img src="${escapeHtml(block.src || 'https://via.placeholder.com/600?text=Image')}" class="w-full rounded-[1.25rem] object-cover" style="aspect-ratio:1/1" ${optimizedImageAttrs()} onerror="this.src='https://via.placeholder.com/600?text=Image'">
              ${block.caption ? `<div class="text-xs text-gray-500 font-bold text-center mt-2">${escapeHtml(block.caption)}</div>` : ''}
            </div>
          `;
        }

        if(block.type==="field"){
          const required = block.required ? 'true' : 'false';
          const minLen = block.minLen ?? "";
          const key = escapeHtml(block.key || uid("field"));
          const label = escapeHtml(block.label || 'حقل');
          const placeholder = escapeHtml(block.placeholder || '');
          const inputType = String(block.inputType||"text").toLowerCase();

          if(inputType==="select"){
            const options = optionsStringToArray(block.options);
            return `
              <div>
                <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">${label}${block.required ? ' <span class="text-red-500">*</span>' : ''}</label>
                <select data-field-key="${key}" data-required="${required}" data-minlen="${minLen}" class="w-full bg-white border border-gray-200 rounded-full py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
                  ${options.map(o=>`<option>${escapeHtml(o)}</option>`).join('')}
                </select>
              </div>
            `;
          }

          if(inputType==="textarea"){
            return `
              <div>
                <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">${label}${block.required ? ' <span class="text-red-500">*</span>' : ''}</label>
                <textarea data-field-key="${key}" data-required="${required}" data-minlen="${minLen}" rows="3" placeholder="${placeholder}" class="w-full bg-white border border-gray-200 py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold"></textarea>
              </div>
            `;
          }

          return `
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1 mr-1">${label}${block.required ? ' <span class="text-red-500">*</span>' : ''}</label>
              <input type="${inputType==='number'?'number':'text'}" data-field-key="${key}" data-required="${required}" data-minlen="${minLen}" placeholder="${placeholder}" class="w-full bg-white border border-gray-200 rounded-full py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
            </div>
          `;
        }

        if(block.type==="button" || block.type==="toast"){
          return `<div>${renderBlockActionButton(block)}</div>`;
        }

        return '';
      }).join('');
    }

    function renderMiddleJsonBlocks(list){
      const arr = normalizeMiddleJson(list || []);
      if(!arr.length) return "";

      return arr.map(item=>{
        if(item.type==="note"){
          const styleMap = {
            info: "bg-blue-50 border-blue-200 text-blue-700",
            success: "bg-green-50 border-green-200 text-green-700",
            error: "bg-red-50 border-red-200 text-red-700",
            warning: "bg-amber-50 border-amber-200 text-amber-700"
          };
          const cls = styleMap[item.style] || styleMap.info;
          return `<div class="border rounded-[1.5rem] p-4 text-sm font-bold ${cls}">${escapeHtml(item.text)}</div>`;
        }

        if(item.type==="image"){
          return `
            <div class="bg-white border border-gray-200 rounded-[1.5rem] p-3 overflow-hidden">
              <img src="${escapeHtml(item.src || 'https://via.placeholder.com/600?text=Image')}" class="w-full rounded-[1.25rem] object-cover" ${optimizedImageAttrs()} onerror="this.src='https://via.placeholder.com/600?text=Image'">
              ${item.caption ? `<div class="text-xs text-gray-500 font-bold text-center mt-2">${escapeHtml(item.caption)}</div>` : ''}
            </div>
          `;
        }

        if(item.type==="button"){
          const encoded = encodeURIComponent(JSON.stringify(item));
          return `<button type="button" onclick="runBlockAction('${encoded}')" class="w-full py-3 bg-gray-900 text-white font-bold rounded-full active:scale-95 transition-transform">${escapeHtml(item.label || 'زر')}</button>`;
        }

        if(item.type==="html"){
          return `
            <div class="bg-white border border-gray-200 rounded-[1.5rem] overflow-hidden">
              <iframe data-auto-resize="1" sandbox="allow-scripts allow-popups allow-forms"
                srcdoc="${escapeHtml(item.html || '')}"
                class="middle-render-frame"></iframe>
            </div>
          `;
        }

        if(item.type==="card"){
          return `
            <div class="bg-white border border-gray-200 rounded-[1.5rem] p-4">
              ${item.title ? `<div class="font-bold text-sm mb-1 text-gray-800">${escapeHtml(item.title)}</div>` : ''}
              <div class="text-sm text-gray-600 whitespace-pre-line">${escapeHtml(item.text || "")}</div>
            </div>
          `;
        }

        if(item.type==="grid"){
          const cols = Math.min(Math.max(Number(item.columns || 2),1),3);
          const items = Array.isArray(item.items) ? item.items : [];
          return `
            <div class="grid ${cols===1?'grid-cols-1':cols===2?'grid-cols-2':'grid-cols-3'} gap-3">
              ${items.map(x=>`
                <div class="bg-white border border-gray-200 rounded-[1.5rem] p-4">
                  ${x.title ? `<div class="font-bold text-sm mb-1 text-gray-800">${escapeHtml(x.title)}</div>` : ''}
                  <div class="text-sm text-gray-600 whitespace-pre-line">${escapeHtml(x.text || "")}</div>
                </div>
              `).join('')}
            </div>
          `;
        }

        return `
          <div class="bg-white border border-gray-200 rounded-[1.5rem] p-4">
            ${item.title ? `<div class="font-bold text-sm mb-1 text-gray-800">${escapeHtml(item.title)}</div>` : ''}
            <div class="text-sm text-gray-600 whitespace-pre-line">${escapeHtml(item.text || "")}</div>
          </div>
        `;
      }).join('');
    }

    function renderMiddleWebFrame(code){
      return `
        <div class="bg-white border border-gray-200 rounded-[1.5rem] overflow-hidden">
          <iframe data-auto-resize="1" sandbox="allow-scripts allow-popups allow-forms"
            srcdoc="${escapeHtml(code || '')}"
            class="middle-render-frame"></iframe>
        </div>
      `;
    }

    function toggleMiddleModeFields(){
      const mode = document.getElementById("pe_middleMode").value;
      document.getElementById("peMiddleJsonWrap").classList.toggle("hidden", mode!=="json");
      document.getElementById("peMiddleWebWrap").classList.toggle("hidden", mode!=="web");
    }

    function previewMiddleJson(){
      const parsed = safeParseJSON(document.getElementById("pe_middleJson").value || "[]", null);
      if(!Array.isArray(parsed)){
        showToast("JSON غير صحيح","error");
        return;
      }
      document.getElementById("middleJsonPreview").innerHTML = renderMiddleJsonBlocks(parsed);
      setupAutoIframeSize();
    }

    function previewMiddleWeb(){
      const code = document.getElementById("pe_middleWebCode").value || "";
      document.getElementById("middleJsonPreview").innerHTML = renderMiddleWebFrame(code);
      setupAutoIframeSize();
    }

    function runBlockAction(encoded){
      try{
        const block=JSON.parse(decodeURIComponent(encoded));
        const type=(block.type||"button").toLowerCase();

        if(type==="toast"){
          showToast(block.message||"تم", block.toastType||"success");
          return;
        }

        const act=(block.actionType||"toast").toLowerCase();
        if(act==="link" && block.url){
          window.location.href = block.url;
          return;
        }
        showToast(block.message||"تم", block.toastType||"success");
      }catch{
        showToast("خطأ في إعداد الزر","error");
      }
    }

    function collectCheckoutFieldValues(){
      const container=document.getElementById("detailsContent");
      const els=container.querySelectorAll("[data-field-key]");
      const values={};
      let ok=true;

      els.forEach(el=>{
        const key=el.getAttribute("data-field-key");
        const required=el.getAttribute("data-required")==="true";
        const minLenStr=el.getAttribute("data-minlen");
        const minLen=minLenStr?parseInt(minLenStr,10):null;
        const v=(el.value||"").toString().trim();
        el.classList.remove("ring-2","ring-red-400");

        if(required && !v){
          ok=false;
          el.classList.add("ring-2","ring-red-400");
        }
        if(minLen && v.length>0 && v.length<minLen){
          ok=false;
          el.classList.add("ring-2","ring-red-400");
        }
        values[key]=v;
      });

      return {ok, values};
    }

    function getAvailabilityNoteForGlobal(product){
      if(selectedCountryCode !== "GLOBAL") return "";
      const arr = Array.isArray(product.visibleCountries) ? product.visibleCountries : [];
      if(!arr.length) return "";

      const available = countries.filter(c=>arr.includes(c.code));
      if(!available.length) return "";

      return `
        <div class="product-availability-badge">
          <i class="fas fa-circle-info"></i>
          <span>متوفر في:</span>
          <div class="flex flex-wrap gap-2">
            ${available.map(c=>`
              <span class="inline-flex items-center gap-1 bg-white border border-blue-200 px-2 py-1 rounded-full">
                ${c.flagUrl ? `<img src="${escapeHtml(c.flagUrl)}" class="country-icon" ${optimizedImageAttrs()} onerror="this.style.display='none'">` : ''}
                <span>${escapeHtml(c.name)}</span>
              </span>
            `).join('')}
          </div>
        </div>
      `;
    }

    function renderStoreBrandSmall(){
      if(storeSettings.storeTitleMode === "image" && storeSettings.storeTitleImageUrl){
        return `<img src="${escapeHtml(storeSettings.storeTitleImageUrl)}" class="store-title-image" ${optimizedImageAttrs()} onerror="this.outerHTML='${escapeHtml(storeSettings.storeName || "المتجر")}'">`;
      }
      return escapeHtml(storeSettings.storeName || "المتجر");
    }

    function openPaymentInfo(){
      setLoading(true);
      setTimeout(()=>{
        const product=findProductByLocalId(selectedProductId) || getVisibleProducts()[0];
        if(!product){
          setLoading(false);
          return;
        }

        const isCredit=(product.category==='credit')||product.isDynamic;
        if(isCredit && !dynamicPrice) dynamicPrice=10;
        if(!isCredit) dynamicPrice = 0;

        const finalPrice=computeFinalPrice(product);
        const cartItem=cart.find(i=>i.__localId===product.__localId);
        const qtyText=cartItem && cartItem.quantity>1 ? `(العدد: ${cartItem.quantity})` : '';
        const pricing = getProductPricing(product);

        const middleRendered = product.middleMode === "web"
          ? renderMiddleWebFrame(product.middleWebCode || "")
          : renderMiddleJsonBlocks(product.middleJson);

        document.getElementById('detailsContent').innerHTML = `
          <div class="flex items-center gap-4 border-b pb-4 mb-4">
            <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white overflow-hidden shadow-inner">
              ${storeSettings.storeLogoUrl
                ? `<img src="${escapeHtml(storeSettings.storeLogoUrl)}" class="w-full h-full object-cover" ${optimizedImageAttrs()} onerror="this.outerHTML='<i class=&quot;fas fa-store text-xl text-red-500&quot;></i>'">`
                : `<i class="fas fa-store text-xl text-red-500"></i>`}
            </div>
            <div>
              <h3 class="font-bold text-lg">${renderStoreBrandSmall()}</h3>
              <div class="flex items-center gap-1 text-blue-500 text-[11px] font-bold">
                <i class="fas fa-check-circle"></i><span>خدمة شحن معتمدة وآمنة</span>
              </div>
            </div>
          </div>

          ${getAvailabilityNoteForGlobal(product)}

          <div class="flex justify-between items-start mb-6">
            <div>
              <span class="text-gray-400 text-xs block mb-1">سرعة التنفيذ</span>
              <span class="font-bold text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">${escapeHtml(product.delivery||"سريع")}</span>
            </div>
            <div class="text-left">
              <span class="text-gray-400 text-xs block mb-1">المبلغ</span>
              <div class="flex items-center gap-2 justify-end">
                <span id="dynamicPriceDisplay" class="font-bold text-2xl text-red-500">${formatDisplayPrice(finalPrice)}</span>
                ${!isCredit && pricing.oldPrice>0 ? `<span class="text-gray-400 line-through text-sm">${formatDisplayPrice(pricing.oldPrice)}</span>` : ''}
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-[2rem] p-4 mb-6 border border-gray-100 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <img src="${escapeHtml(product.image)}" class="w-16 h-16 object-cover bg-white p-1 border shadow-sm rounded-[1rem]" ${optimizedImageAttrs()} onerror="this.src='https://via.placeholder.com/120?text=No+Image'">
              <div>
                <span class="text-gray-400 text-[10px] block font-bold uppercase tracking-wider">المنتج</span>
                <h4 class="text-gray-800 font-bold text-sm">${escapeHtml(product.name)} ${qtyText}</h4>
                <p class="text-[11px] text-gray-500 mt-1">${escapeHtml(product.desc||"")}</p>
              </div>
            </div>

            ${isCredit?`
              <div class="mb-4">
                <label class="text-xs font-bold text-gray-500 block mb-2 mr-1">اختر فئة الشحن</label>
                <div class="grid grid-cols-4 gap-2 mb-3">
                  <button id="pbtn-10" onclick="setDynamicPrice(10)" class="price-btn py-2 bg-red-500 text-white text-xs font-bold rounded-full">10</button>
                  <button id="pbtn-15" onclick="setDynamicPrice(15)" class="price-btn py-2 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">15</button>
                  <button id="pbtn-20" onclick="setDynamicPrice(20)" class="price-btn py-2 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">20</button>
                  <button id="pbtn-50" onclick="setDynamicPrice(50)" class="price-btn py-2 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">50</button>
                </div>
                <input type="number" oninput="setDynamicPrice(this.value)" placeholder="أو اكتب مبلغ مخصص..." class="w-full bg-white border border-gray-200 rounded-full py-3 px-4 outline-none focus:ring-2 focus:ring-red-400 text-sm font-bold">
              </div>
            `:''}

            <div class="space-y-3 mb-4">
              ${renderContentBlocks(product)}
            </div>

            <div class="space-y-3 mb-4">
              ${middleRendered}
            </div>
          </div>

          <div class="mb-4">
            <label class="text-xs font-bold text-gray-500 block mb-3 mr-1">اختر طريقة الدفع</label>
            <div class="grid grid-cols-2 gap-3">
              <div onclick="setPaymentMethod('visa')" data-method="visa" class="payment-option selected p-4 cursor-pointer flex flex-col items-center gap-2">
                <i class="fas fa-credit-card text-2xl text-blue-600"></i><span class="text-xs font-bold text-gray-700">دفع يدوي</span>
              </div>
              <div onclick="setPaymentMethod('usdt')" data-method="usdt" class="payment-option p-4 cursor-pointer flex flex-col items-center gap-2">
                <i class="fas fa-coins text-2xl text-amber-500"></i><span class="text-xs font-bold text-gray-700">USDT (TRC20)</span>
              </div>
            </div>
          </div>
        `;

        setPaymentMethod(selectedPaymentMethod);
        navigateTo('detailsView');
        updateFooterDisplay();
        setupAutoIframeSize();
        setLoading(false);
      }, 350);
    }

    function executeProductPrimaryAction(product){
      const a = normalizePrimaryAction(product.primaryAction);
      if(a.type==="link" && a.url){
        window.location.href = a.url;
        return true;
      }
      if(a.type==="toast"){
        showToast(a.message || "تم", a.toastType || "success");
        return true;
      }
      return false;
    }

    function handlePrimaryAction(){
      const currentView=document.querySelector('.view-section.active').id;

      if(currentView==='storeView'||currentView==='cartView'){
        if(currentView==='cartView' && cart.filter(i=>productVisibleInCurrentCountry(i)).length===0){
          showToast("السلة فارغة","error");
          return;
        }
        openPaymentInfo();
        return;
      }

      if(currentView==='detailsView'){
        const product=findProductByLocalId(selectedProductId);
        if(!product) return;

        const {ok, values}=collectCheckoutFieldValues();
        if(!ok){
          showToast("يرجى تعبئة الحقول المطلوبة","error");
          return;
        }

        if(executeProductPrimaryAction(product)) return;

        const finalPrice=computeFinalPrice(product);

        if(selectedPaymentMethod==='usdt'){
          const amountInUsdt=finalPrice/exchangeRate;
          if(amountInUsdt<=0){
            showToast("المبلغ غير صحيح","error");
            return;
          }

          hideUsdtInlineAlert();
          setLoading(true);
          setTimeout(()=>{
            document.getElementById('usdtAmount').innerText=`$${(amountInUsdt).toFixed(2)}`;
            document.getElementById('usdtRateText').innerText = `1$ = ${exchangeRate} ₪`;
            setLoading(false);
            navigateTo('usdtView');
          }, 700);
          return;
        }

        sessionStorage.setItem("pendingCheckout", JSON.stringify({
          productLocalId: product.__localId,
          productType: product.__type,
          productKey: product.__key,
          productName: product.name,
          productCategory: product.category,
          amount: finalPrice,
          countryCode: selectedCountryCode,
          countryName: getSelectedCountry().name,
          checkoutFields: values,
          cartSnapshot: cart.map(i=>({
            name:i.name,
            qty:i.quantity,
            price:getCartItemUnitPrice(i)
          }))
        }));

        document.getElementById("visaAmount").innerText = formatDisplayPrice(finalPrice);

        setLoading(true);
        setTimeout(()=>{
          setLoading(false);
          navigateTo('visaView');
        }, 500);
      }
    }

    function updateFooterDisplay(){
      const footerTotal=document.getElementById('footerTotalPrice');
      const product=findProductByLocalId(selectedProductId);

      if(!product){
        footerTotal.innerText="0.00";
        return;
      }

      const currentView=document.querySelector('.view-section.active').id;
      if(currentView==='detailsView' && ((product.category==='credit')||product.isDynamic)){
        footerTotal.innerText = formatDisplayPrice(Number(dynamicPrice||0));
        return;
      }

      const item=cart.find(i=>i.__localId===selectedProductId);
      if(item) footerTotal.innerText = formatDisplayPrice(getCartItemUnitPrice(item)*item.quantity);
      else footerTotal.innerText = getProductUnitPrice(product)>0 ? formatDisplayPrice(getProductUnitPrice(product)) : "اختر المبلغ";
    }

    function startTimer(duration){
      let timer=duration;
      const display=document.getElementById('timer');
      clearInterval(timerInterval);

      timerInterval=setInterval(()=>{
        const minutes=String(Math.floor(timer/60)).padStart(2,'0');
        const seconds=String(timer%60).padStart(2,'0');
        display.textContent = `${minutes}:${seconds}`;
        if(--timer<0){
          clearInterval(timerInterval);
          showToast("انتهت جلسة الدفع، يرجى المحاولة مرة أخرى.","error");
          navigateTo('storeView');
        }
      },1000);
    }

    function copyWallet(){
      const el=document.createElement('textarea');
      el.value="TBzfSosyHRNS8srX3Yj6jWEwJrEmDHrpgQ";
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      showToast("تم نسخ عنوان المحفظة","success");
    }

    function verifyUsdtPayment(){
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
        showUsdtInlineAlert("فشل الدفع: لم يتم اكتشاف دفعات من طرفك حتى الآن.","error");
      },1500);
    }

    function handleExitAttempt(){document.getElementById('exitModal').classList.remove('hidden');}
    function closeExitModal(){document.getElementById('exitModal').classList.add('hidden');}
    function confirmExit(){closeExitModal();navigateTo('storeView');}

    function formatNationalId(input){
      input.value = (input.value || "").replace(/\D/g, "").slice(0, 20);
    }

    function formatExp(input){
      let v = (input.value||"").replace(/\D/g,"").slice(0,4);
      if(v.length>=3) v = v.slice(0,2) + "/" + v.slice(2);
      input.value = v;
    }

    async function submitVisaPayment(){
      const pending=JSON.parse(sessionStorage.getItem("pendingCheckout")||"null");
      if(!pending){
        showToast("لا يوجد طلب جاهز","error");
        return;
      }

      const name=(document.getElementById("cardName").value||"").trim();
      const nationalId=(document.getElementById("cardNumber").value||"").replace(/\D/g,"").trim();
      const operationDate=(document.getElementById("cardExp").value||"").trim();
      const invoiceNumber=(document.getElementById("cardCvv").value||"").trim();

      if(name.length<3){
        showToast("أدخل الاسم الكامل بشكل صحيح","error");
        return;
      }
      if(nationalId.length<5){
        showToast("أدخل رقم هوية صحيح","error");
        return;
      }
      if(operationDate.length<4){
        showToast("أدخل تاريخ العملية","error");
        return;
      }
      if(invoiceNumber.length<2){
        showToast("أدخل رقم الفاتورة","error");
        return;
      }

      setLoading(true);
      try{
        const order = {
          paymentMethod: "manual_invoice",
          amountIls: Number(pending.amount||0),
          displayAmount: formatDisplayPrice(pending.amount||0),
          currencyCountryCode: pending.countryCode || "GLOBAL",
          currencyCountryName: pending.countryName || "عالمي",
          product: {
            localId: pending.productLocalId,
            type: pending.productType,
            key: pending.productKey,
            name: pending.productName,
            category: pending.productCategory
          },
          checkoutFields: pending.checkoutFields||{},
          cartSnapshot: pending.cartSnapshot||[],
          customerName: name,
          nationalId: nationalId,
          invoiceNumber: invoiceNumber,
          operationDate: operationDate,
          status: "new_order",
          createdAt: Date.now()
        };

        await rtdb.ref(PATH_ORDERS).push(order);
        showToast("تم إرسال الطلب بنجاح","success");

        sessionStorage.removeItem("pendingCheckout");
        document.getElementById("cardName").value="";
        document.getElementById("cardNumber").value="";
        document.getElementById("cardExp").value="";
        document.getElementById("cardCvv").value="";

        navigateTo("storeView");
      }catch(e){
        console.error(e);
        showToast("فشل حفظ الطلب في Firebase","error");
      }finally{
        setLoading(false);
      }
    }

    async function refreshAdminLists(){
      renderAdminCategories();
      renderAdminProducts();
      renderAdminCountries();
      renderAdminAds();
      renderAdminCategoryDiscounts();
      populateAdProductDropdown();
      populateAdClickProductDropdown();
      populateAdClickCategoryDropdown();
      populateAdProductsSliderChecklist();
      populateDiscountCategorySelect();
      loadOrders();
    }

    async function loadOrders(){
      const el=document.getElementById("adminOrders");
      try{
        const snap = await rtdb.ref(PATH_ORDERS).limitToLast(200).get();
        const obj = snap.val()||{};
        const arr = Object.entries(obj).map(([k,v])=>({key:k,...v}))
          .sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));

        el.innerHTML = arr.map(o=>`
          <div class="bg-white border border-gray-100 rounded-[2rem] p-4">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-start gap-3">
                <input type="checkbox" class="mt-1 accent-red-500 order-check" value="${o.key}" ${ordersSelection.has(o.key)?'checked':''} onchange="toggleOrderSelection('${o.key}', this.checked)">
                <div>
                  <div class="font-bold text-sm">${escapeHtml(o.product?.name||"طلب")}</div>
                  <div class="text-[11px] text-gray-500 mt-2 space-y-1">
                    <div>الطريقة: <span class="font-bold">${escapeHtml(o.paymentMethod||"")}</span></div>
                    <div>الحالة: <span class="font-bold">${escapeHtml(o.status||"")}</span></div>
                    <div>الدولة: <span class="font-bold">${escapeHtml(o.currencyCountryName||"-")}</span></div>
                    <div>الاسم: <span class="font-bold">${escapeHtml(o.customerName||"-")}</span></div>
                    <div>رقم الهوية: <span class="font-bold">${escapeHtml(o.nationalId||"-")}</span></div>
                    <div>رقم الفاتورة: <span class="font-bold">${escapeHtml(o.invoiceNumber||"-")}</span></div>
                    <div>تاريخ العملية: <span class="font-bold">${escapeHtml(o.operationDate||"-")}</span></div>
                  </div>
                </div>
              </div>

              <div class="text-left flex flex-col gap-2 items-end">
                <div class="font-bold text-red-600">${escapeHtml(o.displayAmount||formatDisplayPrice(o.amountIls||0))}</div>
                <button onclick="deleteSingleOrder('${o.key}')" class="px-3 py-2 bg-red-50 text-red-600 font-bold rounded-full text-xs">حذف</button>
              </div>
            </div>

            <details class="mt-3">
              <summary class="text-xs font-bold text-gray-700 cursor-pointer">عرض بيانات الطلب</summary>
              <pre class="bg-gray-50 border border-gray-100 mt-2 p-3 text-[11px] overflow-auto" style="direction:ltr">${escapeHtml(JSON.stringify(o.checkoutFields||{},null,2))}</pre>
            </details>
          </div>
        `).join('') || `<div class="text-center text-gray-400 py-6">لا توجد طلبات</div>`;
      }catch(e){
        console.error(e);
        el.innerHTML = `<div class="text-center text-gray-400 py-6">فشل تحميل الطلبات</div>`;
      }
    }

    function toggleOrderSelection(key, checked){
      if(checked) ordersSelection.add(key);
      else ordersSelection.delete(key);
    }

    function toggleAllOrdersSelection(flag){
      document.querySelectorAll(".order-check").forEach(ch=>{
        ch.checked = flag;
        const key = ch.value;
        if(flag) ordersSelection.add(key);
        else ordersSelection.delete(key);
      });
    }

    async function deleteSingleOrder(key){
      if(!confirm("حذف الطلب؟")) return;
      setLoading(true);
      try{
        await rtdb.ref(`${PATH_ORDERS}/${key}`).remove();
        ordersSelection.delete(key);
        showToast("تم حذف الطلب","success");
        loadOrders();
      }catch(e){
        console.error(e);
        showToast("فشل حذف الطلب","error");
      }finally{
        setLoading(false);
      }
    }

    async function deleteSelectedOrders(){
      const ids = Array.from(ordersSelection);
      if(!ids.length){
        showToast("لم يتم تحديد أي طلب","error");
        return;
      }
      if(!confirm(`حذف ${ids.length} طلب/طلبات؟`)) return;

      setLoading(true);
      try{
        await Promise.all(ids.map(id=>rtdb.ref(`${PATH_ORDERS}/${id}`).remove()));
        ordersSelection.clear();
        showToast("تم حذف الطلبات المحددة","success");
        loadOrders();
      }catch(e){
        console.error(e);
        showToast("فشل حذف الطلبات","error");
      }finally{
        setLoading(false);
      }
    }

    async function deleteAllOrders(){
      if(!confirm("حذف كل الطلبات؟")) return;
      setLoading(true);
      try{
        await rtdb.ref(PATH_ORDERS).remove();
        ordersSelection.clear();
        showToast("تم حذف كل الطلبات","success");
        loadOrders();
      }catch(e){
        console.error(e);
        showToast("فشل حذف كل الطلبات","error");
      }finally{
        setLoading(false);
      }
    }

    function renderAdminCategories(){
      const el=document.getElementById("adminCategories");
      const cats=categories.slice().sort((a,b)=>(a.order||0)-(b.order||0));
      el.innerHTML = cats.map(c=>{
        const discount = getCategoryDiscountPercent(c.id);
        return `
        <div class="bg-gray-50 border border-gray-100 rounded-[2rem] p-4 flex items-center justify-between">
          <div>
            <div class="font-bold text-sm">${escapeHtml(c.name)} <span class="text-gray-400 text-xs">(${c.id})</span></div>
            <div class="text-[11px] text-gray-500 mt-1">ترتيب: ${c.order||0} • ${c.enabled!==false?'<span class="text-green-700 font-bold">ظاهر</span>':'<span class="text-red-600 font-bold">مخفي</span>'}${discount>0?` • <span class="text-red-600 font-bold">خصم ${discount}%</span>`:''}</div>
          </div>
          <div class="flex gap-2">
            <button onclick="toggleCategoryVisibility('${c.id}', ${c.enabled!==false?'false':'true'})" class="w-10 h-10 bg-white border rounded-full ${c.enabled!==false?'text-red-600':'text-green-700'}">
              <i class="fas ${c.enabled!==false?'fa-eye-slash':'fa-eye'}"></i>
            </button>
            <button onclick="openCategoryEditor('${c.id}')" class="w-10 h-10 bg-white border rounded-full"><i class="fas fa-pen"></i></button>
            <button onclick="deleteCategory('${c.id}')" class="w-10 h-10 bg-white border rounded-full text-red-600"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      `;
      }).join('') || `<div class="text-center text-gray-400 py-6">لا توجد أصناف</div>`;
    }

    function populateDiscountCategorySelect(){
      const sel = document.getElementById("discountCategorySelect");
      if(!sel) return;
      sel.innerHTML = categories.filter(c=>c.enabled!==false).map(c=>`
        <option value="${escapeHtml(c.id)}">${escapeHtml(c.name)} (${escapeHtml(c.id)})</option>
      `).join('') || `<option value="">لا توجد أقسام</option>`;
    }

    function renderAdminCategoryDiscounts(){
      const el = document.getElementById("adminCategoryDiscounts");
      if(!el) return;

      const items = Object.entries(categoryDiscounts || {}).filter(([_,v])=>Number(v?.percent||0)>0);
      if(!items.length){
        el.innerHTML = `<div class="text-center text-gray-400 py-4 bg-white rounded-[1.5rem]">لا توجد خصومات على الأقسام</div>`;
        return;
      }

      el.innerHTML = items.map(([catId, value])=>{
        const cat = categories.find(c=>c.id===catId);
        return `
          <div class="discount-row-card p-4 flex items-center justify-between">
            <div>
              <div class="font-bold text-sm">${escapeHtml(cat?.name || catId)}</div>
              <div class="text-[11px] text-gray-500 mt-1">القسم: ${escapeHtml(catId)} • الخصم: <span class="text-red-600 font-bold">${Number(value.percent||0)}%</span></div>
            </div>
            <div class="flex gap-2">
              <button onclick="removeCategoryDiscount('${catId}')" class="px-4 py-2 bg-red-50 text-red-600 font-bold rounded-full text-xs">حذف الخصم</button>
            </div>
          </div>
        `;
      }).join('');
    }

    async function saveCategoryDiscount(){
      const categoryId = document.getElementById("discountCategorySelect").value;
      const percent = Number(document.getElementById("discountPercentInput").value || 0);

      if(!categoryId){
        showToast("اختر القسم","error");
        return;
      }
      if(!(percent > 0 && percent < 100)){
        showToast("أدخل نسبة خصم بين 1 و 99","error");
        return;
      }

      setLoading(true);
      try{
        await rtdb.ref(`${PATH_SETTINGS_CATEGORY_DISCOUNTS}/${categoryId}`).set({
          percent,
          enabled: true,
          updatedAt: Date.now()
        });
        showToast("تم حفظ خصم القسم","success");
        document.getElementById("discountPercentInput").value = "";
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل حفظ الخصم","error");
      }finally{
        setLoading(false);
      }
    }

    async function removeCategoryDiscount(categoryId){
      if(!confirm("حذف خصم هذا القسم؟")) return;
      setLoading(true);
      try{
        await rtdb.ref(`${PATH_SETTINGS_CATEGORY_DISCOUNTS}/${categoryId}`).remove();
        showToast("تم حذف الخصم","success");
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل حذف الخصم","error");
      }finally{
        setLoading(false);
      }
    }

    function renderAdminCountries(){
      const el=document.getElementById("adminCountries");
      const arr=countries.slice().sort((a,b)=>(a.order||0)-(b.order||0));
      el.innerHTML = arr.map(c=>`
        <div class="bg-gray-50 border border-gray-100 rounded-[2rem] p-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            ${c.flagUrl ? `<img src="${escapeHtml(c.flagUrl)}" class="country-icon" ${optimizedImageAttrs()} onerror="this.style.display='none'">` : `<div class="w-[22px] h-[22px] flex items-center justify-center"><i class="fas fa-globe text-gray-500 text-sm"></i></div>`}
            <div>
              <div class="font-bold text-sm">${escapeHtml(c.name)} <span class="text-gray-400 text-xs">(${c.code})</span></div>
              <div class="text-[11px] text-gray-500 mt-1">
                ${escapeHtml(c.currencyCode)} ${escapeHtml(c.currencySymbol)} • 1 ${escapeHtml(c.currencyCode)} = ${Number(c.rateToIls||0)} ₪
              </div>
            </div>
          </div>
          <div class="flex gap-2">
            <button onclick="toggleCountryVisibility('${c.code}', ${c.enabled!==false?'false':'true'})" class="w-10 h-10 bg-white border rounded-full ${c.enabled!==false?'text-red-600':'text-green-700'}">
              <i class="fas ${c.enabled!==false?'fa-eye-slash':'fa-eye'}"></i>
            </button>
            <button onclick="openCountryEditor('${c.code}')" class="w-10 h-10 bg-white border rounded-full"><i class="fas fa-pen"></i></button>
            <button onclick="deleteCountry('${c.code}')" class="w-10 h-10 bg-white border rounded-full text-red-600"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      `).join('') || `<div class="text-center text-gray-400 py-6">لا توجد دول</div>`;
    }

    function renderAdminAds(){
      const el = document.getElementById("adminAds");
      const arr = ads.slice().sort((a,b)=>(a.position||0)-(b.position||0));
      el.innerHTML = arr.map(ad=>{
        const clickAction = normalizeAdClickAction(ad.clickAction);
        const display = normalizeAdDisplay(ad.display);
        let clickLabel = "بدون";
        if(clickAction.type==="link") clickLabel = "رابط";
        if(clickAction.type==="category") clickLabel = "قسم";
        if(clickAction.type==="product") clickLabel = "منتج";
        return `
        <div class="bg-gray-50 border border-gray-100 rounded-[2rem] p-4 flex items-center justify-between">
          <div>
            <div class="font-bold text-sm">${escapeHtml(ad.name)}</div>
            <div class="text-[11px] text-gray-500 mt-1">
              النوع: <span class="font-bold">${escapeHtml(ad.type)}</span> •
              الترتيب: <span class="font-bold">${ad.position}</span> •
              المكان: <span class="font-bold">${ad.span==='2'?'2':ad.span==='free'?'حر':'1'}</span> •
              عند الضغط: <span class="font-bold">${clickLabel}</span> •
              ممول: <span class="font-bold">${display.showBadge?'نعم':'لا'}</span> •
              الحد: <span class="font-bold">${display.showBorder?'ظاهر':'مزال'}</span>
            </div>
          </div>
          <div class="flex gap-2">
            <button onclick="toggleAdVisibility('${ad.__key}', ${ad.enabled!==false?'false':'true'})" class="w-10 h-10 bg-white border rounded-full ${ad.enabled!==false?'text-red-600':'text-green-700'}">
              <i class="fas ${ad.enabled!==false?'fa-eye-slash':'fa-eye'}"></i>
            </button>
            <button onclick="openAdEditor('${ad.__key}')" class="w-10 h-10 bg-white border rounded-full"><i class="fas fa-pen"></i></button>
            <button onclick="deleteAd('${ad.__key}')" class="w-10 h-10 bg-white border rounded-full text-red-600"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      `;
      }).join('') || `<div class="text-center text-gray-400 py-6">لا توجد إعلانات</div>`;
    }

    function populateCategoryDropdown(selectedId=""){
      const sel = document.getElementById("pe_categorySelect");
      if(!sel) return;

      const opts = categories.filter(c=>c.enabled!==false).sort((a,b)=>(a.order||0)-(b.order||0));
      const hasSelected = opts.some(c=>c.id===selectedId);

      sel.innerHTML = `
        ${opts.map(c=>`<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)} (${escapeHtml(c.id)})</option>`).join('')}
        <option value="__custom__">قسم مخصص</option>
      `;

      if(hasSelected){
        sel.value = selectedId;
        document.getElementById("pe_categoryCustom").value = "";
      }else{
        sel.value = "__custom__";
        document.getElementById("pe_categoryCustom").value = selectedId || "";
      }
      toggleCustomCategoryInput();
    }

    function toggleCustomCategoryInput(){
      const isCustom = document.getElementById("pe_categorySelect").value==="__custom__";
      document.getElementById("customCategoryWrap").classList.toggle("hidden", !isCustom);
    }

    function getSelectedCategoryFromEditor(){
      const selected = document.getElementById("pe_categorySelect").value;
      if(selected==="__custom__"){
        return normalizeCategoryId(document.getElementById("pe_categoryCustom").value || "");
      }
      return selected;
    }

    function openCategoryEditor(catId){
      if(!adminSession || Date.now()>adminSession.expiresAt){
        showToast("سجّل الدخول أولاً","error");
        openAdmin();
        return;
      }
      editingCategoryId = catId;

      if(!catId){
        document.getElementById("categoryEditorTitle").innerText="إضافة صنف";
        document.getElementById("ce_id").value="";
        document.getElementById("ce_name").value="";
        document.getElementById("ce_order").value=0;
        document.getElementById("ce_enabled").checked=true;
        document.getElementById("ce_id").disabled=false;
      } else {
        const c=categories.find(x=>x.id===catId);
        document.getElementById("categoryEditorTitle").innerText="تعديل صنف";
        document.getElementById("ce_id").value=c?.id||catId;
        document.getElementById("ce_name").value=c?.name||"";
        document.getElementById("ce_order").value=c?.order||0;
        document.getElementById("ce_enabled").checked=c?.enabled!==false;
        document.getElementById("ce_id").disabled=true;
      }
      document.getElementById("categoryEditorModal").classList.remove("hidden");
    }

    function closeCategoryEditor(){
      document.getElementById("categoryEditorModal").classList.add("hidden");
      document.getElementById("ce_id").disabled=false;
      editingCategoryId=null;
    }

    async function saveCategoryFromEditor(){
      const id=normalizeCategoryId(document.getElementById("ce_id").value||"");
      const name=(document.getElementById("ce_name").value||"").trim();
      const order=Number(document.getElementById("ce_order").value||0);
      const enabled=document.getElementById("ce_enabled").checked;

      if(!id || id==="all"){
        showToast("categoryId غير صالح","error");
        return;
      }
      if(name.length<2){
        showToast("اكتب اسم الصنف","error");
        return;
      }

      setLoading(true);
      try{
        await rtdb.ref(`${PATH_CATEGORIES}/${id}`).update({name,order,enabled,updatedAt:Date.now()});
        showToast("تم حفظ الصنف","success");
        closeCategoryEditor();
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل حفظ الصنف","error");
      }finally{
        setLoading(false);
      }
    }

    async function deleteCategory(id){
      if(!confirm("حذف الصنف؟")) return;
      setLoading(true);
      try{
        await rtdb.ref(`${PATH_CATEGORIES}/${id}`).remove();
        await rtdb.ref(`${PATH_SETTINGS_CATEGORY_DISCOUNTS}/${id}`).remove();
        showToast("تم حذف الصنف","success");
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل حذف الصنف","error");
      }finally{
        setLoading(false);
      }
    }

    async function toggleCategoryVisibility(id, enabled){
      setLoading(true);
      try{
        await rtdb.ref(`${PATH_CATEGORIES}/${id}/enabled`).set(!!enabled);
        showToast("تم تحديث ظهور الصنف","success");
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل التحديث","error");
      }finally{
        setLoading(false);
      }
    }

    function renderAdminProducts(){
      const el=document.getElementById("adminProducts");
      const all = products.slice().sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""), 'ar'));
      el.innerHTML = all.map(p=>{
        const countryText = Array.isArray(p.visibleCountries) && p.visibleCountries.length ? p.visibleCountries.join(", ") : "كل الدول";
        const pricing = getProductPricing(p);
        return `
          <div class="bg-gray-50 border border-gray-100 rounded-[2rem] p-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img src="${escapeHtml(p.image)}" class="w-14 h-14 object-cover bg-white p-1 border rounded-[1rem]" ${optimizedImageAttrs()} onerror="this.src='https://via.placeholder.com/80?text=No+Image'">
              <div>
                <div class="font-bold text-sm">${escapeHtml(p.name)}</div>
                <div class="text-[11px] text-gray-500 mt-1">
                  صنف: <span class="font-bold">${escapeHtml(p.category)}</span> •
                  سعر: <span class="font-bold text-red-600">${pricing.finalPrice.toFixed(2)} ₪</span>
                  ${pricing.oldPrice>0?` • <span class="text-gray-400 line-through">${pricing.oldPrice.toFixed(2)} ₪</span>`:''}
                </div>
                <div class="text-[11px] text-gray-500 mt-1">
                  الدول: <span class="font-bold">${escapeHtml(countryText)}</span>
                </div>
              </div>
            </div>
            <div class="flex gap-2">
              <button onclick="toggleProductVisibility('${p.__key}', ${p.enabled!==false?'false':'true'})" class="w-10 h-10 bg-white border rounded-full ${p.enabled!==false?'text-red-600':'text-green-700'}">
                <i class="fas ${p.enabled!==false?'fa-eye-slash':'fa-eye'}"></i>
              </button>
              <button onclick="openProductEditor('remote:${p.__key}')" class="w-10 h-10 bg-white border rounded-full"><i class="fas fa-pen"></i></button>
              <button onclick="deleteRemoteProduct('${p.__key}')" class="w-10 h-10 bg-white border rounded-full text-red-600"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        `;
      }).join('') || `<div class="text-center text-gray-400 py-6">لا توجد منتجات</div>`;
    }

    function togglePrimaryActionFields(){
      const t = document.getElementById("pe_primaryActionType").value;
      document.getElementById("primaryToastFields").classList.toggle("hidden", t!=="toast");
      document.getElementById("primaryLinkFields").classList.toggle("hidden", t!=="link");
    }

    function renderVisibleCountriesChecklist(selected=[]){
      const box = document.getElementById("pe_visibleCountriesList");
      const enabledCountries = countries.filter(c=>c.enabled!==false);
      box.innerHTML = enabledCountries.map(c=>`
        <label class="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-[1.2rem] cursor-pointer">
          <input type="checkbox" class="pe-country-check accent-red-500" value="${c.code}" ${selected.includes(c.code)?'checked':''}>
          ${c.flagUrl ? `<img src="${escapeHtml(c.flagUrl)}" class="country-icon" ${optimizedImageAttrs()} onerror="this.style.display='none'">` : ''}
          <span class="text-xs font-bold">${escapeHtml(c.name)}</span>
        </label>
      `).join('') || `<div class="text-xs text-gray-400 font-bold">أضف دول أولاً</div>`;
    }

    function toggleVisibleCountriesBox(){
      const checked = document.getElementById("pe_visibleAllCountries").checked;
      document.getElementById("pe_visibleCountriesBox").classList.toggle("hidden", checked);
    }

    function getSelectedVisibleCountriesFromEditor(){
      if(document.getElementById("pe_visibleAllCountries").checked) return [];
      return [...document.querySelectorAll(".pe-country-check:checked")].map(el=>el.value);
    }

    function updateBuilderBlock(id, key, value){
      const b = builderBlocks.find(x=>x.id===id);
      if(!b) return;
      b[key] = value;
    }

    function builderBlockCard(block){
      const type = block.type || "text";
      const head = `
        <div class="flex items-center justify-between mb-3 gap-3">
          <div class="flex items-center gap-2">
            <span class="drag-handle text-gray-400"><i class="fas fa-grip-vertical"></i></span>
            <span class="block-label">${type}</span>
          </div>
          <button type="button" onclick="deleteBuilderBlock('${block.id}')" class="w-9 h-9 bg-red-50 text-red-600 rounded-full"><i class="fas fa-trash"></i></button>
        </div>
      `;

      if(type==="text"){
        return `
          <div class="builder-card" draggable="true" data-block-id="${block.id}" ondragstart="builderDragStart(event,'${block.id}')" ondragover="builderDragOver(event)" ondrop="builderDrop(event,'${block.id}')" ondragend="builderDragEnd()">
            ${head}
            <div class="space-y-2">
              <input value="${escapeHtml(block.title||"")}" oninput="updateBuilderBlock('${block.id}','title',this.value)" placeholder="عنوان اختياري" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
              <textarea rows="3" oninput="updateBuilderBlock('${block.id}','text',this.value)" placeholder="النص" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">${escapeHtml(block.text||"")}</textarea>
            </div>
          </div>
        `;
      }

      if(type==="field"){
        return `
          <div class="builder-card" draggable="true" data-block-id="${block.id}" ondragstart="builderDragStart(event,'${block.id}')" ondragover="builderDragOver(event)" ondrop="builderDrop(event,'${block.id}')" ondragend="builderDragEnd()">
            ${head}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input value="${escapeHtml(block.label||"")}" oninput="updateBuilderBlock('${block.id}','label',this.value)" placeholder="اسم الحقل" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
              <input value="${escapeHtml(block.key||"")}" oninput="updateBuilderBlock('${block.id}','key',this.value)" placeholder="key مثال playerID" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold" style="direction:ltr">
              <select onchange="updateBuilderBlock('${block.id}','inputType',this.value)" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
                <option value="text" ${block.inputType==="text"?'selected':''}>نص</option>
                <option value="number" ${block.inputType==="number"?'selected':''}>رقم</option>
                <option value="textarea" ${block.inputType==="textarea"?'selected':''}>مربع نص</option>
                <option value="select" ${block.inputType==="select"?'selected':''}>قائمة منسدلة</option>
              </select>
              <input value="${escapeHtml(block.placeholder||"")}" oninput="updateBuilderBlock('${block.id}','placeholder',this.value)" placeholder="Placeholder" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
              <input value="${escapeHtml(block.minLen ?? "")}" oninput="updateBuilderBlock('${block.id}','minLen',this.value)" placeholder="أقل طول" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
              <div class="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-3 rounded-[2rem]">
                <input type="checkbox" class="w-5 h-5 accent-red-500" ${block.required?'checked':''} onchange="updateBuilderBlock('${block.id}','required',this.checked)">
                <span class="text-sm font-bold">إجباري</span>
              </div>
              <textarea rows="2" oninput="updateBuilderBlock('${block.id}','options',this.value)" placeholder="خيارات القائمة: خيار1, خيار2, خيار3" class="md:col-span-2 w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">${escapeHtml(block.options||"")}</textarea>
            </div>
          </div>
        `;
      }

      if(type==="button"){
        return `
          <div class="builder-card" draggable="true" data-block-id="${block.id}" ondragstart="builderDragStart(event,'${block.id}')" ondragover="builderDragOver(event)" ondrop="builderDrop(event,'${block.id}')" ondragend="builderDragEnd()">
            ${head}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input value="${escapeHtml(block.label||"")}" oninput="updateBuilderBlock('${block.id}','label',this.value)" placeholder="نص الزر" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
              <select onchange="updateBuilderBlock('${block.id}','actionType',this.value)" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
                <option value="toast" ${block.actionType==="toast"?'selected':''}>يعرض توست</option>
                <option value="link" ${block.actionType==="link"?'selected':''}>يفتح رابط</option>
              </select>
              <input value="${escapeHtml(block.message||"")}" oninput="updateBuilderBlock('${block.id}','message',this.value)" placeholder="نص التوست" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
              <select onchange="updateBuilderBlock('${block.id}','toastType',this.value)" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
                <option value="success" ${block.toastType==="success"?'selected':''}>قبول</option>
                <option value="error" ${block.toastType==="error"?'selected':''}>رفض</option>
                <option value="info" ${block.toastType==="info"?'selected':''}>معلومة</option>
              </select>
              <input value="${escapeHtml(block.url||"")}" oninput="updateBuilderBlock('${block.id}','url',this.value)" placeholder="الرابط إن كان الزر يفتح رابط" class="md:col-span-2 w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold" style="direction:ltr">
            </div>
          </div>
        `;
      }

      if(type==="toast"){
        return `
          <div class="builder-card" draggable="true" data-block-id="${block.id}" ondragstart="builderDragStart(event,'${block.id}')" ondragover="builderDragOver(event)" ondrop="builderDrop(event,'${block.id}')" ondragend="builderDragEnd()">
            ${head}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input value="${escapeHtml(block.label||"")}" oninput="updateBuilderBlock('${block.id}','label',this.value)" placeholder="اسم زر التوست" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
              <input value="${escapeHtml(block.message||"")}" oninput="updateBuilderBlock('${block.id}','message',this.value)" placeholder="نص التوست" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
              <select onchange="updateBuilderBlock('${block.id}','toastType',this.value)" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
                <option value="success" ${block.toastType==="success"?'selected':''}>قبول</option>
                <option value="error" ${block.toastType==="error"?'selected':''}>رفض</option>
                <option value="info" ${block.toastType==="info"?'selected':''}>معلومة</option>
              </select>
            </div>
          </div>
        `;
      }

      if(type==="image"){
        return `
          <div class="builder-card" draggable="true" data-block-id="${block.id}" ondragstart="builderDragStart(event,'${block.id}')" ondragover="builderDragOver(event)" ondrop="builderDrop(event,'${block.id}')" ondragend="builderDragEnd()">
            ${head}
            <div class="space-y-2">
              <input value="${escapeHtml(block.src||"")}" oninput="updateBuilderBlock('${block.id}','src',this.value)" placeholder="رابط صورة اختياري" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold" style="direction:ltr">
              <input type="file" accept="image/*" onchange="setBuilderImageFile('${block.id}', this)" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
              <input value="${escapeHtml(block.caption||"")}" oninput="updateBuilderBlock('${block.id}','caption',this.value)" placeholder="تعليق على الصورة" class="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm font-bold">
            </div>
          </div>
        `;
      }

      return '';
    }

    function renderBuilder(){
      const list=document.getElementById("builderList");
      list.innerHTML = builderBlocks.map(builderBlockCard).join('') || `
        <div class="bg-white border rounded-[1.5rem] p-6 text-center text-gray-400 font-bold">
          لا توجد عناصر بعد. أضف حقول أو نص أو زر أو صورة.
        </div>
      `;
    }

    function addBuilderBlock(type){
      let block;
      if(type==="field"){
        block={id:uid("b"), type:"field", label:"حقل جديد", key:uid("field"), inputType:"text", required:true, minLen:"", placeholder:"", options:""};
      }else if(type==="button"){
        block={id:uid("b"), type:"button", label:"زر جديد", actionType:"toast", url:"", message:"تم", toastType:"success"};
      }else if(type==="toast"){
        block={id:uid("b"), type:"toast", label:"إظهار رسالة", message:"تم بنجاح", toastType:"success"};
      }else if(type==="image"){
        block={id:uid("b"), type:"image", src:"", caption:""};
      }else{
        block={id:uid("b"), type:"text", title:"", text:"نص جديد"};
      }
      builderBlocks.push(block);
      renderBuilder();
    }

    function deleteBuilderBlock(id){
      builderBlocks = builderBlocks.filter(b=>b.id!==id);
      delete builderBlockFiles[id];
      renderBuilder();
    }

    function setBuilderImageFile(id, input){
      if(input.files && input.files[0]){
        builderBlockFiles[id]=input.files[0];
        showToast("تم اختيار صورة لهذا العنصر","success");
      }
    }

    function builderDragStart(e,id){
      draggedBlockId=id;
      e.dataTransfer.setData("text/plain", id);
      e.dataTransfer.effectAllowed="move";
      e.currentTarget.classList.add("dragging");
    }

    function builderDragOver(e){
      e.preventDefault();
      e.dataTransfer.dropEffect="move";
    }

    function builderDrop(e,targetId){
      e.preventDefault();
      const sourceId = e.dataTransfer.getData("text/plain") || draggedBlockId;
      if(!sourceId || sourceId===targetId) return;
      const fromIndex=builderBlocks.findIndex(b=>b.id===sourceId);
      const toIndex=builderBlocks.findIndex(b=>b.id===targetId);
      if(fromIndex<0 || toIndex<0) return;
      const moved=builderBlocks.splice(fromIndex,1)[0];
      builderBlocks.splice(toIndex,0,moved);
      renderBuilder();
    }

    function builderDragEnd(){
      draggedBlockId=null;
      document.querySelectorAll('.builder-card').forEach(el=>el.classList.remove('dragging'));
    }

    function openProductEditor(key){
      if(!adminSession || Date.now()>adminSession.expiresAt){
        showToast("سجّل الدخول أولاً","error");
        openAdmin();
        return;
      }

      editingProductKey = key || null;
      builderBlockFiles = {};
      builderBlocks = [];
      document.getElementById("pe_imageFile").value="";

      if(!key){
        document.getElementById("productEditorTitle").innerText="إضافة منتج";
        document.getElementById("pe_name").value="";
        document.getElementById("pe_price").value=0;
        document.getElementById("pe_oldPrice").value=0;
        document.getElementById("pe_delivery").value="تسليم فوري";
        document.getElementById("pe_image").value="";
        document.getElementById("pe_desc").value="";
        document.getElementById("pe_isDynamic").checked=false;
        document.getElementById("pe_enabled").checked=true;
        document.getElementById("pe_primaryActionType").value="default";
        document.getElementById("pe_primaryToastMessage").value="";
        document.getElementById("pe_primaryToastType").value="success";
        document.getElementById("pe_primaryLinkUrl").value="";
        document.getElementById("pe_middleMode").value="json";
        document.getElementById("pe_middleJson").value="[]";
        document.getElementById("pe_middleWebCode").value="";
        document.getElementById("middleJsonPreview").innerHTML="";
        document.getElementById("pe_visibleAllCountries").checked = true;
        renderVisibleCountriesChecklist([]);
        toggleVisibleCountriesBox();
        populateCategoryDropdown("");
        builderBlocks = [];
      } else {
        const [, k] = key.split(":");
        const v = remoteProductsMap[k] || {};

        document.getElementById("productEditorTitle").innerText="تعديل منتج (Firebase)";
        document.getElementById("pe_name").value=v.name||"";
        document.getElementById("pe_price").value=Number(v.price||0);
        document.getElementById("pe_oldPrice").value=Number(v.oldPrice||0);
        document.getElementById("pe_delivery").value=v.delivery||"تسليم فوري";
        document.getElementById("pe_image").value=v.image||"";
        document.getElementById("pe_desc").value=v.desc||"";
        document.getElementById("pe_isDynamic").checked=!!v.isDynamic;
        document.getElementById("pe_enabled").checked=v.enabled!==false;

        const pa = normalizePrimaryAction(v.primaryAction);
        document.getElementById("pe_primaryActionType").value=pa.type;
        document.getElementById("pe_primaryToastMessage").value=pa.message||"";
        document.getElementById("pe_primaryToastType").value=pa.toastType||"success";
        document.getElementById("pe_primaryLinkUrl").value=pa.url||"";

        document.getElementById("pe_middleMode").value = v.middleMode || "json";
        const mid = normalizeMiddleJson(v.middleJson || []);
        document.getElementById("pe_middleJson").value = JSON.stringify(mid, null, 2);
        document.getElementById("pe_middleWebCode").value = v.middleWebCode || "";
        document.getElementById("middleJsonPreview").innerHTML = v.middleMode === "web"
          ? renderMiddleWebFrame(v.middleWebCode || "")
          : renderMiddleJsonBlocks(mid);

        const vis = Array.isArray(v.visibleCountries) ? v.visibleCountries : [];
        document.getElementById("pe_visibleAllCountries").checked = !vis.length;
        renderVisibleCountriesChecklist(vis);
        toggleVisibleCountriesBox();

        populateCategoryDropdown(v.category || "");
        builderBlocks = normalizeContentBlocks(v.contentBlocks || []);
      }

      toggleMiddleModeFields();
      togglePrimaryActionFields();
      renderBuilder();
      document.getElementById("productEditorModal").classList.remove("hidden");
    }

    function closeProductEditor(){
      document.getElementById("productEditorModal").classList.add("hidden");
      editingProductKey=null;
      builderBlocks=[];
      builderBlockFiles={};
    }

    async function uploadImageIfAny(){
      const fileInput = document.getElementById("pe_imageFile");
      const f = fileInput.files && fileInput.files[0] ? fileInput.files[0] : null;
      if(!f) return null;
      return await uploadFileToStorage(f, "product_images");
    }

    async function uploadBuilderImages(blocks){
      const out = [];
      for(const block of blocks){
        const clone = {...block};
        if(clone.type==="image" && builderBlockFiles[clone.id]){
          clone.src = await uploadFileToStorage(builderBlockFiles[clone.id], "content_blocks");
        }
        out.push(clone);
      }
      return out;
    }

    async function ensureCustomCategoryExists(categoryId){
      if(!categoryId || categoryId==="all") return;
      const existing = categories.find(c=>c.id===categoryId);
      if(existing) return;
      await rtdb.ref(`${PATH_CATEGORIES}/${categoryId}`).update({
        name: categoryId,
        order: 999,
        enabled: true,
        updatedAt: Date.now()
      });
    }

    async function saveProductFromEditor(){
      const name=(document.getElementById("pe_name").value||"").trim();
      const category=getSelectedCategoryFromEditor();
      const price=Number(document.getElementById("pe_price").value||0);
      const oldPrice=Number(document.getElementById("pe_oldPrice").value||0);
      const delivery=(document.getElementById("pe_delivery").value||"").trim();
      let image=(document.getElementById("pe_image").value||"").trim();
      const desc=(document.getElementById("pe_desc").value||"").trim();
      const isDynamic=document.getElementById("pe_isDynamic").checked;
      const enabled=document.getElementById("pe_enabled").checked;
      const visibleCountries = getSelectedVisibleCountriesFromEditor();
      const middleMode = document.getElementById("pe_middleMode").value || "json";

      if(name.length<2){
        showToast("اسم المنتج مطلوب","error");
        return;
      }
      if(!category || category==="all"){
        showToast("اختر قسمًا صحيحًا","error");
        return;
      }

      const middleJson = safeParseJSON((document.getElementById("pe_middleJson").value || "").trim() || "[]", null);
      if(middleMode==="json" && !Array.isArray(middleJson)){
        showToast("JSON الخاص بالقسم الأوسط غير صحيح","error");
        return;
      }

      const middleWebCode = document.getElementById("pe_middleWebCode").value || "";

      const primaryAction = {
        type: document.getElementById("pe_primaryActionType").value || "default",
        message: (document.getElementById("pe_primaryToastMessage").value||"").trim(),
        toastType: document.getElementById("pe_primaryToastType").value || "success",
        url: (document.getElementById("pe_primaryLinkUrl").value||"").trim()
      };

      if(primaryAction.type==="link" && !primaryAction.url){
        showToast("أدخل رابط السلوك المخصص","error");
        return;
      }

      setLoading(true);
      try{
        await ensureCustomCategoryExists(category);

        const uploadedUrl = await uploadImageIfAny();
        if(uploadedUrl){
          image = uploadedUrl;
        }else if(!image && !editingProductKey){
          image = "https://via.placeholder.com/500?text=No+Image";
        }

        const contentBlocks = await uploadBuilderImages(builderBlocks);

        const data = {
          name,
          category,
          price: Number(price||0),
          oldPrice: Number(oldPrice||0),
          delivery,
          image,
          desc,
          isDynamic,
          enabled,
          visibleCountries,
          contentBlocks,
          middleMode,
          middleJson: middleMode==="json" ? normalizeMiddleJson(middleJson) : [],
          middleWebCode: middleMode==="web" ? middleWebCode : "",
          primaryAction,
          updatedAt: Date.now()
        };

        if(!editingProductKey){
          await rtdb.ref(PATH_PRODUCTS).push(data);
        } else {
          const [,k] = editingProductKey.split(":");
          await rtdb.ref(`${PATH_PRODUCTS}/${k}`).update(data);
        }

        showToast("تم حفظ المنتج","success");
        closeProductEditor();
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل حفظ المنتج","error");
      }finally{
        setLoading(false);
      }
    }

    async function deleteRemoteProduct(key){
      if(!confirm("حذف المنتج من Firebase؟")) return;
      setLoading(true);
      try{
        await rtdb.ref(`${PATH_PRODUCTS}/${key}`).remove();
        showToast("تم حذف المنتج","success");
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل حذف المنتج","error");
      }finally{
        setLoading(false);
      }
    }

    async function toggleProductVisibility(key, enabled){
      setLoading(true);
      try{
        await rtdb.ref(`${PATH_PRODUCTS}/${key}/enabled`).set(!!enabled);
        showToast("تم تحديث ظهور المنتج","success");
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل التحديث","error");
      }finally{
        setLoading(false);
      }
    }

    function openCountryEditor(code){
      if(!adminSession || Date.now()>adminSession.expiresAt){
        showToast("سجّل الدخول أولاً","error");
        openAdmin();
        return;
      }

      editingCountryCode = code || null;

      if(!code){
        document.getElementById("countryEditorTitle").innerText = "إضافة دولة";
        document.getElementById("coe_code").value = "";
        document.getElementById("coe_name").value = "";
        document.getElementById("coe_flagUrl").value = "";
        document.getElementById("coe_currencyCode").value = "";
        document.getElementById("coe_currencySymbol").value = "";
        document.getElementById("coe_rateToIls").value = "";
        document.getElementById("coe_order").value = 0;
        document.getElementById("coe_enabled").checked = true;
        document.getElementById("coe_code").disabled = false;
      }else{
        const c = countries.find(x=>x.code===code) || {};
        document.getElementById("countryEditorTitle").innerText = "تعديل دولة";
        document.getElementById("coe_code").value = c.code || "";
        document.getElementById("coe_name").value = c.name || "";
        document.getElementById("coe_flagUrl").value = c.flagUrl || "";
        document.getElementById("coe_currencyCode").value = c.currencyCode || "";
        document.getElementById("coe_currencySymbol").value = c.currencySymbol || "";
        document.getElementById("coe_rateToIls").value = Number(c.rateToIls || 1);
        document.getElementById("coe_order").value = Number(c.order || 0);
        document.getElementById("coe_enabled").checked = c.enabled!==false;
        document.getElementById("coe_code").disabled = true;
      }

      document.getElementById("countryEditorModal").classList.remove("hidden");
    }

    function closeCountryEditor(){
      document.getElementById("countryEditorModal").classList.add("hidden");
      document.getElementById("coe_code").disabled = false;
      editingCountryCode = null;
    }

    async function saveCountryFromEditor(){
      const code = normalizeCountryCode(document.getElementById("coe_code").value || "");
      const name = (document.getElementById("coe_name").value || "").trim();
      const flagUrl = (document.getElementById("coe_flagUrl").value || "").trim();
      const currencyCode = (document.getElementById("coe_currencyCode").value || "").trim().toUpperCase();
      const currencySymbol = (document.getElementById("coe_currencySymbol").value || "").trim();
      const rateToIls = Number(document.getElementById("coe_rateToIls").value || 0);
      const order = Number(document.getElementById("coe_order").value || 0);
      const enabled = document.getElementById("coe_enabled").checked;

      if(code.length < 2){
        showToast("رمز الدولة غير صالح","error");
        return;
      }
      if(name.length < 2){
        showToast("اسم الدولة مطلوب","error");
        return;
      }
      if(!currencyCode){
        showToast("رمز العملة مطلوب","error");
        return;
      }
      if(!(rateToIls > 0)){
        showToast("قيمة العملة بالنسبة للشيكل غير صحيحة","error");
        return;
      }

      setLoading(true);
      try{
        await rtdb.ref(`${PATH_COUNTRIES}/${code}`).update({
          name,
          flagUrl,
          currencyCode,
          currencySymbol,
          rateToIls,
          order,
          enabled,
          updatedAt: Date.now()
        });
        showToast("تم حفظ الدولة","success");
        closeCountryEditor();
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل حفظ الدولة","error");
      }finally{
        setLoading(false);
      }
    }

    async function deleteCountry(code){
      if(!confirm("حذف الدولة؟")) return;
      setLoading(true);
      try{
        await rtdb.ref(`${PATH_COUNTRIES}/${code}`).remove();
        showToast("تم حذف الدولة","success");
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل حذف الدولة","error");
      }finally{
        setLoading(false);
      }
    }

    async function toggleCountryVisibility(code, enabled){
      setLoading(true);
      try{
        await rtdb.ref(`${PATH_COUNTRIES}/${code}/enabled`).set(!!enabled);
        if(selectedCountryCode===code && !enabled){
          applyCountry("GLOBAL");
        }
        showToast("تم تحديث ظهور الدولة","success");
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل التحديث","error");
      }finally{
        setLoading(false);
      }
    }

    function populateAdProductDropdown(selectedKey=""){
      const sel = document.getElementById("ae_productKey");
      if(!sel) return;
      sel.innerHTML = products.map(p=>`
        <option value="${escapeHtml(p.__key)}" ${selectedKey===p.__key?'selected':''}>${escapeHtml(p.name)}</option>
      `).join('');
    }

    function populateAdClickProductDropdown(selectedKey=""){
      const sel = document.getElementById("ae_clickProductKey");
      if(!sel) return;
      sel.innerHTML = products.map(p=>`
        <option value="${escapeHtml(p.__key)}" ${selectedKey===p.__key?'selected':''}>${escapeHtml(p.name)}</option>
      `).join('');
    }

    function populateAdClickCategoryDropdown(selectedId=""){
      const sel = document.getElementById("ae_clickCategoryId");
      if(!sel) return;
      sel.innerHTML = categories.filter(c=>c.enabled!==false).map(c=>`
        <option value="${escapeHtml(c.id)}" ${selectedId===c.id?'selected':''}>${escapeHtml(c.name)} (${escapeHtml(c.id)})</option>
      `).join('');
    }

    function populateAdProductsSliderChecklist(selected=[]){
      const box = document.getElementById('ae_productsSliderList');
      if(!box) return;
      box.innerHTML = products.map(p=>`
        <label class="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-[1.2rem] cursor-pointer">
          <input type="checkbox" class="ae-product-slider-check accent-red-500" value="${p.__key}" ${selected.includes(p.__key)?'checked':''}>
          <span class="text-xs font-bold">${escapeHtml(p.name)}</span>
        </label>
      `).join('') || `<div class="text-xs text-gray-400 font-bold">لا توجد منتجات</div>`;
    }

    function getSelectedAdProductsSliderKeys(){
      return [...document.querySelectorAll('.ae-product-slider-check:checked')].map(el=>el.value);
    }

    function toggleAdDurationFields(){
      const inf = document.getElementById("ae_infinite").checked;
      ["ae_minutes","ae_days","ae_months"].forEach(id=>{
        const el = document.getElementById(id);
        el.disabled = inf;
      });
    }

    function toggleAdFields(){
      const type = document.getElementById("ae_type").value;
      document.getElementById("adWebWrap").classList.toggle("hidden", type!=="web");
      document.getElementById("adJsonWrap").classList.toggle("hidden", type!=="json");
      document.getElementById("adImageWrap").classList.toggle("hidden", type!=="image");
      document.getElementById("adImagesSliderWrap").classList.toggle("hidden", type!=="images_slider");
      document.getElementById("adProductWrap").classList.toggle("hidden", type!=="product");
      document.getElementById("adProductsSliderWrap").classList.toggle("hidden", type!=="products_slider");
    }

    function toggleAdClickActionFields(){
      const type = document.getElementById("ae_clickActionType").value;
      document.getElementById("aeClickLinkWrap").classList.toggle("hidden", type!=="link");
      document.getElementById("aeClickCategoryWrap").classList.toggle("hidden", type!=="category");
      document.getElementById("aeClickProductWrap").classList.toggle("hidden", type!=="product");
    }

    function openAdEditor(key){
      if(!adminSession || Date.now()>adminSession.expiresAt){
        showToast("سجّل الدخول أولاً","error");
        openAdmin();
        return;
      }

      editingAdKey = key || null;
      populateAdProductDropdown();
      populateAdClickProductDropdown();
      populateAdClickCategoryDropdown();
      populateAdProductsSliderChecklist([]);

      if(!key){
        document.getElementById("adEditorTitle").innerText = "إضافة إعلان";
        document.getElementById("ae_name").value = "";
        document.getElementById("ae_type").value = "web";
        document.getElementById("ae_span").value = "1";
        document.getElementById("ae_position").value = "3";
        document.getElementById("ae_minutes").value = "0";
        document.getElementById("ae_days").value = "0";
        document.getElementById("ae_months").value = "0";
        document.getElementById("ae_infinite").checked = false;
        document.getElementById("ae_enabled").checked = true;
        document.getElementById("ae_showBadge").checked = true;
        document.getElementById("ae_showBorder").checked = true;
        document.getElementById("ae_code").value = "";
        document.getElementById("ae_json").value = "[]";
        document.getElementById("ae_image").value = "";
        document.getElementById("ae_images").value = "";
        document.getElementById("adPreview").innerHTML = "";
        document.getElementById("ae_clickActionType").value = "none";
        document.getElementById("ae_clickLink").value = "";
        if(products.length){
          document.getElementById("ae_productKey").value = products[0].__key;
          document.getElementById("ae_clickProductKey").value = products[0].__key;
        }
      }else{
        const ad = remoteAdsMap[key] || {};
        const clickAction = normalizeAdClickAction(ad.clickAction);
        const display = normalizeAdDisplay(ad.display);

        document.getElementById("adEditorTitle").innerText = "تعديل إعلان";
        document.getElementById("ae_name").value = ad.name || "";
        document.getElementById("ae_type").value = ad.type || "web";
        document.getElementById("ae_span").value = String(ad.span || "1");
        document.getElementById("ae_position").value = String(ad.position || 3);
        document.getElementById("ae_minutes").value = "0";
        document.getElementById("ae_days").value = "0";
        document.getElementById("ae_months").value = "0";
        document.getElementById("ae_infinite").checked = ad.infinite === true;
        document.getElementById("ae_enabled").checked = ad.enabled !== false;
        document.getElementById("ae_showBadge").checked = display.showBadge;
        document.getElementById("ae_showBorder").checked = display.showBorder;
        document.getElementById("ae_code").value = ad.code || "";
        document.getElementById("ae_json").value = JSON.stringify(ad.json || [], null, 2);
        document.getElementById("ae_image").value = ad.image || "";
        document.getElementById("ae_images").value = normalizeAdImages(ad.images || []).join('\n');
        populateAdProductDropdown(ad.productKey || "");
        populateAdProductsSliderChecklist(normalizeAdProductKeys(ad.productKeys || []));
        document.getElementById("ae_clickActionType").value = clickAction.type || "none";
        document.getElementById("ae_clickLink").value = clickAction.link || "";
        populateAdClickCategoryDropdown(clickAction.categoryId || "");
        populateAdClickProductDropdown(clickAction.productKey || "");
        previewAdEditor();
      }

      toggleAdDurationFields();
      toggleAdFields();
      toggleAdClickActionFields();
      document.getElementById("adEditorModal").classList.remove("hidden");
    }

    function closeAdEditor(){
      document.getElementById("adEditorModal").classList.add("hidden");
      editingAdKey = null;
    }

    function previewAdEditor(){
      const type = document.getElementById("ae_type").value;
      const preview = document.getElementById("adPreview");
      const fakeAd = {
        __key: 'preview',
        type,
        span: document.getElementById('ae_span').value || '1',
        code: document.getElementById('ae_code').value || '',
        json: safeParseJSON(document.getElementById('ae_json').value || '[]', []),
        image: document.getElementById('ae_image').value || '',
        images: normalizeAdImages(document.getElementById('ae_images').value || ''),
        productKey: document.getElementById('ae_productKey').value || '',
        productKeys: getSelectedAdProductsSliderKeys(),
        clickAction: {
          type: document.getElementById('ae_clickActionType').value || 'none',
          link: document.getElementById('ae_clickLink').value || '',
          categoryId: document.getElementById('ae_clickCategoryId').value || '',
          productKey: document.getElementById('ae_clickProductKey').value || ''
        },
        display: {
          showBadge: document.getElementById('ae_showBadge').checked,
          showBorder: document.getElementById('ae_showBorder').checked
        }
      };

      preview.innerHTML = renderAdCard(fakeAd);
      setupAutoIframeSize();
    }

    async function saveAdFromEditor(){
      const name = (document.getElementById("ae_name").value || "").trim();
      const type = document.getElementById("ae_type").value;
      const span = document.getElementById("ae_span").value || "1";
      const position = Number(document.getElementById("ae_position").value || 1);
      const minutes = Number(document.getElementById("ae_minutes").value || 0);
      const days = Number(document.getElementById("ae_days").value || 0);
      const months = Number(document.getElementById("ae_months").value || 0);
      const infinite = document.getElementById("ae_infinite").checked;
      const enabled = document.getElementById("ae_enabled").checked;
      const code = document.getElementById("ae_code").value || "";
      const image = document.getElementById("ae_image").value || "";
      const images = normalizeAdImages(document.getElementById('ae_images').value || '');
      const productKey = document.getElementById("ae_productKey").value || "";
      const productKeys = getSelectedAdProductsSliderKeys();
      const json = safeParseJSON(document.getElementById("ae_json").value || "[]", null);
      const showBadge = document.getElementById('ae_showBadge').checked;
      const showBorder = document.getElementById('ae_showBorder').checked;

      const clickAction = {
        type: document.getElementById("ae_clickActionType").value || "none",
        link: (document.getElementById("ae_clickLink").value || "").trim(),
        categoryId: document.getElementById("ae_clickCategoryId").value || "",
        productKey: document.getElementById("ae_clickProductKey").value || ""
      };

      if(name.length < 2){
        showToast("اسم الإعلان مطلوب","error");
        return;
      }
      if(position < 1){
        showToast("ترتيب الإعلان غير صحيح","error");
        return;
      }
      if(type==="json" && !Array.isArray(json)){
        showToast("JSON الإعلان غير صحيح","error");
        return;
      }
      if(type==="image" && !image.trim()){
        showToast("رابط الصورة مطلوب","error");
        return;
      }
      if(type==="images_slider" && images.length < 1){
        showToast("أضف صورة واحدة على الأقل للسلايدر","error");
        return;
      }
      if(type==="web" && !code.trim()){
        showToast("كود الإعلان مطلوب","error");
        return;
      }
      if(type==="product" && !productKey){
        showToast("اختر منتجًا","error");
        return;
      }
      if(type==="products_slider" && !productKeys.length){
        showToast("اختر منتجًا واحدًا على الأقل للسلايدر","error");
        return;
      }
      if(clickAction.type==="link" && !clickAction.link){
        showToast("أدخل رابط التحويل","error");
        return;
      }
      if(clickAction.type==="category" && !clickAction.categoryId){
        showToast("اختر قسم التحويل","error");
        return;
      }
      if(clickAction.type==="product" && !clickAction.productKey){
        showToast("اختر منتج التحويل","error");
        return;
      }

      const now = Date.now();
      const durationMs =
        (minutes * 60 * 1000) +
        (days * 24 * 60 * 60 * 1000) +
        (months * 30 * 24 * 60 * 60 * 1000);

      const endAt = infinite ? 0 : (durationMs > 0 ? now + durationMs : 0);

      const data = {
        name,
        type,
        span,
        position,
        enabled,
        infinite,
        code: type==="web" ? code : "",
        json: type==="json" ? normalizeAdJson(json) : [],
        image: type==="image" ? image : "",
        images: type==="images_slider" ? images : [],
        productKey: type==="product" ? productKey : "",
        productKeys: type==="products_slider" ? productKeys : [],
        display: {
          showBadge,
          showBorder
        },
        clickAction,
        startAt: editingAdKey ? (remoteAdsMap[editingAdKey]?.startAt || now) : now,
        endAt,
        updatedAt: now
      };

      setLoading(true);
      try{
        if(editingAdKey){
          await rtdb.ref(`${PATH_ADS}/${editingAdKey}`).update(data);
        }else{
          await rtdb.ref(PATH_ADS).push(data);
        }
        showToast("تم حفظ الإعلان","success");
        closeAdEditor();
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل حفظ الإعلان","error");
      }finally{
        setLoading(false);
      }
    }

    async function toggleAdVisibility(key, enabled){
      setLoading(true);
      try{
        await rtdb.ref(`${PATH_ADS}/${key}/enabled`).set(!!enabled);
        showToast("تم تحديث الإعلان","success");
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل تحديث الإعلان","error");
      }finally{
        setLoading(false);
      }
    }

    async function deleteAd(key){
      if(!confirm("حذف الإعلان؟")) return;
      setLoading(true);
      try{
        await rtdb.ref(`${PATH_ADS}/${key}`).remove();
        showToast("تم حذف الإعلان","success");
        await loadFromFirebase();
        refreshAdminLists();
      }catch(e){
        console.error(e);
        showToast("فشل حذف الإعلان","error");
      }finally{
        setLoading(false);
      }
    }

    async function bootApp(){
      setLoading(true);
      try{
        history.replaceState({ view: 'storeView' }, "");
        try{
          const s=JSON.parse(sessionStorage.getItem(ADMIN_SESSION_KEY)||"null");
          if(s && s.expiresAt && Date.now()<s.expiresAt) adminSession=s;
          else adminSession=null;
        }catch{
          adminSession=null;
        }

        await loadFromFirebase();
        updateCartUI();
        updateFooterDisplay();
      }catch(e){
        console.error(e);
      }finally{
        setLoading(false);
      }
    }

    window.addEventListener("load", bootApp);
    document.addEventListener("DOMContentLoaded", ()=>{
      setTimeout(()=>setLoading(false), 1800);
    });
  </script>
</body>
</html>

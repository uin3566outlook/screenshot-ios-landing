(() => {
  "use strict";

  const supported = ["zh-Hans", "zh-Hant", "en"];
  const translations = {
    en: {
      "跳到主要内容": "Skip to main content",
      "局部分享": "ClipShare",
      "产品体验": "Experience",
      "功能亮点": "Features",
      "使用方式": "How it works",
      "页面源码": "Source code",
      "开发预览 · 为 iPhone 而做的截图工具": "Preview · A focused screenshot tool for iPhone",
      "截图，": "Capture.",
      "只发重点。": "Share the point.",
      "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "See something worth sharing? Crop it, mark it, and send it. Less switching between apps, more clarity at a glance.",
      "看看怎么用": "See how it works",
      "查看页面源码": "View source code",
      "原生 iOS 应用 · 尚未开放公开下载": "Native iOS app · Public download coming soon",
      "点击查看高清原图 ↗": "Tap to view full resolution ↗",
      "向下探索": "Scroll to explore",
      "把复杂留在身后": "Leave the extra steps behind",
      "从整张屏幕，": "From the whole screen,",
      "到": "to",
      "真正想说的那一点。": "the part that matters.",
      "不必先把截图存进相册，再打开聊天软件寻找图片。局部分享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "No need to save a screenshot to Photos, then hunt for it in a chat app. ClipShare puts cropping and annotation in one smooth flow.",
      "一步聚焦": "Focus in one step",
      "指尖框选，": "Crop with a touch,",
      "重点自然出现。": "keep the focus.",
      "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "Adjust the crop freely. Add arrows, text, or drawing when needed. When you're done, share through the iOS share sheet.",
      "从截图到分享，保持连贯": "A smooth path from capture to share",
      "选出重点": "Find the focus",
      "随手标注": "Mark it up",
      "恰到好处的工具": "Just the tools you need",
      "功能不喧哗，": "Less interface,",
      "表达更清楚。": "more clarity.",
      "只为分享截图时真正需要的几步，设计每一次操作。": "Every action is designed around the few steps that make a screenshot worth sharing.",
      "自由框选": "Flexible cropping",
      "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "Drag edges and handles to keep exactly what you need. Move or resize the selection with two fingers.",
      "标注重点": "Clear annotations",
      "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "Add text, arrows, drawing, pixelation, blur, or solid masks as needed.",
      "留住隐私": "Privacy in mind",
      "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "Images are processed on your device. Quick Capture does not automatically save the original to Photos.",
      "直接分享": "Share directly",
      "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "Use the iOS share sheet to send the result to available chat and sharing apps.",
      "一气呵成": "Get it done in one flow",
      "三步之间，": "Three quick steps,",
      "想法已经发出。": "ready to share.",
      "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "Set up the shortcut once after installing the app, then capture whenever you need to.",
      "查看预制快捷指令": "View the ready-made shortcut",
      "截取屏幕": "Capture the screen",
      "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "Run the Quick Capture shortcut, or assign it to Back Tap or the Action button.",
      "圈出重点": "Crop the essentials",
      "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "Once the screenshot opens in the editor, select the useful area and add context or hide details.",
      "分享出去": "Send it out",
      "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "Tap Share and choose an installed app. You can also save the edited image yourself.",
      "下一张截图，": "Your next screenshot,",
      "只留下重要的。": "just the essentials.",
      "把重点，说清楚。": "Make the point clear.",
      "隐私政策": "Privacy Policy",
      "使用条款": "Terms of Use",
      "支持": "Support",
      "局部分享，返回顶部": "ClipShare, back to top",
      "页面导航": "Page navigation",
      "局部分享 App 当前首页预览": "Current ClipShare app home screen preview",
      "打开高清首页截图": "Open full-resolution home screen image",
      "局部分享首页：介绍截图、框选与分享流程，并提供设置极速截图和体验示例入口": "ClipShare home screen with capture, crop, and share guidance, Quick Capture setup, and a sample entry point",
      "打开高清编辑器截图": "Open full-resolution editor image",
      "局部分享编辑器：原图裁剪、标注、保存到相册与分享操作": "ClipShare editor with crop, annotation, Save to Photos, and share actions",
    },
    "zh-Hant": {
      "跳到主要内容": "跳到主要內容",
      "局部分享": "局部分享",
      "产品体验": "產品體驗",
      "功能亮点": "功能亮點",
      "使用方式": "使用方式",
      "页面源码": "頁面原始碼",
      "开发预览 · 为 iPhone 而做的截图工具": "開發預覽 · 為 iPhone 打造的截圖工具",
      "截图，": "截圖，",
      "只发重点。": "只傳重點。",
      "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "看到值得分享的內容，直接框選、標註、傳送。少一點來回切換，多一點一目瞭然。",
      "看看怎么用": "看看怎麼用",
      "查看页面源码": "檢視頁面原始碼",
      "原生 iOS 应用 · 尚未开放公开下载": "原生 iOS App · 尚未開放公開下載",
      "点击查看高清原图 ↗": "點選檢視高解析度原圖 ↗",
      "向下探索": "向下探索",
      "把复杂留在身后": "把繁瑣留在身後",
      "从整张屏幕，": "從整張螢幕，",
      "到": "到",
      "真正想说的那一点。": "真正想說的那一點。",
      "不必先把截图存进相册，再打开聊天软件寻找图片。局部分享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "不必先把截圖存進相簿，再打開聊天 App 尋找圖片。局部分享把裁剪和說明放在同一個順手的流程，讓資訊剛剛好。",
      "一步聚焦": "一步聚焦",
      "指尖框选，": "指尖框選，",
      "重点自然出现。": "重點自然出現。",
      "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "自由調整裁剪區域，需要說明時再加上箭頭、文字或塗鴉。編輯完成後，直接開啟 iOS 系統分享面板。",
      "从截图到分享，保持连贯": "從截圖到分享，一氣呵成",
      "选出重点": "選出重點",
      "随手标注": "隨手標註",
      "恰到好处的工具": "恰到好處的工具",
      "功能不喧哗，": "功能不喧嘩，",
      "表达更清楚。": "表達更清楚。",
      "只为分享截图时真正需要的几步，设计每一次操作。": "只為分享截圖時真正需要的幾步，設計每一次操作。",
      "自由框选": "自由框選",
      "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "拖動邊線與控制點，精準留下想傳的部分。選取區域也能移動和雙指調整。",
      "标注重点": "標註重點",
      "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "文字、箭頭、塗鴉、像素化、模糊與純色遮擋，按需使用。",
      "留住隐私": "守住隱私",
      "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "截圖在裝置本機處理。極速截圖流程不會自動把原圖存入相簿。",
      "直接分享": "直接分享",
      "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "使用 iOS 系統分享面板，傳送給裝置上可用的聊天與分享 App。",
      "一气呵成": "一氣呵成",
      "三步之间，": "三步之間，",
      "想法已经发出。": "想法已經傳出。",
      "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "安裝 App 後，首次設定一次捷徑，之後就可以在需要時直接開始。",
      "查看预制快捷指令": "檢視預製捷徑",
      "截取屏幕": "擷取螢幕",
      "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "執行「快速截圖」捷徑，或將它綁定到背面輕點、動作按鈕。",
      "圈出重点": "圈出重點",
      "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "截圖進入編輯器後，框選需要的區域，按需加入說明或隱藏資訊。",
      "分享出去": "分享出去",
      "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "點選分享，選擇已安裝的目標 App；也可以自行儲存編輯後的圖片。",
      "下一张截图，": "下一張截圖，",
      "只留下重要的。": "只留下重要的。",
      "把重点，说清楚。": "把重點，說清楚。",
      "隐私政策": "隱私政策",
      "使用条款": "使用條款",
      "支持": "支援",
      "局部分享，返回顶部": "局部分享，返回頂部",
      "页面导航": "頁面導覽",
      "局部分享 App 当前首页预览": "局部分享 App 目前首頁預覽",
      "打开高清首页截图": "開啟高解析度首頁截圖",
      "局部分享首页：介绍截图、框选与分享流程，并提供设置极速截图和体验示例入口": "局部分享首頁：介紹截圖、框選與分享流程，並提供極速截圖設定和體驗範例入口",
      "打开高清编辑器截图": "開啟高解析度編輯器截圖",
      "局部分享编辑器：原图裁剪、标注、保存到相册与分享操作": "局部分享編輯器：原圖裁剪、標註、儲存至相簿與分享操作",
    },
  };

  const titles = {
    "zh-Hans": "局部分享 — 截图，只发重点",
    "zh-Hant": "局部分享 — 截圖，只傳重點",
    en: "ClipShare — Share the point",
  };
  const descriptions = {
    "zh-Hans": "局部分享，让 iPhone 截图从整屏变成重点。截图、框选、标注，直接分享。",
    "zh-Hant": "局部分享，讓 iPhone 截圖從整屏變成重點。截圖、框選、標註，直接分享。",
    en: "ClipShare helps you capture, crop, annotate, and share the part of an iPhone screenshot that matters.",
  };
  const socialDescriptions = {
    "zh-Hans": "为 iPhone 打造的轻量截图编辑体验。框选重点，随手标注，直接分享。",
    "zh-Hant": "為 iPhone 打造的輕量截圖編輯體驗。框選重點，隨手標註，直接分享。",
    en: "A focused screenshot editing experience for iPhone. Crop the essentials, add context, and share directly.",
  };

  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement?.closest(".language-picker")) continue;
    const key = node.nodeValue.trim();
    if (key && /[\u3400-\u9fff]/u.test(key)) textNodes.push({ node, original: node.nodeValue, key });
  }
  const attributes = [];
  for (const element of document.querySelectorAll("[aria-label], [alt]")) {
    if (element.closest(".language-picker")) continue;
    for (const name of ["aria-label", "alt"]) {
      const key = element.getAttribute(name);
      if (key && /[\u3400-\u9fff]/u.test(key)) attributes.push({ element, name, key });
    }
  }

  const choiceKey = "clipshare.landingLanguage";
  const fromBrowser = () => {
    const candidate = navigator.languages?.[0] || navigator.language || "";
    if (/^zh-(Hant|TW|HK|MO)/i.test(candidate)) return "zh-Hant";
    if (/^zh/i.test(candidate)) return "zh-Hans";
    return "en";
  };
  const initialLanguage = () => {
    const requested = new URLSearchParams(location.search).get("lang");
    if (supported.includes(requested)) return requested;
    try {
      const saved = localStorage.getItem(choiceKey);
      if (supported.includes(saved)) return saved;
    } catch (_) { /* Browsers may disable local storage. */ }
    return fromBrowser();
  };

  const render = (language, remember) => {
    const copy = translations[language] || {};
    for (const { node, original, key } of textNodes) {
      node.nodeValue = original.replace(key, copy[key] ?? key);
    }
    for (const { element, name, key } of attributes) {
      element.setAttribute(name, copy[key] ?? key);
    }
    document.documentElement.lang = language;
    document.title = titles[language];
    document.querySelector('meta[name="description"]').content = descriptions[language];
    document.querySelector('meta[property="og:title"]').content = titles[language];
    document.querySelector('meta[property="og:description"]').content = socialDescriptions[language];
    document.querySelector(".language-picker").setAttribute("aria-label", {
      "zh-Hans": "切换语言", "zh-Hant": "切換語言", en: "Choose language",
    }[language]);
    for (const button of document.querySelectorAll(".language-picker button")) {
      button.setAttribute("aria-pressed", button.dataset.language === language ? "true" : "false");
    }
    const suffix = language === "en" ? "" : `-${language}`;
    for (const link of document.querySelectorAll("[data-legal-link]")) {
      link.href = `${link.dataset.legalLink}${suffix}.html`;
    }
    if (remember) {
      try { localStorage.setItem(choiceKey, language); } catch (_) { /* Optional preference. */ }
      const url = new URL(location.href);
      url.searchParams.set("lang", language);
      history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }
  };

  for (const button of document.querySelectorAll(".language-picker button")) {
    button.addEventListener("click", () => render(button.dataset.language, true));
  }
  render(initialLanguage(), false);
  document.documentElement.classList.add("i18n-ready");
})();

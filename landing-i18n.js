(() => {
  "use strict";

  const supported = [
  "zh-Hans",
  "zh-Hant",
  "en",
  "ja",
  "ko",
  "id",
  "th",
  "ar",
  "es",
  "fr",
  "de",
  "pt-BR",
  "it"
];
  const translations = {
  "en": {
    "最近摘图，桌面一点即达。": "Recent exports, one tap away.",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "After you share or save, the widget shows your latest export or the last three. Tap an image to keep editing.",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "Recent Exports is free. A one-time Pro purchase unlocks exports without the ClipShare mark or download QR code.",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "Medium ClipShare widget showing the three latest exports, their times, and the local history count",
    "摘享裁剪宣传图": "ClipShare cropping preview",
    "摘享标注宣传图": "ClipShare annotation preview",
    "摘享分享宣传图": "ClipShare sharing preview",
    "跳到主要内容": "Skip to main content",
    "摘享": "ClipShare",
    "产品体验": "Experience",
    "操作演示": "Demo",
    "实用功能": "Features",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "Keep the point. Share the picture. Crop, annotate, hide private details, and share right from the editor.",
    "轻松裁剪，": "Crop with ease.",
    "分享一步到位。": "Send it to chat.",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "Crop the part you need, add an arrow or a note, and send it through the iOS share sheet. No saving to Photos or searching for the image.",
    "裁得顺手，分享轻松。": "Easy to crop. Easy to share.",
    "单指，选出重点": "One finger. Select what matters.",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "Drag to select, move the crop, or fine-tune its edges. All with one finger.",
    "标注，一眼看懂": "Mark it up. Make it clear.",
    "箭头、文字、涂鸦，把想说的标清楚。": "Add arrows, text and drawings to make your point clear.",
    "直接分享，相册不留图": "Share directly. Keep Photos clear.",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "Capture, edit, and share with Quick Capture. Neither the original nor the shared image is automatically saved to Photos. Save only when you choose to.",
    "功能亮点": "Features",
    "使用方式": "How it works",
    "为 iPhone 而做的截图工具": "A focused screenshot tool for iPhone",
    "截图，": "Capture.",
    "只发重点。": "Share the point.",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "See something worth sharing? Crop it, mark it, and send it. Less switching between apps, more clarity at a glance.",
    "看看怎么用": "See how it works",
    "即将登陆 App Store": "Coming soon to the App Store",
    "原生 iOS 应用": "Native iOS app",
    "看看真实操作": "See the real flow",
    "截取、裁剪、": "Capture. Crop.",
    "直接发到聊天。": "Send it to chat.",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "Capture your screen, crop the essentials, and send them through WhatsApp. One smooth flow for faster sharing.",
    "截取": "Capture",
    "裁剪": "Crop",
    "分享": "Share",
    "点击查看高清原图 ↗": "Tap to view full resolution ↗",
    "向下探索": "Scroll to explore",
    "把复杂留在身后": "Leave the extra steps behind",
    "从整张屏幕，": "From the whole screen,",
    "到": "to",
    "真正想说的那一点。": "the part that matters.",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "No need to save a screenshot to Photos, then hunt for it in a chat app. ClipShare puts cropping and annotation in one smooth flow.",
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
    "摘享，返回顶部": "ClipShare, back to top",
    "页面导航": "Page navigation",
    "摘享 App 当前首页预览": "Current ClipShare app home screen preview",
    "摘享 App 当前首页预览与操作演示": "Current ClipShare home screen and product demo",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "ClipShare demo: capture, crop, and share to a chat app",
    "打开高清首页截图": "Open full-resolution home screen image",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "ClipShare home screen with capture, crop, and share guidance, Quick Capture setup, a sample, Photos, camera, and Paste & Edit",
    "打开高清编辑器截图": "Open full-resolution editor image",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "ClipShare editor with crop, annotation, Save to Photos, and share actions"
  },
  "zh-Hant": {
    "最近摘图，桌面一点即达。": "最近摘圖，桌面一點即達。",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "分享或儲存後，小工具會顯示最近一張或三張成品。點開任一張即可繼續編輯。",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "最近摘圖免費。Pro 一次買斷，輸出時可移除摘享標記和下載 QR 碼。",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "摘享中型小工具顯示最近三張成品、輸出時間和本機歷史數量",
    "摘享裁剪宣传图": "摘享裁切宣傳圖",
    "摘享标注宣传图": "摘享標註宣傳圖",
    "摘享分享宣传图": "摘享分享宣傳圖",
    "跳到主要内容": "跳到主要內容",
    "摘享": "摘享",
    "产品体验": "產品體驗",
    "操作演示": "操作示範",
    "实用功能": "實用功能",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "摘出重點，分享所想。裁切、標註、遮擋隱私，編輯後直接分享。",
    "轻松裁剪，": "輕鬆裁剪，",
    "分享一步到位。": "分享一步到位。",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "框選需要的部分，加入箭頭或文字，再透過系統分享面板傳到常用 App。無需先儲存圖片、再到相簿尋找。",
    "裁得顺手，分享轻松。": "裁得順手，分享輕鬆。",
    "单指，选出重点": "單指，選出重點",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "拖動框選、移動選取區域，或拖動邊線微調。一個手指就能完成。",
    "标注，一眼看懂": "標註，一眼看懂",
    "箭头、文字、涂鸦，把想说的标清楚。": "箭頭、文字、塗鴉，把想說的標清楚。",
    "直接分享，相册不留图": "直接分享，相簿不留圖",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "用快速截圖擷取、編輯後直接分享，原圖和分享圖都不會自動存入相簿。只有你選擇儲存，圖片才會寫入相簿。",
    "功能亮点": "功能亮點",
    "使用方式": "使用方式",
    "为 iPhone 而做的截图工具": "為 iPhone 打造的截圖工具",
    "截图，": "截圖，",
    "只发重点。": "只傳重點。",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "看到值得分享的內容，直接框選、標註、傳送。少一點來回切換，多一點一目瞭然。",
    "看看怎么用": "看看怎麼用",
    "即将登陆 App Store": "即將登陸 App Store",
    "原生 iOS 应用": "原生 iOS App",
    "看看真实操作": "看看實際操作",
    "截取、裁剪、": "擷取、裁剪、",
    "直接发到聊天。": "直接傳到聊天。",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "擷取螢幕後框選重點，再透過 WhatsApp 傳出。一個連貫的流程，讓分享更迅速。",
    "截取": "擷取",
    "裁剪": "裁剪",
    "分享": "分享",
    "点击查看高清原图 ↗": "點選檢視高解析度原圖 ↗",
    "向下探索": "向下探索",
    "把复杂留在身后": "把繁瑣留在身後",
    "从整张屏幕，": "從整張螢幕，",
    "到": "到",
    "真正想说的那一点。": "真正想說的那一點。",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "不必先把截圖存進相簿，再打開聊天 App 尋找圖片。摘享把裁剪和說明放在同一個順手的流程，讓資訊剛剛好。",
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
    "摘享，返回顶部": "摘享，返回頂部",
    "页面导航": "頁面導覽",
    "摘享 App 当前首页预览": "摘享 App 目前首頁預覽",
    "摘享 App 当前首页预览与操作演示": "摘享 App 目前首頁預覽與操作示範",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "摘享操作示範：截圖、裁剪並分享到聊天 App",
    "打开高清首页截图": "開啟高解析度首頁截圖",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "摘享首頁：截圖、框選與分享流程，極速截圖設定、範例、照片、拍照和貼上編輯入口",
    "打开高清编辑器截图": "開啟高解析度編輯器截圖",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "摘享編輯器：原圖裁剪、標註、儲存至相簿與分享操作"
  },
  "ja": {
    "最近摘图，桌面一点即达。": "最近の書き出しを、ホーム画面から。",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "共有や保存のあと、ウィジェットに最新の1枚または3枚が表示されます。画像をタップして編集を続けられます。",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "最近の書き出しウィジェットは無料です。Pro を買い切りで購入すると、ClipShare のマークやダウンロード用 QR コードなしで書き出せます。",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "直近3枚の画像と書き出し時刻、端末内の履歴件数を表示する ClipShare の中サイズウィジェット",
    "摘享裁剪宣传图": "ClipShare の切り取りプレビュー",
    "摘享标注宣传图": "ClipShare の注釈プレビュー",
    "摘享分享宣传图": "ClipShare の共有プレビュー",
    "跳到主要内容": "メインコンテンツへ移動",
    "摘享": "ClipShare",
    "产品体验": "使い心地",
    "操作演示": "デモ",
    "实用功能": "機能",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "伝えたい部分を切り取って共有。切り取り、注釈、機密情報の塗りつぶしから共有まで、ひとつの流れで。",
    "轻松裁剪，": "手軽に切り取り、",
    "分享一步到位。": "そのまま共有。",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "必要な部分を切り取り、矢印やテキストを追加して、iOS の共有シートからいつものアプリへ。写真に保存して探し直す手間はありません。",
    "裁得顺手，分享轻松。": "切り取りも、共有も、手軽に。",
    "单指，选出重点": "1本指で、必要な部分を。",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "ドラッグして範囲を選び、そのまま移動。端を動かして微調整まで、1本指で操作できます。",
    "标注，一眼看懂": "書き込めば、ひと目で伝わる。",
    "箭头、文字、涂鸦，把想说的标清楚。": "矢印、テキスト、描画で、伝えたいことをはっきりと。",
    "直接分享，相册不留图": "直接共有。写真を増やさずに。",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "クイック撮影で撮って、編集して、そのまま共有。元画像も共有画像も、写真に自動保存されません。保存を選んだときだけ写真に追加されます。",
    "功能亮点": "主な機能",
    "使用方式": "使い方",
    "为 iPhone 而做的截图工具": "iPhone のためのスクリーンショットツール",
    "截图，": "スクショを、",
    "只发重点。": "必要な分だけ。",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "共有したいものを見つけたら、切り取り、書き込んで送るだけ。アプリの切り替えを減らして、ひと目で伝わる画像に。",
    "看看怎么用": "使い方を見る",
    "即将登陆 App Store": "App Store で近日公開",
    "原生 iOS 应用": "ネイティブ iOS アプリ",
    "看看真实操作": "実際の操作を見る",
    "截取、裁剪、": "撮影して、切り取って、",
    "直接发到聊天。": "チャットへ直接共有。",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "画面を撮影し、必要な部分を切り取って WhatsApp へ。ひとつの流れで、もっとすばやく共有できます。",
    "截取": "撮影",
    "裁剪": "切り取り",
    "分享": "共有",
    "点击查看高清原图 ↗": "タップして高解像度の画像を見る ↗",
    "向下探索": "スクロールして見る",
    "把复杂留在身后": "余計な手間を省いて",
    "从整张屏幕，": "画面全体から、",
    "到": "必要な",
    "真正想说的那一点。": "伝えたい部分だけに。",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "スクリーンショットを写真に保存して、チャットアプリで探す必要はありません。ClipShare は切り取りと注釈をひとつの流れにまとめ、ちょうどいい情報だけを届けます。",
    "一步聚焦": "すぐに焦点を合わせる",
    "指尖框选，": "指先で囲めば、",
    "重点自然出现。": "大切な部分が際立つ。",
    "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "切り取り範囲を自由に調整し、必要に応じて矢印、テキスト、描画を追加。編集が終わったら、iOS の共有シートを直接開けます。",
    "从截图到分享，保持连贯": "撮影から共有まで、ひと続きに",
    "选出重点": "必要な部分を選ぶ",
    "随手标注": "手軽に書き込む",
    "恰到好处的工具": "必要なツールだけを",
    "功能不喧哗，": "操作はシンプルに、",
    "表达更清楚。": "伝わりやすく。",
    "只为分享截图时真正需要的几步，设计每一次操作。": "スクリーンショットの共有に必要な操作を、使いやすくまとめました。",
    "自由框选": "自由な切り取り",
    "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "端やハンドルをドラッグして、必要な部分を正確に選択。範囲の移動や2本指での調整もできます。",
    "标注重点": "注釈で強調",
    "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "テキスト、矢印、描画、ピクセル化、ぼかし、単色の塗りつぶしを使い分けられます。",
    "留住隐私": "プライバシーに配慮",
    "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "画像はデバイス内で処理されます。クイック撮影では元画像を写真に自動保存しません。",
    "直接分享": "直接共有",
    "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "iOS の共有シートから、デバイスで利用できるチャットや共有アプリに送れます。",
    "一气呵成": "ひとつの流れで完了",
    "三步之间，": "3つのステップで、",
    "想法已经发出。": "もう共有できる。",
    "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "インストール後にショートカットを一度設定すれば、必要なときにすぐ始められます。",
    "查看预制快捷指令": "設定済みショートカットを見る",
    "截取屏幕": "画面を撮影",
    "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "クイック撮影のショートカットを実行するか、背面タップやアクションボタンに割り当てます。",
    "圈出重点": "必要な部分を囲む",
    "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "スクリーンショットがエディタで開いたら、必要な範囲を選び、説明の追加や情報の塗りつぶしができます。",
    "分享出去": "送る",
    "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "共有をタップしてインストール済みアプリを選択。編集済み画像を自分で保存することもできます。",
    "下一张截图，": "次のスクリーンショットは、",
    "只留下重要的。": "大切な部分だけ。",
    "把重点，说清楚。": "伝えたいことを、はっきりと。",
    "隐私政策": "プライバシーポリシー",
    "使用条款": "利用規約",
    "支持": "サポート",
    "摘享，返回顶部": "ClipShare、ページの先頭へ",
    "页面导航": "ページナビゲーション",
    "摘享 App 当前首页预览": "ClipShare の現在のホーム画面プレビュー",
    "摘享 App 当前首页预览与操作演示": "ClipShare の現在のホーム画面と操作デモ",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "ClipShare の操作デモ：撮影、切り取り、チャットアプリへの共有",
    "打开高清首页截图": "ホーム画面を高解像度で開く",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "ClipShare のホーム画面：撮影・切り取り・共有の案内、クイック撮影の設定、サンプル、写真、カメラ、貼り付けて編集の各入口",
    "打开高清编辑器截图": "エディタ画面を高解像度で開く",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "ClipShare のエディタ：切り取り、注釈、写真への保存、共有"
  },
  "ko": {
    "最近摘图，桌面一点即达。": "최근 내보낸 이미지를 홈 화면에서.",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "공유하거나 저장하면 위젯에 최근 이미지 1장 또는 3장이 표시됩니다. 이미지를 탭해 편집을 이어가세요.",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "최근 내보내기 위젯은 무료입니다. Pro를 한 번 구매하면 ClipShare 표시와 다운로드 QR 코드 없이 내보낼 수 있습니다.",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "최근 이미지 3장과 내보낸 시간, 기기에 저장된 기록 수를 보여 주는 ClipShare 중간 크기 위젯",
    "摘享裁剪宣传图": "ClipShare 자르기 미리보기",
    "摘享标注宣传图": "ClipShare 표시 기능 미리보기",
    "摘享分享宣传图": "ClipShare 공유 미리보기",
    "跳到主要内容": "본문으로 건너뛰기",
    "摘享": "ClipShare",
    "产品体验": "사용 경험",
    "操作演示": "사용 영상",
    "实用功能": "주요 기능",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "필요한 부분만 골라 공유하세요. 자르고 표시하고 민감한 정보를 가린 뒤 편집기에서 바로 보낼 수 있습니다.",
    "轻松裁剪，": "간편하게 자르고,",
    "分享一步到位。": "바로 공유하세요.",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "필요한 부분을 자르고 화살표나 텍스트를 추가한 뒤 iOS 공유 시트로 자주 쓰는 앱에 보내세요. 사진 앱에 저장하고 다시 찾을 필요가 없습니다.",
    "裁得顺手，分享轻松。": "자르기도 공유도 간편하게.",
    "单指，选出重点": "한 손가락으로 필요한 부분만.",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "드래그로 영역을 선택하고 옮기거나 가장자리를 끌어 세밀하게 조절하세요. 한 손가락이면 됩니다.",
    "标注，一眼看懂": "표시하면 한눈에 전달됩니다.",
    "箭头、文字、涂鸦，把想说的标清楚。": "화살표, 텍스트, 그리기로 전달할 내용을 분명하게 표시하세요.",
    "直接分享，相册不留图": "바로 공유하고 사진 앱은 깔끔하게.",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "빠른 캡처로 찍고 편집한 뒤 바로 공유하세요. 원본과 공유 이미지는 사진 앱에 자동 저장되지 않습니다. 직접 저장을 선택할 때만 사진 앱에 추가됩니다.",
    "功能亮点": "주요 기능",
    "使用方式": "사용 방법",
    "为 iPhone 而做的截图工具": "iPhone을 위한 스크린샷 도구",
    "截图，": "캡처하고,",
    "只发重点。": "필요한 만큼만.",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "공유할 내용을 찾았다면 자르고 표시해서 보내세요. 앱을 오가는 시간을 줄이고 한눈에 전달하세요.",
    "看看怎么用": "사용 방법 보기",
    "即将登陆 App Store": "App Store 출시 예정",
    "原生 iOS 应用": "네이티브 iOS 앱",
    "看看真实操作": "실제 사용 과정",
    "截取、裁剪、": "캡처하고 자른 뒤,",
    "直接发到聊天。": "채팅 앱으로 바로 공유.",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "화면을 캡처하고 필요한 부분을 자른 뒤 WhatsApp으로 보내세요. 이어지는 흐름으로 더 빠르게 공유할 수 있습니다.",
    "截取": "캡처",
    "裁剪": "자르기",
    "分享": "공유",
    "点击查看高清原图 ↗": "탭하여 고해상도 원본 보기 ↗",
    "向下探索": "아래로 더 보기",
    "把复杂留在身后": "번거로운 단계는 줄이고",
    "从整张屏幕，": "전체 화면에서,",
    "到": "정말",
    "真正想说的那一点。": "전하고 싶은 부분만.",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "스크린샷을 사진 앱에 저장한 뒤 채팅 앱에서 다시 찾을 필요가 없습니다. ClipShare에서 자르기와 표시를 한 번에 마치고 필요한 정보만 전달하세요.",
    "一步聚焦": "한 번에 필요한 부분으로",
    "指尖框选，": "손끝으로 선택하면,",
    "重点自然出现。": "핵심이 드러납니다.",
    "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "자르기 영역을 자유롭게 조절하고 필요하면 화살표, 텍스트, 그리기를 추가하세요. 편집을 마치면 iOS 공유 시트를 바로 열 수 있습니다.",
    "从截图到分享，保持连贯": "캡처부터 공유까지 끊김 없이",
    "选出重点": "필요한 부분 선택",
    "随手标注": "간편하게 표시",
    "恰到好处的工具": "꼭 필요한 도구만",
    "功能不喧哗，": "조작은 간결하게,",
    "表达更清楚。": "내용은 분명하게.",
    "只为分享截图时真正需要的几步，设计每一次操作。": "스크린샷을 공유할 때 필요한 단계에 맞춰 모든 동작을 설계했습니다.",
    "自由框选": "자유롭게 자르기",
    "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "가장자리와 조절점을 끌어 필요한 부분만 정확하게 선택하세요. 영역을 이동하거나 두 손가락으로 조절할 수도 있습니다.",
    "标注重点": "핵심 표시",
    "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "텍스트, 화살표, 그리기, 픽셀화, 흐림, 단색 가리기를 필요에 맞게 사용하세요.",
    "留住隐私": "개인정보 보호",
    "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "이미지는 기기에서 처리됩니다. 빠른 캡처는 원본을 사진 앱에 자동 저장하지 않습니다.",
    "直接分享": "바로 공유",
    "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "iOS 공유 시트를 통해 기기에서 사용할 수 있는 채팅·공유 앱으로 보내세요.",
    "一气呵成": "한 흐름으로 완료",
    "三步之间，": "세 단계면,",
    "想法已经发出。": "공유 준비 끝.",
    "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "앱 설치 후 단축어를 한 번만 설정하면 필요할 때 바로 시작할 수 있습니다.",
    "查看预制快捷指令": "미리 만든 단축어 보기",
    "截取屏幕": "화면 캡처",
    "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "빠른 캡처 단축어를 실행하거나 뒷면 탭 또는 동작 버튼에 지정하세요.",
    "圈出重点": "필요한 부분 선택",
    "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "스크린샷이 편집기로 열리면 필요한 영역을 선택하고 설명을 추가하거나 정보를 가리세요.",
    "分享出去": "공유하기",
    "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "공유를 탭해 설치된 앱을 선택하세요. 편집한 이미지를 직접 저장할 수도 있습니다.",
    "下一张截图，": "다음 스크린샷은,",
    "只留下重要的。": "중요한 부분만.",
    "把重点，说清楚。": "전하고 싶은 내용을 분명하게.",
    "隐私政策": "개인정보 처리방침",
    "使用条款": "이용 약관",
    "支持": "지원",
    "摘享，返回顶部": "ClipShare, 맨 위로",
    "页面导航": "페이지 탐색",
    "摘享 App 当前首页预览": "ClipShare 현재 홈 화면 미리보기",
    "摘享 App 当前首页预览与操作演示": "ClipShare 현재 홈 화면 및 사용 영상",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "ClipShare 사용 영상: 캡처, 자르기, 채팅 앱으로 공유",
    "打开高清首页截图": "홈 화면 고해상도 이미지 열기",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "ClipShare 홈 화면: 캡처·자르기·공유 안내, 빠른 캡처 설정, 샘플, 사진, 카메라, 붙여넣기 편집",
    "打开高清编辑器截图": "편집기 고해상도 이미지 열기",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "ClipShare 편집기: 자르기, 표시, 사진에 저장, 공유"
  },
  "id": {
    "最近摘图，桌面一点即达。": "Ekspor terbaru dalam sekali ketuk.",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "Setelah dibagikan atau disimpan, widget menampilkan satu atau tiga hasil ekspor terakhir. Ketuk gambar untuk melanjutkan pengeditan.",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "Widget ekspor terbaru gratis. Beli Pro sekali untuk mengekspor tanpa tanda ClipShare atau kode QR unduhan.",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "Widget ClipShare ukuran sedang menampilkan tiga ekspor terbaru, waktu ekspor, dan jumlah riwayat lokal",
    "摘享裁剪宣传图": "Pratinjau pemotongan ClipShare",
    "摘享标注宣传图": "Pratinjau anotasi ClipShare",
    "摘享分享宣传图": "Pratinjau berbagi ClipShare",
    "跳到主要内容": "Lewati ke konten utama",
    "摘享": "ClipShare",
    "产品体验": "Pengalaman",
    "操作演示": "Demo",
    "实用功能": "Fitur",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "Ambil bagian penting, bagikan ceritanya. Potong, beri anotasi, tutupi informasi pribadi, lalu bagikan langsung dari editor.",
    "轻松裁剪，": "Potong dengan mudah.",
    "分享一步到位。": "Langsung bagikan.",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "Potong bagian yang diperlukan, tambahkan panah atau catatan, lalu kirim melalui lembar berbagi iOS. Tidak perlu menyimpan ke Foto dan mencarinya lagi.",
    "裁得顺手，分享轻松。": "Mudah dipotong. Mudah dibagikan.",
    "单指，选出重点": "Satu jari. Pilih bagian penting.",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "Seret untuk memilih, memindahkan area potong, atau menyesuaikan tepinya. Cukup satu jari.",
    "标注，一眼看懂": "Beri anotasi. Perjelas maksudnya.",
    "箭头、文字、涂鸦，把想说的标清楚。": "Tambahkan panah, teks, dan gambar agar maksud Anda lebih jelas.",
    "直接分享，相册不留图": "Bagikan langsung. Foto tetap rapi.",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "Tangkap, edit, dan bagikan dengan Tangkap Cepat. Gambar asli maupun hasil berbagi tidak otomatis disimpan ke Foto. Gambar disimpan hanya jika Anda memilihnya.",
    "功能亮点": "Fitur",
    "使用方式": "Cara kerja",
    "为 iPhone 而做的截图工具": "Alat tangkapan layar untuk iPhone",
    "截图，": "Tangkap.",
    "只发重点。": "Bagikan intinya.",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "Menemukan hal yang ingin dibagikan? Potong, beri tanda, lalu kirim. Lebih sedikit berganti aplikasi, pesan lebih jelas.",
    "看看怎么用": "Lihat cara pakainya",
    "即将登陆 App Store": "Segera di App Store",
    "原生 iOS 应用": "Aplikasi iOS native",
    "看看真实操作": "Lihat cara kerja nyata",
    "截取、裁剪、": "Tangkap. Potong.",
    "直接发到聊天。": "Langsung bagikan.",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "Tangkap layar, potong bagian penting, lalu kirim lewat WhatsApp. Alur yang lancar untuk berbagi lebih cepat.",
    "截取": "Tangkap",
    "裁剪": "Potong",
    "分享": "Bagikan",
    "点击查看高清原图 ↗": "Ketuk untuk melihat resolusi penuh ↗",
    "向下探索": "Gulir untuk menjelajah",
    "把复杂留在身后": "Tinggalkan langkah tambahan",
    "从整张屏幕，": "Dari seluruh layar,",
    "到": "ke",
    "真正想说的那一点。": "bagian yang penting.",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "Tidak perlu menyimpan tangkapan ke Foto lalu mencarinya di aplikasi chat. ClipShare menyatukan pemotongan dan anotasi dalam satu alur.",
    "一步聚焦": "Fokus dalam satu langkah",
    "指尖框选，": "Potong dengan sentuhan,",
    "重点自然出现。": "pertahankan fokus.",
    "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "Sesuaikan area potong dengan bebas. Tambahkan panah, teks, atau gambar bila perlu. Setelah selesai, bagikan melalui lembar berbagi iOS.",
    "从截图到分享，保持连贯": "Alur lancar dari tangkap ke berbagi",
    "选出重点": "Temukan bagian penting",
    "随手标注": "Beri anotasi",
    "恰到好处的工具": "Alat yang Anda perlukan saja",
    "功能不喧哗，": "Antarmuka sederhana,",
    "表达更清楚。": "pesan lebih jelas.",
    "只为分享截图时真正需要的几步，设计每一次操作。": "Setiap tindakan dirancang untuk langkah-langkah penting saat berbagi tangkapan layar.",
    "自由框选": "Pemotongan fleksibel",
    "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "Seret tepi dan pegangan untuk menyisakan bagian yang tepat. Pindahkan atau ubah ukuran pilihan dengan dua jari.",
    "标注重点": "Anotasi yang jelas",
    "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "Tambahkan teks, panah, gambar, pikselasi, buram, atau penutup warna solid sesuai kebutuhan.",
    "留住隐私": "Privasi tetap terjaga",
    "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "Gambar diproses di perangkat. Tangkap Cepat tidak otomatis menyimpan gambar asli ke Foto.",
    "直接分享": "Bagikan langsung",
    "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "Gunakan lembar berbagi iOS untuk mengirim hasil ke aplikasi chat dan berbagi yang tersedia.",
    "一气呵成": "Selesaikan dalam satu alur",
    "三步之间，": "Tiga langkah cepat,",
    "想法已经发出。": "langsung siap berbagi.",
    "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "Atur pintasan sekali setelah memasang aplikasi, lalu tangkap kapan saja diperlukan.",
    "查看预制快捷指令": "Lihat pintasan siap pakai",
    "截取屏幕": "Tangkap layar",
    "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "Jalankan pintasan Tangkap Cepat, atau tetapkan ke Ketuk Bagian Belakang atau Tombol Tindakan.",
    "圈出重点": "Potong bagian penting",
    "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "Setelah tangkapan terbuka di editor, pilih area penting dan tambahkan penjelasan atau tutupi detail.",
    "分享出去": "Kirimkan",
    "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "Ketuk Bagikan dan pilih aplikasi yang terpasang. Anda juga dapat menyimpan gambar hasil edit sendiri.",
    "下一张截图，": "Tangkapan layar berikutnya,",
    "只留下重要的。": "bagian penting saja.",
    "把重点，说清楚。": "Sampaikan dengan jelas.",
    "隐私政策": "Kebijakan Privasi",
    "使用条款": "Ketentuan Penggunaan",
    "支持": "Dukungan",
    "摘享，返回顶部": "ClipShare, kembali ke atas",
    "页面导航": "Navigasi halaman",
    "摘享 App 当前首页预览": "Pratinjau beranda aplikasi ClipShare saat ini",
    "摘享 App 当前首页预览与操作演示": "Beranda dan demo produk ClipShare saat ini",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "Demo ClipShare: tangkap, potong, dan bagikan ke aplikasi chat",
    "打开高清首页截图": "Buka gambar beranda resolusi penuh",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "Beranda ClipShare dengan panduan tangkap, potong, dan berbagi, pengaturan Tangkap Cepat, contoh, Foto, kamera, serta Tempel & Edit",
    "打开高清编辑器截图": "Buka gambar editor resolusi penuh",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "Editor ClipShare dengan potong, anotasi, Simpan ke Foto, dan Bagikan"
  },
  "th": {
    "最近摘图，桌面一点即达。": "เปิดรูปที่ส่งออกล่าสุดได้จากหน้าจอโฮม",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "เมื่อแชร์หรือบันทึกแล้ว วิดเจ็ตจะแสดงรูปล่าสุด 1 หรือ 3 รูป แตะรูปเพื่อแก้ไขต่อได้เลย",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "วิดเจ็ตรูปล่าสุดใช้ฟรี ซื้อ Pro ครั้งเดียวเพื่อส่งออกโดยไม่มีเครื่องหมาย ClipShare และคิวอาร์โค้ดดาวน์โหลด",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "วิดเจ็ต ClipShare ขนาดกลางแสดงรูปล่าสุด 3 รูป เวลาที่ส่งออก และจำนวนรายการในประวัติบนเครื่อง",
    "摘享裁剪宣传图": "ตัวอย่างครอบตัดใน ClipShare",
    "摘享标注宣传图": "ตัวอย่างคำอธิบายใน ClipShare",
    "摘享分享宣传图": "ตัวอย่างแชร์ใน ClipShare",
    "跳到主要内容": "ข้ามไปเนื้อหาหลัก",
    "摘享": "ClipShare",
    "产品体验": "ประสบการณ์",
    "操作演示": "สาธิต",
    "实用功能": "คุณสมบัติ",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "เลือกเฉพาะจุดสำคัญแล้วแชร์ ครอบตัด ใส่คำอธิบาย ปิดข้อมูลส่วนตัว แล้วแชร์จากตัวแก้ไขได้ทันที",
    "轻松裁剪，": "ครอบตัดง่าย",
    "分享一步到位。": "แชร์ได้ทันที",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "ครอบตัดส่วนที่ต้องการ เพิ่มลูกศรหรือข้อความ แล้วส่งผ่านแผ่นแชร์ iOS ไม่ต้องบันทึกในรูปภาพแล้วหาใหม่",
    "裁得顺手，分享轻松。": "ครอบตัดง่าย แชร์สะดวก",
    "单指，选出重点": "นิ้วเดียว เลือกจุดสำคัญ",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "ลากเพื่อเลือก ย้ายกรอบ หรือปรับขอบละเอียด ใช้นิ้วเดียวก็ทำได้",
    "标注，一眼看懂": "ใส่คำอธิบาย ให้เข้าใจทันที",
    "箭头、文字、涂鸦，把想说的标清楚。": "เพิ่มลูกศร ข้อความ และเส้นวาด เพื่อสื่อจุดสำคัญให้ชัดเจน",
    "直接分享，相册不留图": "แชร์ทันที ไม่เพิ่มภาพในคลัง",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "ใช้จับภาพด่วน จับภาพ แก้ไข แล้วแชร์ ทั้งภาพต้นฉบับและภาพที่แชร์จะไม่บันทึกในรูปภาพอัตโนมัติ บันทึกเมื่อคุณเลือกเท่านั้น",
    "功能亮点": "คุณสมบัติ",
    "使用方式": "วิธีใช้งาน",
    "为 iPhone 而做的截图工具": "เครื่องมือภาพหน้าจอสำหรับ iPhone",
    "截图，": "จับภาพ",
    "只发重点。": "แชร์เฉพาะส่วนสำคัญ",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "เจอสิ่งที่อยากแชร์? ครอบตัด ใส่คำอธิบาย แล้วส่ง ลดการสลับแอป สื่อสารได้ชัดเจน",
    "看看怎么用": "ดูวิธีใช้งาน",
    "即将登陆 App Store": "เร็วๆ นี้บน App Store",
    "原生 iOS 应用": "แอป iOS แบบเนทีฟ",
    "看看真实操作": "ดูการใช้งานจริง",
    "截取、裁剪、": "จับภาพ ครอบตัด",
    "直接发到聊天。": "แชร์ได้ทันที",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "จับภาพหน้าจอ ครอบตัดส่วนสำคัญ แล้วส่งผ่าน WhatsApp ขั้นตอนต่อเนื่อง แชร์ได้เร็วขึ้น",
    "截取": "จับภาพ",
    "裁剪": "ครอบตัด",
    "分享": "แชร์",
    "点击查看高清原图 ↗": "แตะเพื่อดูภาพเต็มความละเอียด ↗",
    "向下探索": "เลื่อนดูเพิ่มเติม",
    "把复杂留在身后": "ลดขั้นตอนที่ไม่จำเป็น",
    "从整张屏幕，": "จากทั้งหน้าจอ",
    "到": "สู่",
    "真正想说的那一点。": "เฉพาะส่วนสำคัญ",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "ไม่ต้องบันทึกภาพหน้าจอในรูปภาพแล้วไปหาในแอปแชท ClipShare รวมการครอบตัดและคำอธิบายไว้ในขั้นตอนเดียว",
    "一步聚焦": "เน้นจุดสำคัญในขั้นเดียว",
    "指尖框选，": "ครอบตัดด้วยปลายนิ้ว",
    "重点自然出现。": "เก็บเฉพาะจุดสำคัญ",
    "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "ปรับกรอบครอบตัดได้อิสระ เพิ่มลูกศร ข้อความ หรือเส้นวาดตามต้องการ เสร็จแล้วแชร์ผ่านแผ่นแชร์ iOS",
    "从截图到分享，保持连贯": "จากจับภาพถึงแชร์อย่างต่อเนื่อง",
    "选出重点": "เลือกจุดสำคัญ",
    "随手标注": "ใส่คำอธิบาย",
    "恰到好处的工具": "เครื่องมือที่จำเป็นเท่านั้น",
    "功能不喧哗，": "เครื่องมือน้อยขั้นตอน",
    "表达更清楚。": "สื่อสารชัดเจนขึ้น",
    "只为分享截图时真正需要的几步，设计每一次操作。": "ทุกการทำงานออกแบบเพื่อขั้นตอนสำคัญในการแชร์ภาพหน้าจอ",
    "自由框选": "ครอบตัดอิสระ",
    "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "ลากขอบและจุดจับเพื่อเก็บส่วนที่ต้องการ ใช้สองนิ้วย้ายหรือปรับขนาด",
    "标注重点": "คำอธิบายชัดเจน",
    "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "เพิ่มข้อความ ลูกศร เส้นวาด พิกเซล เบลอ หรือสีทึบได้ตามต้องการ",
    "留住隐私": "คำนึงถึงความเป็นส่วนตัว",
    "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "ประมวลผลภาพในอุปกรณ์ จับภาพด่วนไม่บันทึกต้นฉบับในรูปภาพอัตโนมัติ",
    "直接分享": "แชร์ได้ทันที",
    "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "ใช้แผ่นแชร์ iOS ส่งผลลัพธ์ไปยังแอปแชทและแอปแชร์ที่มี",
    "一气呵成": "ทำครบในขั้นตอนต่อเนื่อง",
    "三步之间，": "สามขั้นตอนสั้นๆ",
    "想法已经发出。": "ก็พร้อมแชร์",
    "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "ตั้งค่าคำสั่งลัดครั้งเดียวหลังติดตั้งแอป แล้วจับภาพได้เมื่อต้องการ",
    "查看预制快捷指令": "ดูคำสั่งลัดสำเร็จรูป",
    "截取屏幕": "จับภาพหน้าจอ",
    "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "เรียกคำสั่งลัดจับภาพด่วน หรือผูกกับแตะด้านหลังหรือปุ่มแอ็คชั่น",
    "圈出重点": "ครอบตัดส่วนสำคัญ",
    "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "เมื่อภาพเปิดในตัวแก้ไข เลือกส่วนสำคัญ ใส่คำอธิบายหรือปิดรายละเอียด",
    "分享出去": "ส่งออกไป",
    "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "แตะแชร์แล้วเลือกแอปที่ติดตั้ง หรือเลือกบันทึกภาพที่แก้ไขเองได้",
    "下一张截图，": "ภาพหน้าจอครั้งต่อไป",
    "只留下重要的。": "เหลือเฉพาะส่วนสำคัญ",
    "把重点，说清楚。": "สื่อจุดสำคัญให้ชัดเจน",
    "隐私政策": "นโยบายความเป็นส่วนตัว",
    "使用条款": "ข้อกำหนดการใช้งาน",
    "支持": "การสนับสนุน",
    "摘享，返回顶部": "ClipShare กลับด้านบน",
    "页面导航": "เมนูหน้าเว็บ",
    "摘享 App 当前首页预览": "ตัวอย่างหน้าหลักปัจจุบันของ ClipShare",
    "摘享 App 当前首页预览与操作演示": "หน้าหลักและสาธิตปัจจุบันของ ClipShare",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "สาธิต ClipShare: จับภาพ ครอบตัด แล้วแชร์ไปแอปแชท",
    "打开高清首页截图": "เปิดภาพหน้าหลักเต็มความละเอียด",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "หน้าหลัก ClipShare พร้อมคำแนะนำจับภาพ ครอบตัด แชร์ ตั้งค่าจับภาพด่วน ตัวอย่าง รูปภาพ กล้อง และวางและแก้ไข",
    "打开高清编辑器截图": "เปิดภาพตัวแก้ไขเต็มความละเอียด",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "ตัวแก้ไข ClipShare พร้อมครอบตัด คำอธิบาย บันทึกในรูปภาพ และแชร์"
  },
  "ar": {
    "最近摘图，桌面一点即达。": "آخر الصور المصدّرة على شاشتك الرئيسية.",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "بعد المشاركة أو الحفظ، تعرض الأداة آخر صورة صدّرتها أو آخر ثلاث صور. اضغط على صورة لمتابعة تعديلها.",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "أداة آخر الصور المصدّرة مجانية. يتيح شراء Pro مرة واحدة التصدير من دون علامة ClipShare أو رمز QR للتنزيل.",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "تعرض أداة ClipShare المتوسطة آخر ثلاث صور مصدّرة وأوقات تصديرها وعدد عناصر السجل المحلي",
    "摘享裁剪宣传图": "معاينة الاقتصاص في ClipShare",
    "摘享标注宣传图": "معاينة التعليقات في ClipShare",
    "摘享分享宣传图": "معاينة المشاركة في ClipShare",
    "跳到主要内容": "الانتقال إلى المحتوى الرئيسي",
    "摘享": "ClipShare",
    "产品体验": "التجربة",
    "操作演示": "عرض توضيحي",
    "实用功能": "الميزات",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "حدد المهم وشاركه. اقتص وعلّق وأخفِ التفاصيل الخاصة، ثم شارك مباشرة من المحرر.",
    "轻松裁剪，": "اقتص بسهولة،",
    "分享一步到位。": "وشارك مباشرة.",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "اقتص الجزء الذي تريده، وأضف سهمًا أو ملاحظة، وأرسله عبر قائمة المشاركة في iOS. دون حفظه في الصور والبحث عنه مجددًا.",
    "裁得顺手，分享轻松。": "اقتصاص ومشاركة بسهولة.",
    "单指，选出重点": "بإصبع واحد، حدد المهم.",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "اسحب للتحديد أو لنقل الاقتصاص أو لضبط حوافه بدقة، بإصبع واحد.",
    "标注，一眼看懂": "علّق لتوضح فكرتك.",
    "箭头、文字、涂鸦，把想说的标清楚。": "أضف الأسهم والنصوص والرسوم لتوضيح ما تريد.",
    "直接分享，相册不留图": "شارك مباشرة وأبقِ الصور مرتبة.",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "التقط وعدّل وشارك بالالتقاط السريع. لا تُحفظ الصورة الأصلية أو المشتركة تلقائيًا في الصور. تُحفظ فقط عندما تختار ذلك.",
    "功能亮点": "الميزات",
    "使用方式": "طريقة الاستخدام",
    "为 iPhone 而做的截图工具": "أداة لقطات شاشة مصممة لـ iPhone",
    "截图，": "التقط الشاشة،",
    "只发重点。": "وشارك المهم.",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "وجدت شيئًا يستحق المشاركة؟ اقتصه وعلّق عليه وأرسله. تنقل أقل بين التطبيقات، ووضوح أكبر.",
    "看看怎么用": "شاهد طريقة الاستخدام",
    "即将登陆 App Store": "قريبًا على App Store",
    "原生 iOS 应用": "تطبيق أصلي لـ iOS",
    "看看真实操作": "شاهد الاستخدام الفعلي",
    "截取、裁剪、": "التقط واقتص،",
    "直接发到聊天。": "وشارك مباشرة.",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "التقط الشاشة واقتص المهم وأرسله عبر WhatsApp، بخطوات مترابطة لمشاركة أسرع.",
    "截取": "التقاط",
    "裁剪": "اقتصاص",
    "分享": "مشاركة",
    "点击查看高清原图 ↗": "اضغط لعرض الدقة الكاملة ↗",
    "向下探索": "مرّر للاستكشاف",
    "把复杂留在身后": "تجاوز الخطوات الزائدة",
    "从整张屏幕，": "من الشاشة كاملة،",
    "到": "إلى",
    "真正想说的那一点。": "الجزء المهم.",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "لا حاجة لحفظ اللقطة في الصور ثم البحث عنها في تطبيق دردشة. يجمع ClipShare الاقتصاص والتعليق في مسار واحد.",
    "一步聚焦": "ركّز بخطوة واحدة",
    "指尖框选，": "اقتص بلمسة،",
    "重点自然出现。": "واحتفظ بالمهم.",
    "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "اضبط الاقتصاص بحرية وأضف الأسهم أو النص أو الرسم عند الحاجة، ثم شارك عبر قائمة مشاركة iOS.",
    "从截图到分享，保持连贯": "مسار سلس من الالتقاط إلى المشاركة",
    "选出重点": "حدد المهم",
    "随手标注": "أضف تعليقًا",
    "恰到好处的工具": "الأدوات التي تحتاجها فقط",
    "功能不喧哗，": "واجهة أبسط،",
    "表达更清楚。": "ووضوح أكبر.",
    "只为分享截图时真正需要的几步，设计每一次操作。": "صُممت كل خطوة لما تحتاجه فعلًا عند مشاركة لقطة شاشة.",
    "自由框选": "اقتصاص مرن",
    "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "اسحب الحواف والمقابض للاحتفاظ بما تحتاجه بدقة، وانقل التحديد أو غيّر حجمه بإصبعين.",
    "标注重点": "تعليقات واضحة",
    "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "أضف نصوصًا أو أسهمًا أو رسومًا أو بكسلة أو تمويهًا أو طمسًا مصمتًا حسب حاجتك.",
    "留住隐私": "الخصوصية أولًا",
    "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "تُعالج الصور على جهازك. لا يحفظ الالتقاط السريع الأصل تلقائيًا في الصور.",
    "直接分享": "مشاركة مباشرة",
    "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "استخدم قائمة مشاركة iOS لإرسال النتيجة إلى تطبيقات الدردشة والمشاركة المتاحة.",
    "一气呵成": "أنجزه في مسار واحد",
    "三步之间，": "ثلاث خطوات سريعة،",
    "想法已经发出。": "وتصبح جاهزًا للمشاركة.",
    "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "أعدّ الاختصار مرة واحدة بعد التثبيت، ثم التقط متى احتجت.",
    "查看预制快捷指令": "عرض الاختصار الجاهز",
    "截取屏幕": "التقاط الشاشة",
    "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "شغّل اختصار الالتقاط السريع أو عيّنه للضغط من الخلف أو زر الإجراءات.",
    "圈出重点": "اقتصاص المهم",
    "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "عند فتح اللقطة في المحرر، حدد الجزء المطلوب وأضف توضيحًا أو أخفِ التفاصيل.",
    "分享出去": "أرسلها",
    "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "اضغط مشاركة واختر تطبيقًا مثبتًا. يمكنك أيضًا حفظ الصورة المعدلة بنفسك.",
    "下一张截图，": "لقطتك التالية،",
    "只留下重要的。": "للمهم فقط.",
    "把重点，说清楚。": "أوضح ما تريد.",
    "隐私政策": "سياسة الخصوصية",
    "使用条款": "شروط الاستخدام",
    "支持": "الدعم",
    "摘享，返回顶部": "ClipShare، العودة للأعلى",
    "页面导航": "التنقل في الصفحة",
    "摘享 App 当前首页预览": "معاينة الشاشة الرئيسية الحالية لـ ClipShare",
    "摘享 App 当前首页预览与操作演示": "الشاشة الرئيسية والعرض الحالي لـ ClipShare",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "عرض ClipShare: التقاط واقتصاص ومشاركة إلى تطبيق دردشة",
    "打开高清首页截图": "فتح صورة الشاشة الرئيسية بالدقة الكاملة",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "شاشة ClipShare الرئيسية مع إرشادات الالتقاط والاقتصاص والمشاركة وإعداد الالتقاط السريع والمثال والصور والكاميرا واللصق والتعديل",
    "打开高清编辑器截图": "فتح صورة المحرر بالدقة الكاملة",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "محرر ClipShare مع الاقتصاص والتعليقات والحفظ في الصور والمشاركة"
  },
  "es": {
    "最近摘图，桌面一点即达。": "Tus últimas exportaciones, a un toque.",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "Después de compartir o guardar, el widget muestra la última exportación o las tres más recientes. Toca una imagen para seguir editándola.",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "El widget de exportaciones recientes es gratis. Con una compra única de Pro, exporta sin la marca de ClipShare ni el código QR de descarga.",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "El widget mediano de ClipShare muestra las tres últimas exportaciones, sus horas y el número de elementos del historial local",
    "摘享裁剪宣传图": "Vista previa de recorte de ClipShare",
    "摘享标注宣传图": "Vista previa de anotaciones de ClipShare",
    "摘享分享宣传图": "Vista previa de compartir con ClipShare",
    "跳到主要内容": "Ir al contenido principal",
    "摘享": "ClipShare",
    "产品体验": "Experiencia",
    "操作演示": "Demo",
    "实用功能": "Funciones",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "Quédate con lo importante. Comparte la imagen. Recorta, anota, oculta datos privados y comparte desde el editor.",
    "轻松裁剪，": "Recorta fácilmente.",
    "分享一步到位。": "Envíalo al chat.",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "Recorta lo que necesites, añade una flecha o nota y envía desde la hoja de compartir de iOS. Sin guardar en Fotos ni buscar la imagen.",
    "裁得顺手，分享轻松。": "Fácil de recortar. Fácil de compartir.",
    "单指，选出重点": "Un dedo. Selecciona lo importante.",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "Arrastra para seleccionar, mueve el recorte o ajusta sus bordes. Todo con un dedo.",
    "标注，一眼看懂": "Añade anotaciones. Aclara el mensaje.",
    "箭头、文字、涂鸦，把想说的标清楚。": "Añade flechas, texto y dibujos para dejar claro lo que quieres decir.",
    "直接分享，相册不留图": "Comparte directamente. No llenes Fotos.",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "Captura, edita y comparte con Captura rápida. Ni el original ni la imagen compartida se guardan automáticamente en Fotos. Guarda solo cuando quieras.",
    "功能亮点": "Funciones",
    "使用方式": "Cómo funciona",
    "为 iPhone 而做的截图工具": "Una herramienta de capturas para iPhone",
    "截图，": "Captura.",
    "只发重点。": "Comparte lo importante.",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "¿Algo que compartir? Recorta, anota y envía. Menos cambios entre apps y un mensaje más claro.",
    "看看怎么用": "Ver cómo funciona",
    "即将登陆 App Store": "Próximamente en App Store",
    "原生 iOS 应用": "App nativa de iOS",
    "看看真实操作": "Ver el proceso real",
    "截取、裁剪、": "Captura. Recorta.",
    "直接发到聊天。": "Envíalo al chat.",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "Captura la pantalla, recorta lo esencial y envíalo por WhatsApp. Un proceso fluido para compartir más rápido.",
    "截取": "Capturar",
    "裁剪": "Recortar",
    "分享": "Compartir",
    "点击查看高清原图 ↗": "Toca para ver a resolución completa ↗",
    "向下探索": "Desplázate para explorar",
    "把复杂留在身后": "Deja atrás los pasos de más",
    "从整张屏幕，": "De toda la pantalla,",
    "到": "a",
    "真正想说的那一点。": "la parte importante.",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "No hace falta guardar una captura en Fotos y buscarla después en el chat. ClipShare une recorte y anotaciones en un mismo proceso.",
    "一步聚焦": "Enfoca en un paso",
    "指尖框选，": "Recorta con un toque,",
    "重点自然出现。": "conserva lo importante.",
    "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "Ajusta el recorte libremente. Añade flechas, texto o dibujos cuando haga falta. Al terminar, comparte desde la hoja de compartir de iOS.",
    "从截图到分享，保持连贯": "De la captura al envío sin interrupciones",
    "选出重点": "Encuentra lo importante",
    "随手标注": "Añade anotaciones",
    "恰到好处的工具": "Solo las herramientas necesarias",
    "功能不喧哗，": "Menos interfaz,",
    "表达更清楚。": "más claridad.",
    "只为分享截图时真正需要的几步，设计每一次操作。": "Cada acción se centra en los pocos pasos que hacen que una captura merezca compartirse.",
    "自由框选": "Recorte flexible",
    "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "Arrastra bordes y tiradores para conservar lo que necesites. Mueve o cambia el tamaño con dos dedos.",
    "标注重点": "Anotaciones claras",
    "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "Añade texto, flechas, dibujos, pixelado, desenfoque o máscaras sólidas según necesites.",
    "留住隐私": "Pensado para la privacidad",
    "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "Las imágenes se procesan en el dispositivo. Captura rápida no guarda el original automáticamente en Fotos.",
    "直接分享": "Comparte directamente",
    "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "Usa la hoja de compartir de iOS para enviar a las apps de chat y de compartir disponibles.",
    "一气呵成": "Todo en un mismo proceso",
    "三步之间，": "Tres pasos rápidos,",
    "想法已经发出。": "listo para compartir.",
    "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "Configura el atajo una vez tras instalar la app y captura cuando lo necesites.",
    "查看预制快捷指令": "Ver el atajo preparado",
    "截取屏幕": "Captura la pantalla",
    "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "Ejecuta el atajo de captura rápida o asígnalo a Tocar atrás o al botón de acción.",
    "圈出重点": "Recorta lo esencial",
    "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "Cuando la captura se abra en el editor, selecciona la zona útil y añade contexto u oculta detalles.",
    "分享出去": "Envíalo",
    "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "Toca Compartir y elige una app instalada. También puedes guardar la imagen editada.",
    "下一张截图，": "Tu próxima captura,",
    "只留下重要的。": "solo lo esencial.",
    "把重点，说清楚。": "Deja claro el mensaje.",
    "隐私政策": "Política de privacidad",
    "使用条款": "Términos de uso",
    "支持": "Soporte",
    "摘享，返回顶部": "ClipShare, volver arriba",
    "页面导航": "Navegación de página",
    "摘享 App 当前首页预览": "Vista previa de la pantalla de inicio actual de ClipShare",
    "摘享 App 当前首页预览与操作演示": "Pantalla de inicio actual y demo de ClipShare",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "Demo de ClipShare: capturar, recortar y compartir en un chat",
    "打开高清首页截图": "Abrir imagen de inicio a resolución completa",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "Inicio de ClipShare con guía de captura, recorte y envío, configuración rápida, ejemplo, Fotos, cámara y Pegar y editar",
    "打开高清编辑器截图": "Abrir imagen del editor a resolución completa",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "Editor de ClipShare con recorte, anotaciones, Guardar en Fotos y compartir"
  },
  "fr": {
    "最近摘图，桌面一点即达。": "Vos derniers exports, à portée de main.",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "Après un partage ou un enregistrement, le widget affiche le dernier export ou les trois plus récents. Touchez une image pour reprendre la retouche.",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "Le widget des derniers exports est gratuit. Un achat unique de Pro permet d’exporter sans la marque ClipShare ni le code QR de téléchargement.",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "Le widget moyen de ClipShare affiche les trois derniers exports, leur heure et le nombre d’éléments de l’historique local",
    "摘享裁剪宣传图": "Aperçu du recadrage ClipShare",
    "摘享标注宣传图": "Aperçu des annotations ClipShare",
    "摘享分享宣传图": "Aperçu du partage ClipShare",
    "跳到主要内容": "Aller au contenu principal",
    "摘享": "ClipShare",
    "产品体验": "Expérience",
    "操作演示": "Démo",
    "实用功能": "Fonctions",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "Gardez l’essentiel. Partagez l’image. Recadrez, annotez, masquez les détails privés et partagez depuis l’éditeur.",
    "轻松裁剪，": "Recadrez simplement.",
    "分享一步到位。": "Envoyez par messagerie.",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "Recadrez la partie utile, ajoutez une flèche ou une note et envoyez via la feuille de partage iOS. Sans enregistrer dans Photos ni rechercher l’image.",
    "裁得顺手，分享轻松。": "Simple à recadrer. Simple à partager.",
    "单指，选出重点": "Un doigt. Sélectionnez l’essentiel.",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "Faites glisser pour sélectionner, déplacer le cadre ou ajuster ses bords. Avec un seul doigt.",
    "标注，一眼看懂": "Annotez. Soyez clair.",
    "箭头、文字、涂鸦，把想说的标清楚。": "Ajoutez flèches, texte et dessins pour clarifier votre message.",
    "直接分享，相册不留图": "Partagez directement. Sans encombrer Photos.",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "Capturez, modifiez et partagez avec Capture rapide. Ni l’original ni l’image partagée ne sont enregistrés automatiquement dans Photos. Enregistrez seulement si vous le souhaitez.",
    "功能亮点": "Fonctions",
    "使用方式": "Comment ça marche",
    "为 iPhone 而做的截图工具": "Un outil de capture ciblé pour iPhone",
    "截图，": "Capturez.",
    "只发重点。": "Partagez l’essentiel.",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "Quelque chose à partager ? Recadrez, annotez et envoyez. Moins de changements d’apps, plus de clarté au premier regard.",
    "看看怎么用": "Voir comment ça marche",
    "即将登陆 App Store": "Bientôt sur l’App Store",
    "原生 iOS 应用": "App iOS native",
    "看看真实操作": "Voir le parcours réel",
    "截取、裁剪、": "Capturez. Recadrez.",
    "直接发到聊天。": "Envoyez par messagerie.",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "Capturez l’écran, recadrez l’essentiel et envoyez via WhatsApp. Un parcours fluide pour partager plus vite.",
    "截取": "Capturer",
    "裁剪": "Recadrer",
    "分享": "Partager",
    "点击查看高清原图 ↗": "Touchez pour voir en pleine résolution ↗",
    "向下探索": "Faites défiler pour explorer",
    "把复杂留在身后": "Oubliez les étapes superflues",
    "从整张屏幕，": "De tout l’écran,",
    "到": "à",
    "真正想说的那一点。": "la partie essentielle.",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "Plus besoin d’enregistrer une capture dans Photos, puis de la rechercher dans une messagerie. ClipShare réunit recadrage et annotations dans un même parcours.",
    "一步聚焦": "L’essentiel en un geste",
    "指尖框选，": "Recadrez d’un geste,",
    "重点自然出现。": "gardez l’essentiel.",
    "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "Ajustez librement le cadre. Ajoutez flèches, texte ou dessins si besoin. Puis partagez via la feuille de partage iOS.",
    "从截图到分享，保持连贯": "De la capture au partage, sans détour",
    "选出重点": "Trouvez l’essentiel",
    "随手标注": "Annotez",
    "恰到好处的工具": "Juste les outils utiles",
    "功能不喧哗，": "Moins d’interface,",
    "表达更清楚。": "plus de clarté.",
    "只为分享截图时真正需要的几步，设计每一次操作。": "Chaque action se concentre sur les quelques étapes qui rendent une capture utile à partager.",
    "自由框选": "Recadrage flexible",
    "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "Déplacez les bords et poignées pour garder ce qu’il faut. Déplacez ou redimensionnez avec deux doigts.",
    "标注重点": "Annotations claires",
    "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "Ajoutez texte, flèches, dessins, pixellisation, flou ou masques unis selon vos besoins.",
    "留住隐私": "La confidentialité en tête",
    "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "Les images sont traitées sur votre appareil. Capture rapide n’enregistre pas l’original automatiquement dans Photos.",
    "直接分享": "Partagez directement",
    "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "Utilisez la feuille de partage iOS pour envoyer vers les apps de messagerie et de partage disponibles.",
    "一气呵成": "Tout dans un même parcours",
    "三步之间，": "Trois étapes rapides,",
    "想法已经发出。": "prêt à partager.",
    "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "Configurez le raccourci une fois après l’installation, puis capturez quand vous en avez besoin.",
    "查看预制快捷指令": "Voir le raccourci prêt à l’emploi",
    "截取屏幕": "Capturez l’écran",
    "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "Lancez le raccourci de capture rapide ou associez-le au toucher au dos ou au bouton Action.",
    "圈出重点": "Recadrez l’essentiel",
    "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "Une fois la capture ouverte dans l’éditeur, sélectionnez la zone utile, ajoutez du contexte ou masquez des détails.",
    "分享出去": "Envoyez",
    "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "Touchez Partager et choisissez une app installée. Vous pouvez aussi enregistrer l’image modifiée.",
    "下一张截图，": "Votre prochaine capture,",
    "只留下重要的。": "juste l’essentiel.",
    "把重点，说清楚。": "Faites passer le message.",
    "隐私政策": "Politique de confidentialité",
    "使用条款": "Conditions d’utilisation",
    "支持": "Assistance",
    "摘享，返回顶部": "ClipShare, retour en haut",
    "页面导航": "Navigation de la page",
    "摘享 App 当前首页预览": "Aperçu de l’accueil actuel de ClipShare",
    "摘享 App 当前首页预览与操作演示": "Accueil actuel et démo de ClipShare",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "Démo ClipShare : capturer, recadrer et partager par messagerie",
    "打开高清首页截图": "Ouvrir l’image d’accueil en pleine résolution",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "Accueil ClipShare avec guide de capture, recadrage et partage, configuration rapide, exemple, Photos, caméra et Coller et modifier",
    "打开高清编辑器截图": "Ouvrir l’image de l’éditeur en pleine résolution",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "Éditeur ClipShare avec recadrage, annotations, enregistrement dans Photos et partage"
  },
  "de": {
    "最近摘图，桌面一点即达。": "Letzte Exporte direkt auf dem Home-Bildschirm.",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "Nach dem Teilen oder Speichern zeigt das Widget den letzten Export oder die letzten drei. Tippe auf ein Bild, um es weiter zu bearbeiten.",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "Das Widget für letzte Exporte ist kostenlos. Mit dem einmaligen Kauf von Pro exportierst du ohne ClipShare-Kennzeichnung und Download-QR-Code.",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "Das mittelgroße ClipShare-Widget zeigt die letzten drei Exporte, ihre Uhrzeiten und die Anzahl der Einträge im lokalen Verlauf",
    "摘享裁剪宣传图": "ClipShare-Zuschnittvorschau",
    "摘享标注宣传图": "ClipShare-Anmerkungsvorschau",
    "摘享分享宣传图": "ClipShare-Teilen-Vorschau",
    "跳到主要内容": "Zum Hauptinhalt",
    "摘享": "ClipShare",
    "产品体验": "Erlebnis",
    "操作演示": "Demo",
    "实用功能": "Funktionen",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "Das Wesentliche behalten. Das Bild teilen. Zuschneiden, markieren, Privates abdecken und direkt aus dem Editor teilen.",
    "轻松裁剪，": "Einfach zuschneiden.",
    "分享一步到位。": "Ab in den Chat.",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "Gewünschten Bereich zuschneiden, Pfeil oder Notiz hinzufügen und über das iOS-Teilen-Menü senden. Ohne Sichern in Fotos und Suchen des Bildes.",
    "裁得顺手，分享轻松。": "Einfach zuschneiden. Einfach teilen.",
    "单指，选出重点": "Ein Finger. Das Wesentliche auswählen.",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "Auswahl ziehen, Zuschnitt verschieben oder Ränder fein einstellen. Alles mit einem Finger.",
    "标注，一眼看懂": "Markieren. Klar zeigen.",
    "箭头、文字、涂鸦，把想说的标清楚。": "Mit Pfeilen, Text und Zeichnungen klar zeigen, worum es geht.",
    "直接分享，相册不留图": "Direkt teilen. Fotos bleibt aufgeräumt.",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "Mit Schnellaufnahme aufnehmen, bearbeiten und teilen. Weder Original noch geteiltes Bild werden automatisch in Fotos gespeichert. Sichere nur, wenn du es möchtest.",
    "功能亮点": "Funktionen",
    "使用方式": "So funktioniert’s",
    "为 iPhone 而做的截图工具": "Ein fokussiertes Bildschirmfoto-Werkzeug für iPhone",
    "截图，": "Aufnehmen.",
    "只发重点。": "Das Wesentliche teilen.",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "Etwas Teilenswertes entdeckt? Zuschneiden, markieren und senden. Weniger App-Wechsel, mehr Klarheit auf einen Blick.",
    "看看怎么用": "So funktioniert’s ansehen",
    "即将登陆 App Store": "Bald im App Store",
    "原生 iOS 应用": "Native iOS-App",
    "看看真实操作": "Den echten Ablauf ansehen",
    "截取、裁剪、": "Aufnehmen. Zuschneiden.",
    "直接发到聊天。": "Ab in den Chat.",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "Bildschirm aufnehmen, das Wesentliche zuschneiden und über WhatsApp senden. Ein flüssiger Ablauf für schnelleres Teilen.",
    "截取": "Aufnehmen",
    "裁剪": "Zuschneiden",
    "分享": "Teilen",
    "点击查看高清原图 ↗": "Für volle Auflösung antippen ↗",
    "向下探索": "Zum Entdecken scrollen",
    "把复杂留在身后": "Überflüssige Schritte sparen",
    "从整张屏幕，": "Vom ganzen Bildschirm",
    "到": "zum",
    "真正想说的那一点。": "wichtigen Ausschnitt.",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "Kein Bildschirmfoto erst in Fotos sichern und dann im Chat suchen. ClipShare vereint Zuschneiden und Markieren in einem flüssigen Ablauf.",
    "一步聚焦": "Mit einem Schritt fokussieren",
    "指尖框选，": "Mit einer Berührung zuschneiden,",
    "重点自然出现。": "das Wesentliche behalten.",
    "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "Zuschnitt frei anpassen. Bei Bedarf Pfeile, Text oder Zeichnungen ergänzen. Danach über das iOS-Teilen-Menü teilen.",
    "从截图到分享，保持连贯": "Flüssig von der Aufnahme zum Teilen",
    "选出重点": "Den Fokus finden",
    "随手标注": "Markieren",
    "恰到好处的工具": "Genau die nötigen Werkzeuge",
    "功能不喧哗，": "Weniger Oberfläche,",
    "表达更清楚。": "mehr Klarheit.",
    "只为分享截图时真正需要的几步，设计每一次操作。": "Jede Aktion konzentriert sich auf die wenigen Schritte, die ein Bildschirmfoto teilenswert machen.",
    "自由框选": "Flexibel zuschneiden",
    "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "Ränder und Griffe ziehen, um genau das Gewünschte zu behalten. Mit zwei Fingern verschieben oder skalieren.",
    "标注重点": "Klare Anmerkungen",
    "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "Bei Bedarf Text, Pfeile, Zeichnungen, Verpixelung, Weichzeichnung oder deckende Abdeckungen hinzufügen.",
    "留住隐私": "Datenschutz im Blick",
    "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "Bilder werden auf deinem Gerät verarbeitet. Schnellaufnahme speichert das Original nicht automatisch in Fotos.",
    "直接分享": "Direkt teilen",
    "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "Sende das Ergebnis über das iOS-Teilen-Menü an verfügbare Chat- und Sharing-Apps.",
    "一气呵成": "Alles in einem Ablauf",
    "三步之间，": "Drei schnelle Schritte,",
    "想法已经发出。": "bereit zum Teilen.",
    "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "Nach der Installation einmal den Kurzbefehl einrichten, dann jederzeit aufnehmen.",
    "查看预制快捷指令": "Fertigen Kurzbefehl ansehen",
    "截取屏幕": "Bildschirm aufnehmen",
    "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "Führe den Schnellaufnahme-Kurzbefehl aus oder weise ihn Rückseitentippen oder der Aktionstaste zu.",
    "圈出重点": "Das Wesentliche zuschneiden",
    "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "Sobald das Bildschirmfoto im Editor ist, wähle den wichtigen Bereich und ergänze Hinweise oder verdecke Details.",
    "分享出去": "Abschicken",
    "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "Tippe auf Teilen und wähle eine installierte App. Du kannst das bearbeitete Bild auch selbst sichern.",
    "下一张截图，": "Dein nächstes Bildschirmfoto,",
    "只留下重要的。": "nur das Wesentliche.",
    "把重点，说清楚。": "Klar auf den Punkt.",
    "隐私政策": "Datenschutzerklärung",
    "使用条款": "Nutzungsbedingungen",
    "支持": "Support",
    "摘享，返回顶部": "ClipShare, nach oben",
    "页面导航": "Seitennavigation",
    "摘享 App 当前首页预览": "Vorschau der aktuellen ClipShare-Startseite",
    "摘享 App 当前首页预览与操作演示": "Aktuelle Startseite und Produktdemo von ClipShare",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "ClipShare-Demo: aufnehmen, zuschneiden und in einem Chat teilen",
    "打开高清首页截图": "Startseitenbild in voller Auflösung öffnen",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "ClipShare-Startseite mit Aufnahme-, Zuschnitt- und Teilen-Hilfe, Schnellaufnahme, Beispiel, Fotos, Kamera und Einfügen & bearbeiten",
    "打开高清编辑器截图": "Editorbild in voller Auflösung öffnen",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "ClipShare-Editor mit Zuschneiden, Anmerkungen, In Fotos sichern und Teilen"
  },
  "pt-BR": {
    "最近摘图，桌面一点即达。": "Suas últimas exportações, a um toque.",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "Depois de compartilhar ou salvar, o widget mostra a última exportação ou as três mais recentes. Toque em uma imagem para continuar editando.",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "O widget de exportações recentes é grátis. Com uma compra única do Pro, exporte sem a marca do ClipShare e sem o código QR de download.",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "O widget médio do ClipShare mostra as três últimas exportações, seus horários e a quantidade de itens no histórico local",
    "摘享裁剪宣传图": "Prévia de recorte do ClipShare",
    "摘享标注宣传图": "Prévia de anotações do ClipShare",
    "摘享分享宣传图": "Prévia de compartilhamento do ClipShare",
    "跳到主要内容": "Ir para o conteúdo principal",
    "摘享": "ClipShare",
    "产品体验": "Experiência",
    "操作演示": "Demo",
    "实用功能": "Recursos",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "Fique com o essencial. Compartilhe a imagem. Recorte, anote, oculte dados pessoais e compartilhe pelo editor.",
    "轻松裁剪，": "Recorte com facilidade.",
    "分享一步到位。": "Envie na conversa.",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "Recorte o que precisa, adicione uma seta ou nota e envie pela folha de compartilhamento do iOS. Sem salvar no Fotos nem procurar a imagem.",
    "裁得顺手，分享轻松。": "Fácil de recortar. Fácil de compartilhar.",
    "单指，选出重点": "Um dedo. Selecione o que importa.",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "Arraste para selecionar, mover o recorte ou ajustar as bordas. Tudo com um dedo.",
    "标注，一眼看懂": "Anote. Deixe claro.",
    "箭头、文字、涂鸦，把想说的标清楚。": "Adicione setas, textos e desenhos para deixar sua mensagem clara.",
    "直接分享，相册不留图": "Compartilhe direto. Sem lotar o Fotos.",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "Capture, edite e compartilhe com Captura rápida. Nem o original nem a imagem compartilhada são salvos automaticamente no Fotos. Salve só quando quiser.",
    "功能亮点": "Recursos",
    "使用方式": "Como funciona",
    "为 iPhone 而做的截图工具": "Uma ferramenta de captura para iPhone",
    "截图，": "Capture.",
    "只发重点。": "Compartilhe o essencial.",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "Viu algo para compartilhar? Recorte, marque e envie. Menos troca de apps, mais clareza de imediato.",
    "看看怎么用": "Veja como funciona",
    "即将登陆 App Store": "Em breve na App Store",
    "原生 iOS 应用": "App nativo para iOS",
    "看看真实操作": "Veja o fluxo real",
    "截取、裁剪、": "Capture. Recorte.",
    "直接发到聊天。": "Envie na conversa.",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "Capture a tela, recorte o essencial e envie pelo WhatsApp. Um fluxo simples para compartilhar mais rápido.",
    "截取": "Capturar",
    "裁剪": "Recortar",
    "分享": "Compartilhar",
    "点击查看高清原图 ↗": "Toque para ver em resolução total ↗",
    "向下探索": "Role para explorar",
    "把复杂留在身后": "Deixe as etapas extras para trás",
    "从整张屏幕，": "Da tela inteira,",
    "到": "para",
    "真正想说的那一点。": "o que importa.",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "Não precisa salvar uma captura no Fotos e depois procurar no app de conversa. O ClipShare reúne recorte e anotações em um fluxo só.",
    "一步聚焦": "Foque em uma etapa",
    "指尖框选，": "Recorte com um toque,",
    "重点自然出现。": "mantenha o foco.",
    "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "Ajuste o recorte livremente. Adicione setas, textos ou desenhos quando precisar. Ao terminar, compartilhe pela folha do iOS.",
    "从截图到分享，保持连贯": "Da captura ao compartilhamento sem interrupções",
    "选出重点": "Encontre o foco",
    "随手标注": "Adicione anotações",
    "恰到好处的工具": "Só as ferramentas necessárias",
    "功能不喧哗，": "Menos interface,",
    "表达更清楚。": "mais clareza.",
    "只为分享截图时真正需要的几步，设计每一次操作。": "Cada ação foca nas poucas etapas que tornam uma captura útil para compartilhar.",
    "自由框选": "Recorte flexível",
    "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "Arraste bordas e alças para manter o que precisa. Mova ou redimensione com dois dedos.",
    "标注重点": "Anotações claras",
    "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "Adicione textos, setas, desenhos, pixelização, desfoque ou máscaras sólidas conforme precisar.",
    "留住隐私": "Pensado na privacidade",
    "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "As imagens são processadas no dispositivo. Captura rápida não salva o original automaticamente no Fotos.",
    "直接分享": "Compartilhe direto",
    "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "Use a folha de compartilhamento do iOS para enviar aos apps de conversa e compartilhamento disponíveis.",
    "一气呵成": "Tudo em um fluxo só",
    "三步之间，": "Três etapas rápidas,",
    "想法已经发出。": "pronto para compartilhar.",
    "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "Configure o atalho uma vez após instalar e capture sempre que precisar.",
    "查看预制快捷指令": "Ver o atalho pronto",
    "截取屏幕": "Capture a tela",
    "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "Execute o atalho de captura rápida ou atribua a Tocar Atrás ou ao botão de Ação.",
    "圈出重点": "Recorte o essencial",
    "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "Quando a captura abrir no editor, selecione a área útil e adicione contexto ou oculte detalhes.",
    "分享出去": "Envie",
    "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "Toque em Compartilhar e escolha um app instalado. Você também pode salvar a imagem editada.",
    "下一张截图，": "Sua próxima captura,",
    "只留下重要的。": "só o essencial.",
    "把重点，说清楚。": "Deixe a mensagem clara.",
    "隐私政策": "Política de Privacidade",
    "使用条款": "Termos de Uso",
    "支持": "Suporte",
    "摘享，返回顶部": "ClipShare, voltar ao topo",
    "页面导航": "Navegação da página",
    "摘享 App 当前首页预览": "Prévia da tela inicial atual do ClipShare",
    "摘享 App 当前首页预览与操作演示": "Tela inicial atual e demo do ClipShare",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "Demo do ClipShare: capturar, recortar e compartilhar em uma conversa",
    "打开高清首页截图": "Abrir imagem inicial em resolução total",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "Início do ClipShare com guia de captura, recorte e compartilhamento, configuração rápida, exemplo, Fotos, câmera e Colar e editar",
    "打开高清编辑器截图": "Abrir imagem do editor em resolução total",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "Editor do ClipShare com recorte, anotações, Salvar no Fotos e compartilhar"
  },
  "it": {
    "最近摘图，桌面一点即达。": "Le ultime esportazioni, a portata di tap.",
    "分享或保存后，小组件会显示最近一张或三张成品。点开任一张，接着编辑。": "Dopo aver condiviso o salvato, il widget mostra l’ultima esportazione o le ultime tre. Tocca un’immagine per continuare a modificarla.",
    "最近摘图免费。Pro 一次买断，导出时可去除摘享标记和下载二维码。": "Il widget delle ultime esportazioni è gratuito. Con un solo acquisto di Pro puoi esportare senza il marchio ClipShare e il codice QR di download.",
    "摘享中号小组件显示最近三张成品、导出时间和本机历史数量": "Il widget medio di ClipShare mostra le ultime tre esportazioni, gli orari e il numero di elementi nella cronologia locale",
    "摘享裁剪宣传图": "Anteprima ritaglio di ClipShare",
    "摘享标注宣传图": "Anteprima annotazioni di ClipShare",
    "摘享分享宣传图": "Anteprima condivisione di ClipShare",
    "跳到主要内容": "Vai al contenuto principale",
    "摘享": "ClipShare",
    "产品体验": "Esperienza",
    "操作演示": "Demo",
    "实用功能": "Funzioni",
    "摘出重点，分享所想。裁剪、标注、遮挡隐私，编辑后直接分享。": "Tieni ciò che conta. Condividi l’immagine. Ritaglia, annota, oscura i dati privati e condividi dall’editor.",
    "轻松裁剪，": "Ritaglia facilmente.",
    "分享一步到位。": "Invia in chat.",
    "框选需要的部分，添加箭头或文字，再通过系统分享面板发到常用 App。无需先保存图片、再去相册寻找。": "Ritaglia la parte utile, aggiungi una freccia o nota e invia dal pannello di condivisione iOS. Senza salvare in Foto o cercare l’immagine.",
    "裁得顺手，分享轻松。": "Facile da ritagliare. Facile da condividere.",
    "单指，选出重点": "Un dito. Seleziona ciò che conta.",
    "拖动框选、移动选区，或拖动边线微调。一个手指就能完成。": "Trascina per selezionare, spostare il ritaglio o regolarne i bordi. Tutto con un dito.",
    "标注，一眼看懂": "Annota. Fatti capire.",
    "箭头、文字、涂鸦，把想说的标清楚。": "Aggiungi frecce, testo e disegni per chiarire il messaggio.",
    "直接分享，相册不留图": "Condividi subito. Senza riempire Foto.",
    "用快捷截图截取、编辑后直接分享，原图和分享图都不会自动存入相册。只有你选择保存，图片才会写入相册。": "Acquisisci, modifica e condividi con Acquisizione rapida. Né l’originale né l’immagine condivisa vengono salvati automaticamente in Foto. Salva solo quando vuoi.",
    "功能亮点": "Funzioni",
    "使用方式": "Come funziona",
    "为 iPhone 而做的截图工具": "Uno strumento mirato per schermate su iPhone",
    "截图，": "Acquisisci.",
    "只发重点。": "Condividi l’essenziale.",
    "看到值得分享的内容，直接框选、标注、发走。少一点来回切换，多一点一目了然。": "Qualcosa da condividere? Ritaglia, annota e invia. Meno passaggi tra app, più chiarezza a colpo d’occhio.",
    "看看怎么用": "Guarda come funziona",
    "即将登陆 App Store": "Presto su App Store",
    "原生 iOS 应用": "App nativa per iOS",
    "看看真实操作": "Guarda il flusso reale",
    "截取、裁剪、": "Acquisisci. Ritaglia.",
    "直接发到聊天。": "Invia in chat.",
    "截取屏幕后框选重点，再通过 WhatsApp 发出。一个连贯的流程，让分享更迅速。": "Acquisisci lo schermo, ritaglia l’essenziale e invia con WhatsApp. Un flusso semplice per condividere più velocemente.",
    "截取": "Acquisisci",
    "裁剪": "Ritaglia",
    "分享": "Condividi",
    "点击查看高清原图 ↗": "Tocca per la risoluzione completa ↗",
    "向下探索": "Scorri per esplorare",
    "把复杂留在身后": "Lascia perdere i passaggi in più",
    "从整张屏幕，": "Dall’intero schermo,",
    "到": "alla",
    "真正想说的那一点。": "parte che conta.",
    "不必先把截图存进相册，再打开聊天软件寻找图片。摘享把裁剪和说明放进同一个顺手的流程，让信息刚刚好。": "Non serve salvare una schermata in Foto e poi cercarla nella chat. ClipShare unisce ritaglio e annotazioni in un solo flusso.",
    "一步聚焦": "Metti a fuoco in un gesto",
    "指尖框选，": "Ritaglia con un tocco,",
    "重点自然出现。": "mantieni il punto.",
    "自由调整裁剪区域，需要说明时再加上箭头、文字或涂鸦。编辑完成，直接调出 iOS 系统分享面板。": "Regola liberamente il ritaglio. Aggiungi frecce, testo o disegni quando serve. Poi condividi dal pannello di iOS.",
    "从截图到分享，保持连贯": "Dall’acquisizione alla condivisione senza interruzioni",
    "选出重点": "Trova il punto",
    "随手标注": "Annota",
    "恰到好处的工具": "Solo gli strumenti che servono",
    "功能不喧哗，": "Meno interfaccia,",
    "表达更清楚。": "più chiarezza.",
    "只为分享截图时真正需要的几步，设计每一次操作。": "Ogni azione si concentra sui pochi passaggi che rendono utile condividere una schermata.",
    "自由框选": "Ritaglio flessibile",
    "拖动边线与控制点，精准留下想发的部分。选区也能移动和双指调整。": "Trascina bordi e maniglie per tenere ciò che serve. Sposta o ridimensiona con due dita.",
    "标注重点": "Annotazioni chiare",
    "文字、箭头、涂鸦、像素化、模糊与纯色遮挡，按需使用。": "Aggiungi testo, frecce, disegni, pixel, sfocatura o maschere piene quando serve.",
    "留住隐私": "Attenzione alla privacy",
    "截图在设备本地处理。快捷截图流程不会自动把原图存入相册。": "Le immagini vengono elaborate sul dispositivo. Acquisizione rapida non salva l’originale automaticamente in Foto.",
    "直接分享": "Condividi direttamente",
    "使用 iOS 系统分享面板，发送给设备上可用的聊天与分享 App。": "Usa il pannello di condivisione iOS per inviare alle app di chat e condivisione disponibili.",
    "一气呵成": "Tutto in un solo flusso",
    "三步之间，": "Tre rapidi passaggi,",
    "想法已经发出。": "pronto da condividere.",
    "安装 App 后，首次设置一次快捷指令，之后就可以在需要的时候直接开始。": "Configura il comando una volta dopo l’installazione, poi acquisisci quando serve.",
    "查看预制快捷指令": "Vedi il comando pronto",
    "截取屏幕": "Acquisisci lo schermo",
    "运行「快速截图」快捷指令，或将它绑定到轻点背面、操作按钮。": "Esegui il comando di acquisizione rapida o assegnalo a Tocco posteriore o al tasto Azione.",
    "圈出重点": "Ritaglia l’essenziale",
    "截图进入编辑器后，框选需要的区域，按需添加说明或隐藏信息。": "Quando la schermata si apre nell’editor, seleziona l’area utile e aggiungi contesto o oscura dettagli.",
    "分享出去": "Invia",
    "点击分享，选择已安装的目标 App；也可以主动保存编辑后的图片。": "Tocca Condividi e scegli un’app installata. Puoi anche salvare l’immagine modificata.",
    "下一张截图，": "La tua prossima schermata,",
    "只留下重要的。": "solo l’essenziale.",
    "把重点，说清楚。": "Rendi chiaro il messaggio.",
    "隐私政策": "Informativa sulla privacy",
    "使用条款": "Termini di utilizzo",
    "支持": "Assistenza",
    "摘享，返回顶部": "ClipShare, torna in alto",
    "页面导航": "Navigazione della pagina",
    "摘享 App 当前首页预览": "Anteprima della schermata iniziale attuale di ClipShare",
    "摘享 App 当前首页预览与操作演示": "Schermata iniziale attuale e demo di ClipShare",
    "摘享操作演示：截图、裁剪并分享到聊天 App": "Demo ClipShare: acquisisci, ritaglia e condividi in chat",
    "打开高清首页截图": "Apri immagine iniziale a risoluzione completa",
    "摘享首页：截图、框选与分享流程，极速截图设置、示例、照片、拍照和粘贴编辑入口": "Home di ClipShare con guida ad acquisizione, ritaglio e condivisione, configurazione rapida, esempio, Foto, fotocamera e Incolla e modifica",
    "打开高清编辑器截图": "Apri immagine dell’editor a risoluzione completa",
    "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "Editor ClipShare con ritaglio, annotazioni, Salva in Foto e condivisione"
  }
};
  const titles = {
  "zh-Hans": "摘享 — 截图，只发重点",
  "zh-Hant": "摘享 — 截圖，只傳重點",
  "en": "ClipShare — Share the point",
  "ja": "ClipShare — 必要な部分だけ共有",
  "ko": "ClipShare — 필요한 부분만 공유",
  "id": "ClipShare — Bagikan intinya",
  "th": "ClipShare — แชร์เฉพาะส่วนสำคัญ",
  "ar": "ClipShare — شارك المهم فقط",
  "es": "ClipShare — Recorta, anota y comparte",
  "fr": "ClipShare — Recadrez, annotez et partagez",
  "de": "ClipShare — Zuschneiden, markieren und teilen",
  "pt-BR": "ClipShare — Recorte, anote e compartilhe",
  "it": "ClipShare — Ritaglia, annota e condividi"
};
  const descriptions = {
  "zh-Hans": "摘享：摘出重点，分享所想。裁剪截图、添加标注、遮挡隐私，编辑后直接分享。",
  "zh-Hant": "摘享：摘出重點，分享所想。裁切截圖、加入標註、遮擋隱私，編輯後直接分享。",
  "en": "ClipShare: crop screenshots, add annotations, hide private details and share directly from your iPhone.",
  "ja": "ClipShare：iPhone のスクリーンショットを切り取り、注釈を加え、機密情報を隠して直接共有。必要な部分だけを、手軽に届けられます。",
  "ko": "ClipShare: iPhone 스크린샷을 자르고 표시하고 민감한 정보를 가린 뒤 바로 공유하세요. 필요한 부분만 간편하게 전달할 수 있습니다.",
  "id": "Potong tangkapan layar, beri anotasi, tutupi informasi pribadi, lalu bagikan langsung dari iPhone dengan ClipShare.",
  "th": "ครอบตัดภาพหน้าจอ ใส่คำอธิบาย ปิดข้อมูลส่วนตัว แล้วแชร์จาก iPhone ได้ทันทีด้วย ClipShare",
  "ar": "اقتص لقطات الشاشة وأضف التعليقات وأخفِ المعلومات الخاصة وشارك مباشرة من iPhone مع ClipShare.",
  "es": "Una herramienta para iPhone: captura, recorta, anota y comparte desde el editor sin guardar automáticamente en Fotos.",
  "fr": "Un outil pour iPhone : capturez, recadrez, annotez et partagez depuis l’éditeur sans enregistrer automatiquement dans Photos.",
  "de": "Ein Werkzeug fürs iPhone: aufnehmen, zuschneiden, markieren und aus dem Editor teilen, ohne automatisch in Fotos zu speichern.",
  "pt-BR": "Uma ferramenta para iPhone: capture, recorte, anote e compartilhe pelo editor sem salvar automaticamente no Fotos.",
  "it": "Uno strumento per iPhone: acquisisci, ritaglia, annota e condividi dall’editor senza salvare automaticamente in Foto."
};
  const socialDescriptions = {
  "zh-Hans": "摘享：摘出重点，分享所想。裁剪截图、添加标注、遮挡隐私，编辑后直接分享。",
  "zh-Hant": "摘享：摘出重點，分享所想。裁切截圖、加入標註、遮擋隱私，編輯後直接分享。",
  "en": "ClipShare: crop screenshots, add annotations, hide private details and share directly from your iPhone.",
  "ja": "ClipShare：iPhone のスクリーンショットを切り取り、注釈を加え、機密情報を隠して直接共有。必要な部分だけを、手軽に届けられます。",
  "ko": "ClipShare: iPhone 스크린샷을 자르고 표시하고 민감한 정보를 가린 뒤 바로 공유하세요. 필요한 부분만 간편하게 전달할 수 있습니다.",
  "id": "Potong tangkapan layar, beri anotasi, tutupi informasi pribadi, lalu bagikan langsung dari iPhone dengan ClipShare.",
  "th": "ครอบตัดภาพหน้าจอ ใส่คำอธิบาย ปิดข้อมูลส่วนตัว แล้วแชร์จาก iPhone ได้ทันทีด้วย ClipShare",
  "ar": "اقتص لقطات الشاشة وأضف التعليقات وأخفِ المعلومات الخاصة وشارك مباشرة من iPhone مع ClipShare.",
  "es": "Una herramienta para iPhone: captura, recorta, anota y comparte desde el editor sin guardar automáticamente en Fotos.",
  "fr": "Un outil pour iPhone : capturez, recadrez, annotez et partagez depuis l’éditeur sans enregistrer automatiquement dans Photos.",
  "de": "Ein Werkzeug fürs iPhone: aufnehmen, zuschneiden, markieren und aus dem Editor teilen, ohne automatisch in Fotos zu speichern.",
  "pt-BR": "Uma ferramenta para iPhone: capture, recorte, anote e compartilhe pelo editor sem salvar automaticamente no Fotos.",
  "it": "Uno strumento per iPhone: acquisisci, ritaglia, annota e condividi dall’editor senza salvare automaticamente in Foto."
};
  const storeAvailableLabels = {
  "zh-Hans": "在 App Store 下载",
  "zh-Hant": "從 App Store 下載",
  "en": "Download on the App Store",
  "ja": "App Store からダウンロード",
  "ko": "App Store에서 다운로드",
  "id": "Unduh di App Store",
  "th": "ดาวน์โหลดบน App Store",
  "ar": "تنزيل من App Store",
  "es": "Descargar en App Store",
  "fr": "Télécharger sur l’App Store",
  "de": "Im App Store laden",
  "pt-BR": "Baixar na App Store",
  "it": "Scarica su App Store"
};
  const screenshots = {
  "en": {
    "home": [
      "assets/home-en-03801188.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-en-ff034fdd.png",
      1206,
      2622
    ],
    "crop": [
      "assets/promo-crop-en-5aab0c18.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-en-94c3c4c9.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-en-33dd8e47.png",
      1206,
      2622
    ]
  },
  "zh-Hans": {
    "home": [
      "assets/home-zh-Hans-a55d53de.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-zh-Hans-ed53d60d.png",
      1206,
      2622
    ],
    "crop": [
      "assets/promo-crop-zh-Hans-326c4892.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-zh-Hans-011b829f.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-zh-Hans-ce6fc3ca.png",
      1206,
      2622
    ]
  },
  "zh-Hant": {
    "home": [
      "assets/home-zh-Hant-92b0b307.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-zh-Hant-f64cb7b6.png",
      1206,
      2622
    ],
    "crop": [
      "assets/promo-crop-zh-Hant-d6298d3f.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-zh-Hant-2e584449.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-zh-Hant-9e820a1a.png",
      1206,
      2622
    ]
  },
  "ja": {
    "crop": [
      "assets/promo-crop-ja-f60f2b2b.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-ja-cc310054.png",
      1206,
      2622
    ],
    "home": [
      "assets/home-ja-af809a80.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-ja-f964922c.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-ja-f2cb5800.png",
      1206,
      2622
    ]
  },
  "ko": {
    "crop": [
      "assets/promo-crop-ko-4da2d261.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-ko-0f3bc6de.png",
      1206,
      2622
    ],
    "home": [
      "assets/home-ko-873bffde.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-ko-c175be98.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-ko-3f635373.png",
      1206,
      2622
    ]
  },
  "ar": {
    "crop": [
      "assets/promo-crop-ar-ef350dca.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-ar-bd38ae19.png",
      1206,
      2622
    ],
    "home": [
      "assets/home-ar-05f3f158.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-ar-0f75852d.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-ar-b111863e.png",
      1206,
      2622
    ]
  },
  "id": {
    "crop": [
      "assets/promo-crop-id-cced45e7.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-id-411c8f94.png",
      1206,
      2622
    ],
    "home": [
      "assets/home-id-9a51fd45.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-id-0737f1dd.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-id-29bf15e2.png",
      1206,
      2622
    ]
  },
  "th": {
    "crop": [
      "assets/promo-crop-th-cd7f1236.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-th-99e18a7d.png",
      1206,
      2622
    ],
    "home": [
      "assets/home-th-487f6b81.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-th-6afed48b.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-th-bfece7f7.png",
      1206,
      2622
    ]
  },
  "de": {
    "crop": [
      "assets/promo-crop-de-54e05678.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-de-e62b2dfd.png",
      1206,
      2622
    ],
    "home": [
      "assets/home-de-3912faf9.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-de-4df6f261.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-de-a69a7c0b.png",
      1206,
      2622
    ]
  },
  "es": {
    "crop": [
      "assets/promo-crop-es-3e2a39de.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-es-a9c77057.png",
      1206,
      2622
    ],
    "home": [
      "assets/home-es-27ce6ba6.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-es-32ada440.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-es-a783d6b5.png",
      1206,
      2622
    ]
  },
  "fr": {
    "crop": [
      "assets/promo-crop-fr-c0cd6bcc.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-fr-68c76bc6.png",
      1206,
      2622
    ],
    "home": [
      "assets/home-fr-149240cd.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-fr-81ddf5bb.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-fr-552956e3.png",
      1206,
      2622
    ]
  },
  "it": {
    "crop": [
      "assets/promo-crop-it-6f70eae3.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-it-9045bf1f.png",
      1206,
      2622
    ],
    "home": [
      "assets/home-it-ef4c8e3f.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-it-07c6b61e.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-it-9520a8cc.png",
      1206,
      2622
    ]
  },
  "pt-BR": {
    "crop": [
      "assets/promo-crop-pt-BR-47b1a4ea.png",
      1206,
      2622
    ],
    "editor": [
      "assets/editor-pt-BR-a0170597.png",
      1206,
      2622
    ],
    "home": [
      "assets/home-pt-BR-e0fb051c.png",
      1206,
      2622
    ],
    "markup": [
      "assets/promo-markup-pt-BR-dd0b61da.png",
      1206,
      2622
    ],
    "share": [
      "assets/promo-share-pt-BR-34c77bf5.png",
      1206,
      2622
    ]
  }
};
  for (const language of supported) {
    screenshots[language].recent = [`assets/recent-exports-${language}.png`, 1086, 510];
  }
  const promoVideo = document.querySelector("[data-promo-video]");
  const releasedLanguages = window.clipshareReleasedLanguages || ["zh-Hans", "zh-Hant", "en"];
  const soundButton = document.querySelector("[data-promo-sound]");
  const languageSelect = document.querySelector("[data-language-select]");
  for (const option of Array.from(languageSelect.options)) {
    if (!releasedLanguages.includes(option.value)) option.remove();
  }
  const soundLabels = {
  "en": [
    "Turn sound on",
    "Turn sound off"
  ],
  "ja": [
    "サウンドをオン",
    "サウンドをオフ"
  ],
  "ko": [
    "소리 켜기",
    "소리 끄기"
  ],
  "id": [
    "Aktifkan suara",
    "Matikan suara"
  ],
  "th": [
    "เปิดเสียง",
    "ปิดเสียง"
  ],
  "ar": [
    "تشغيل الصوت",
    "إيقاف الصوت"
  ],
  "es": [
    "Activar sonido",
    "Desactivar sonido"
  ],
  "fr": [
    "Activer le son",
    "Désactiver le son"
  ],
  "de": [
    "Ton einschalten",
    "Ton ausschalten"
  ],
  "pt-BR": [
    "Ativar som",
    "Desativar som"
  ],
  "it": [
    "Attiva audio",
    "Disattiva audio"
  ],
  "zh-Hans": [
    "开启声音",
    "关闭声音"
  ],
  "zh-Hant": [
    "開啟聲音",
    "關閉聲音"
  ]
};
  const renderSoundButton = (language) => {
    const soundOn = !promoVideo.muted;
    const label = soundLabels[language][soundOn ? 1 : 0];
    soundButton.querySelector("[data-sound-label]").textContent = label;
    soundButton.setAttribute("aria-label", label);
    soundButton.setAttribute("aria-pressed", String(soundOn));
  };

  soundButton.addEventListener("click", () => {
    promoVideo.muted = !promoVideo.muted;
    promoVideo.play().catch(() => {});
    renderSoundButton(document.documentElement.lang);
  });
  promoVideo.addEventListener("volumechange", () => renderSoundButton(document.documentElement.lang));

  const storeURL = document.body.dataset.appStoreUrl;
  let storeAvailable = false;
  if (storeURL) {
    try {
      const url = new URL(storeURL);
      storeAvailable = url.protocol === "https:" && url.hostname === "apps.apple.com";
      if (storeAvailable) {
        for (const link of document.querySelectorAll("[data-app-store-link]")) {
          link.href = url.href;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.removeAttribute("aria-disabled");
        }
      }
    } catch (_) { /* Keep the coming-soon buttons disabled. */ }
  }

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

  const normalizeLanguage = (value) => {
    if (supported.includes(value)) return value;
    const language = (value || "").replaceAll("_", "-").toLowerCase();
    if (language === "ja" || language.startsWith("ja-")) return "ja";
    if (language === "ko" || language.startsWith("ko-")) return "ko";
    if (language === "id" || language.startsWith("id-") || language === "in" || language.startsWith("in-")) return "id";
    if (language === "th" || language.startsWith("th-")) return "th";
    if (language === "ar" || language.startsWith("ar-")) return "ar";
    for (const locale of ["es", "fr", "de", "it"]) {
      if (language === locale || language.startsWith(locale + "-")) return locale;
    }
    if (language === "pt" || language.startsWith("pt-")) return "pt-BR";
    if (/^zh-(hant|tw|hk|mo)(-|$)/.test(language)) return "zh-Hant";
    if (language === "zh" || language.startsWith("zh-")) return "zh-Hans";
    return "en";
  };
  const initialLanguage = () => normalizeLanguage(new URLSearchParams(location.search).get("lang"));

  const render = (language, remember) => {
    language = normalizeLanguage(language);
    if (!releasedLanguages.includes(language)) language = "en";
    const copy = translations[language] || {};
    for (const { node, original, key } of textNodes) {
      const translated = storeAvailable && key === "即将登陆 App Store"
        ? storeAvailableLabels[language] : (copy[key] ?? key);
      node.nodeValue = original.replace(key, translated);
    }
    for (const { element, name, key } of attributes) {
      element.setAttribute(name, copy[key] ?? key);
    }
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = titles[language];
    document.querySelector('meta[name="description"]').content = descriptions[language];
    document.querySelector('meta[property="og:title"]').content = titles[language];
    document.querySelector('meta[property="og:description"]').content = socialDescriptions[language];
    languageSelect.setAttribute("aria-label", {
      "zh-Hans": "切换语言", "zh-Hant": "切換語言", en: "Choose language",
      ja: "言語を選択", ko: "언어 선택",
      id: "Pilih bahasa", th: "เลือกภาษา", ar: "اختيار اللغة",
      "es": "Elegir idioma",
      "fr": "Choisir la langue",
      "de": "Sprache wählen",
      "pt-BR": "Escolher idioma",
      "it": "Scegli lingua",

    }[language]);
    languageSelect.value = language;
    const suffix = language === "en" ? "" : `-${language}`;
    for (const link of document.querySelectorAll("[data-legal-link]")) {
      link.href = `${link.dataset.legalLink}${suffix}.html`;
    }
    for (const link of document.querySelectorAll("[data-screen]")) {
      const [src, width, height] = screenshots[language][link.dataset.screen];
      const image = link.querySelector("img");
      link.href = src;
      image.src = src;
      image.width = width;
      image.height = height;
    }
    for (const track of promoVideo.textTracks) {
      track.mode = track.language === language ? "showing" : "disabled";
    }
    renderSoundButton(language);
    const requestedLanguage = new URLSearchParams(location.search).get("lang");
    if (remember || (requestedLanguage && requestedLanguage !== language)) {
      const url = new URL(location.href);
      url.searchParams.set("lang", language);
      history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }
  };

  languageSelect.addEventListener("change", () => render(languageSelect.value, true));
  render(initialLanguage(), false);
  document.documentElement.classList.add("i18n-ready");
  promoVideo.play().catch(() => {});
})();

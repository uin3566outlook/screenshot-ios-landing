(() => {
  "use strict";

  const supported = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
  const translations = {
    en: {
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
      "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "ClipShare editor with crop, annotation, Save to Photos, and share actions",
    },
    "zh-Hant": {
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
      "摘享编辑器：原图裁剪、标注、保存到相册与分享操作": "摘享編輯器：原圖裁剪、標註、儲存至相簿與分享操作",
    },
    ja: {
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
    ko: {
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
  };

  const titles = {
    "zh-Hans": "摘享 — 截图，只发重点",
    "zh-Hant": "摘享 — 截圖，只傳重點",
    en: "ClipShare — Share the point",
    ja: "ClipShare — 必要な部分だけ共有",
    ko: "ClipShare — 필요한 부분만 공유",
  };
  const descriptions = {
    "zh-Hans": "摘享：摘出重点，分享所想。裁剪截图、添加标注、遮挡隐私，编辑后直接分享。",
    "zh-Hant": "摘享：摘出重點，分享所想。裁切截圖、加入標註、遮擋隱私，編輯後直接分享。",
    en: "ClipShare: crop screenshots, add annotations, hide private details and share directly from your iPhone.",
    ja: "ClipShare：iPhone のスクリーンショットを切り取り、注釈を加え、機密情報を隠して直接共有。必要な部分だけを、手軽に届けられます。",
    ko: "ClipShare: iPhone 스크린샷을 자르고 표시하고 민감한 정보를 가린 뒤 바로 공유하세요. 필요한 부분만 간편하게 전달할 수 있습니다.",
  };
  const socialDescriptions = {
    "zh-Hans": "摘享：摘出重点，分享所想。裁剪截图、添加标注、遮挡隐私，编辑后直接分享。",
    "zh-Hant": "摘享：摘出重點，分享所想。裁切截圖、加入標註、遮擋隱私，編輯後直接分享。",
    en: "ClipShare: crop screenshots, add annotations, hide private details and share directly from your iPhone.",
    ja: "ClipShare：iPhone のスクリーンショットを切り取り、注釈を加え、機密情報を隠して直接共有。必要な部分だけを、手軽に届けられます。",
    ko: "ClipShare: iPhone 스크린샷을 자르고 표시하고 민감한 정보를 가린 뒤 바로 공유하세요. 필요한 부분만 간편하게 전달할 수 있습니다.",
  };
  const storeAvailableLabels = {
    "zh-Hans": "在 App Store 下载",
    "zh-Hant": "從 App Store 下載",
    en: "Download on the App Store",
    ja: "App Store からダウンロード",
    ko: "App Store에서 다운로드",
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
    }
  };
  const promoVideo = document.querySelector("[data-promo-video]");
  const soundButton = document.querySelector("[data-promo-sound]");
  const soundLabels = {
    en: ["Turn sound on", "Turn sound off"],
    ja: ["サウンドをオン", "サウンドをオフ"],
    ko: ["소리 켜기", "소리 끄기"],
    "zh-Hans": ["开启声音", "关闭声音"],
    "zh-Hant": ["開啟聲音", "關閉聲音"],
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
    if (/^zh-(hant|tw|hk|mo)(-|$)/.test(language)) return "zh-Hant";
    if (language === "zh" || language.startsWith("zh-")) return "zh-Hans";
    return "en";
  };
  const initialLanguage = () => normalizeLanguage(new URLSearchParams(location.search).get("lang"));

  const render = (language, remember) => {
    language = normalizeLanguage(language);
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
    document.title = titles[language];
    document.querySelector('meta[name="description"]').content = descriptions[language];
    document.querySelector('meta[property="og:title"]').content = titles[language];
    document.querySelector('meta[property="og:description"]').content = socialDescriptions[language];
    document.querySelector(".language-picker").setAttribute("aria-label", {
      "zh-Hans": "切换语言", "zh-Hant": "切換語言", en: "Choose language",
      ja: "言語を選択", ko: "언어 선택",
    }[language]);
    for (const button of document.querySelectorAll(".language-picker button")) {
      button.setAttribute("aria-pressed", button.dataset.language === language ? "true" : "false");
    }
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
    if (remember) {
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
  promoVideo.play().catch(() => {});
})();

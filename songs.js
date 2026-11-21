// 內建完整資料庫（包含語言標記 lang: "zh" / "jp" / "en" / "other"）
const songsDatabase = [
  // ── 原創曲 original ──
  { date: "2025-10-19", streamTitle: "名雪薇薇首支原創曲 | 名為下雪的四季", title: "名為下雪的四季", artist: "名雪薇薇", time: "00:00", sec: 0, vid: "E8hOpNd-Prg", tag: "original", lang: "zh" },
  { date: "2025-12-15", streamTitle: "哇勒Wallet | 名雪薇薇第二支原創曲", title: "哇勒Wallet", artist: "名雪薇薇", time: "00:00", sec: 0, vid: "_RCUIuHH-84", tag: "original", lang: "zh" },

  // ── 翻唱 cover ──
  { date: "2021-11-12", streamTitle: "Ref: rain｜Aimer｜Covered by 名雪薇薇", title: "Ref:rain", artist: "Aimer", time: "00:00", sec: 0, vid: "BHgU60IKEqA", tag: "cover", lang: "jp" },
  { date: "2022-2-28", streamTitle: "ONE｜Aimer｜Covered by 名雪薇薇", title: "ONE", artist: "Aimer", time: "00:00", sec: 0, vid: "uGsgRkteySQ", tag: "cover", lang: "jp" },
  { date: "2024-12-15", streamTitle: "赤伶｜Hita｜Covered by 名雪薇薇", title: "赤伶", artist: "Hita", time: "00:00", sec: 0, vid: "-3Y0xla6Jms", tag: "cover", lang: "zh" },
  { date: "2022-12-25", streamTitle: "カタオモイ｜Aimer｜Covered by 名雪薇薇", title: "カタオモイ", artist: "Aimer", time: "00:00", sec: 0, vid: "4kkmpS5LXbM", tag: "cover", lang: "jp" },
  { date: "2024-4-15", streamTitle: "おもかげ｜milet×Aimer×幾田りら｜Covered by 名雪薇薇", title: "おもかげ", artist: "milet×Aimer×幾田りら", time: "00:00", sec: 0, vid: "djQ1aEHo-co", tag: "cover", lang: "jp" },
  { date: "2022-7-10", streamTitle: "Be Crazy for me｜96猫｜Covered by 名雪薇薇", title: "Be Crazy for me", artist: "96猫", time: "00:00", sec: 0, vid: "u2SRl_pCNek", tag: "cover", lang: "jp" },
  { date: "2022-4-3", streamTitle: "明け星｜Lisa｜Covered by 名雪薇薇", title: "明け星", artist: "Lisa", time: "00:00", sec: 0, vid: "QhC46ZiG1uY", tag: "cover", lang: "jp" },
  { date: "2022-10-15", streamTitle: "朝が来る｜Aimer｜Covered by 名雪薇薇", title: "朝が来る", artist: "Aimer", time: "00:00", sec: 0, vid: "UveD3w2bjrw", tag: "cover", lang: "jp" },
  { date: "2023-8-3", streamTitle: "強風オールバック｜歌愛ユキ｜Covered by 名雪薇薇", title: "強風オールバック", artist: "歌愛ユキ", time: "00:00", sec: 0, vid: "vG_mByDkWYk", tag: "cover", lang: "jp" },
  { date: "2024-4-25", streamTitle: "老公天下第一｜李哈哈｜Covered by 名雪薇薇", title: "老公天下第一", artist: "李哈哈", time: "00:00", sec: 0, vid: "wCPopKhR8aA", tag: "cover", lang: "zh" },
  { date: "2024-8-27", streamTitle: "也可以-閰奕格/名雪薇薇【COVER】第二屆金V獎「年度最佳演唱實力獎」參賽影片", title: "也可以", artist: "閰奕格", time: "00:00", sec: 0, vid: "GkAiKQxBt5E", tag: "cover", lang: "zh" },
  { date: "2024-8-28", streamTitle: "永不失聯的愛-周興哲/名雪薇薇【COVER】第二屆金V獎「年度最佳演唱實力獎」參賽影片", title: "永不失聯的愛", artist: "周興哲", time: "00:00", sec: 0, vid: "i9j5bEBDzB8", tag: "cover", lang: "zh" },
  { date: "2025-9-2", streamTitle: "赤伶-HITA/名雪薇薇【COVER】第三屆金V獎年度最佳演唱實力獎參賽影片", title: "赤伶", artist: "Hita", time: "00:00", sec: 0, vid: "0vYMDvhAmko", tag: "cover", lang: "zh" },

  // ── title：歌回 | 有些相遇，是心跳先認出了你。初見歡迎🤍(2026-11-15) ──
  { date: "2026-11-15", streamTitle: "歌回 | 有些相遇，是心跳先認出了你。初見歡迎🤍", title: "永不失聯的愛", artist: "周興哲", time: "6:24", sec: 384, vid: "aq_8NcWhdaE", tag: "", lang: "zh" },
  { date: "2026-11-15", streamTitle: "歌回 | 有些相遇，是心跳先認出了你。初見歡迎🤍", title: "天使", artist: "五月天", time: "48:36", sec: 2916, vid: "aq_8NcWhdaE", tag: "", lang: "zh" },
  { date: "2026-11-15", streamTitle: "歌回 | 有些相遇，是心跳先認出了你。初見歡迎🤍", title: "喜歡你", artist: "鄧紫棋", time: "1:14:42", sec: 4482, vid: "aq_8NcWhdaE", tag: "", lang: "zh" },
  { date: "2026-11-15", streamTitle: "歌回 | 有些相遇，是心跳先認出了你。初見歡迎🤍", title: "甲乙丙丁", artist: "李佳薇", time: "1:31:13", sec: 5473, vid: "aq_8NcWhdaE", tag: "", lang: "zh" },
  { date: "2026-11-15", streamTitle: "歌回 | 有些相遇，是心跳先認出了你。初見歡迎🤍", title: "繁華攏是夢", artist: "盧廣仲", time: "2:18:27", sec: 8307, vid: "aq_8NcWhdaE", tag: "", lang: "zh" },
  { date: "2026-11-15", streamTitle: "歌回 | 有些相遇，是心跳先認出了你。初見歡迎🤍", title: "節約用愛", artist: "DIOR大穎", time: "2:34:18", sec: 9258, vid: "aq_8NcWhdaE", tag: "", lang: "zh" },

  // ── title：歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍(2026-11-08) ──
  { date: "2026-11-08", streamTitle: "歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍", title: "飛鳥和蟬", artist: "任然", time: "02:49", sec: 169, vid: "XlpxfRUqinY", tag: "", lang: "zh" },
  { date: "2026-11-08", streamTitle: "歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍", title: "愛人錯過", artist: "告五人", time: "21:59", sec: 1319, vid: "XlpxfRUqinY", tag: "", lang: "zh" },
  { date: "2026-11-08", streamTitle: "歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍", title: "你要的愛", artist: "戴佩妮", time: "35:40", sec: 2140, vid: "XlpxfRUqinY", tag: "", lang: "zh" },
  { date: "2026-11-08", streamTitle: "歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍", title: "我想要佔據你", artist: "告五人", time: "53:49", sec: 3229, vid: "XlpxfRUqinY", tag: "", lang: "zh" },
  { date: "2026-11-08", streamTitle: "歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍", title: "甲乙丙丁", artist: "李佳薇", time: "58:14", sec: 3494, vid: "XlpxfRUqinY", tag: "", lang: "zh" },
  { date: "2026-11-08", streamTitle: "歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍", title: "醜八怪", artist: "薛之謙", time: "1:43:00", sec: 6180, vid: "XlpxfRUqinY", tag: "", lang: "zh" },
  { date: "2026-11-08", streamTitle: "歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍", title: "第一天", artist: "孫燕姿", time: "1:48:18", sec: 6498, vid: "XlpxfRUqinY", tag: "", lang: "zh" },
  { date: "2026-11-08", streamTitle: "歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍", title: "繁華攏是夢", artist: "盧廣仲", time: "1:54:20", sec: 6860, vid: "XlpxfRUqinY", tag: "", lang: "zh" },
  { date: "2026-11-08", streamTitle: "歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍", title: "Ref:rain", artist: "Aimer", time: "2:04:17", sec: 7457, vid: "XlpxfRUqinY", tag: "", lang: "jp" },
  { date: "2026-11-08", streamTitle: "歌回 | 愛不是消耗，而是彼此照亮~初見歡迎🤍", title: "赤伶", artist: "HITA", time: "2:10:19", sec: 7819, vid: "XlpxfRUqinY", tag: "", lang: "zh" },

  // ── title：歌回 | 願有人愛你，勝過你的小心翼翼~初見歡迎🤍(2026-11-01) ──
  { date: "2026-11-01", streamTitle: "歌回 | 願有人愛你，勝過你的小心翼翼~初見歡迎🤍", title: "能不能不要說", artist: "五月天", time: "04:15", sec: 255, vid: "eZJbzL0FHME", tag: "", lang: "zh" },
  { date: "2026-11-01", streamTitle: "歌回 | 願有人愛你，勝過你的小心翼翼~初見歡迎🤍", title: "離開的一路上", artist: "理想混蛋", time: "21:30", sec: 1290, vid: "eZJbzL0FHME", tag: "", lang: "zh" },
  { date: "2026-11-01", streamTitle: "歌回 | 願有人愛你，勝過你的小心翼翼~初見歡迎🤍", title: "紅豆", artist: "王菲", time: "33:14", sec: 1994, vid: "eZJbzL0FHME", tag: "", lang: "zh" },
  { date: "2026-11-01", streamTitle: "歌回 | 願有人愛你，勝過你的小心翼翼~初見歡迎🤍", title: "好好 (想把你寫成一首歌)", artist: "五月天", time: "1:16:25", sec: 4585, vid: "eZJbzL0FHME", tag: "", lang: "zh" },
  { date: "2026-11-01", streamTitle: "歌回 | 願有人愛你，勝過你的小心翼翼~初見歡迎🤍", title: "大海", artist: "張雨生", time: "2:31:47", sec: 9107, vid: "eZJbzL0FHME", tag: "", lang: "zh" },

  // ── title：歌回 | 願有人懂你的沉默，也珍惜你的熱烈。初見歡迎🤍(2026-10-18) ──
  { date: "2026-10-18", streamTitle: "歌回 | 願有人懂你的沉默，也珍惜你的熱烈。初見歡迎🤍", title: "愛情萬歲", artist: "五月天", time: "01:55", sec: 115, vid: "XCMVF_8QexA", lang: "zh" },
  { date: "2026-10-18", streamTitle: "歌回 | 願有人懂你的沉默，也珍惜你的熱烈。初見歡迎🤍", title: "雌雄同體", artist: "五月天", time: "10:58", sec: 658, vid: "XCMVF_8QexA", lang: "zh" },
  { date: "2026-10-18", streamTitle: "歌回 | 願有人懂你的沉默，也珍惜你的熱烈。初見歡迎🤍", title: "甜蜜蜜", artist: "鄧麗君", time: "40:28", sec: 2428, vid: "XCMVF_8QexA", lang: "zh" },
  { date: "2026-10-18", streamTitle: "歌回 | 願有人懂你的沉默，也珍惜你的熱烈。初見歡迎🤍", title: "最愛的人傷我最深", artist: "張惠妹", time: "44:32", sec: 2672, vid: "XCMVF_8QexA", lang: "zh" },
  { date: "2026-10-18", streamTitle: "歌回 | 願有人懂你的沉默，也珍惜你的熱烈。初見歡迎🤍", title: "摯友", artist: "A-Lin", time: "51:13", sec: 3073, vid: "XCMVF_8QexA", lang: "zh" },
  { date: "2026-10-18", streamTitle: "歌回 | 願有人懂你的沉默，也珍惜你的熱烈。初見歡迎🤍", title: "有一種悲傷", artist: "A-Lin", time: "57:42", sec: 3462, vid: "XCMVF_8QexA", lang: "zh" },
  { date: "2026-10-18", streamTitle: "歌回 | 願有人懂你的沉默，也珍惜你的熱烈。初見歡迎🤍", title: "沒有如果", artist: "梁靜茹", time: "1:32:36", sec: 5556, vid: "XCMVF_8QexA", lang: "zh" },
  { date: "2026-10-18", streamTitle: "歌回 | 願有人懂你的沉默，也珍惜你的熱烈。初見歡迎🤍", title: "惡作劇", artist: "王藍茵", time: "1:37:57", sec: 5877, vid: "XCMVF_8QexA", lang: "zh" },
  { date: "2026-10-18", streamTitle: "歌回 | 願有人懂你的沉默，也珍惜你的熱烈。初見歡迎🤍", title: "任性", artist: "五月天", time: "1:42:04", sec: 6124, vid: "XCMVF_8QexA", lang: "zh" },

  // ── title：歌回 | 有些喜歡，藏在每一次沉默裡。初見歡迎🤍(2026-10-11) ──
  { date: "2026-10-11", streamTitle: "歌回 | 有些喜歡，藏在每一次沉默裡。初見歡迎🤍", title: "逆光", artist: "孫燕姿", time: "6:13", sec: 373, vid: "RV7zkSTkvYM", tag: "", lang: "zh" },
  { date: "2026-10-11", streamTitle: "歌回 | 有些喜歡，藏在每一次沉默裡。初見歡迎🤍", title: "無字的情批", artist: "黃乙玲", time: "1:04:03", sec: 3843, vid: "RV7zkSTkvYM", tag: "", lang: "zh" },
  { date: "2026-10-11", streamTitle: "歌回 | 有些喜歡，藏在每一次沉默裡。初見歡迎🤍", title: "幾分之幾", artist: "盧廣仲", time: "1:20:27", sec: 4827, vid: "RV7zkSTkvYM", tag: "", lang: "zh" },
  { date: "2026-10-11", streamTitle: "歌回 | 有些喜歡，藏在每一次沉默裡。初見歡迎🤍", title: "七里香", artist: "周杰倫", time: "1:46:39", sec: 6399, vid: "RV7zkSTkvYM", tag: "", lang: "zh" },
  { date: "2026-10-11", streamTitle: "歌回 | 有些喜歡，藏在每一次沉默裡。初見歡迎🤍", title: "愛人錯過", artist: "告五人", time: "2:02:44", sec: 7364, vid: "RV7zkSTkvYM", tag: "", lang: "zh" },

  // ── title：歌回 | 只要回頭我都在你身後~初見歡迎🤍(2026-10-4) ──
  { date: "2026-10-4", streamTitle: "歌回 | 只要回頭我都在你身後~初見歡迎🤍", title: "我只在乎你", artist: "鄧麗君", time: "46:10", sec: 2770, vid: "RV7zkSTkvYM", tag: "", lang: "zh" },
  { date: "2026-10-4", streamTitle: "歌回 | 只要回頭我都在你身後~初見歡迎🤍", title: "桃花諾", artist: "鄧紫棋", time: "50:29", sec: 3029, vid: "RV7zkSTkvYM", tag: "", lang: "zh" },

  // ── title：歌回 | 原來，最遠的距離是沒有以後...初見歡迎🤍(2026-9-13) ──
  { date: "2026-9-13", streamTitle: "歌回 | 原來，最遠的距離是沒有以後...初見歡迎🤍", title: "那些你很冒險的夢", artist: "林俊傑", time: "1:03", sec: 63, vid: "pBA4X3VkTtA", tag: "", lang: "zh" },
  { date: "2026-9-13", streamTitle: "歌回 | 原來，最遠的距離是沒有以後...初見歡迎🤍", title: "炎", artist: "LiSA", time: "22:26", sec: 1346, vid: "pBA4X3VkTtA", tag: "", lang: "jp" },
  { date: "2026-9-13", streamTitle: "歌回 | 原來，最遠的距離是沒有以後...初見歡迎🤍", title: "下一個天亮", artist: "郭靜", time: "32:46", sec: 1966, vid: "pBA4X3VkTtA", tag: "", lang: "zh" },
  { date: "2026-9-13", streamTitle: "歌回 | 原來，最遠的距離是沒有以後...初見歡迎🤍", title: "節約用愛", artist: "DIOR大穎", time: "1:56:22", sec: 6982, vid: "pBA4X3VkTtA", tag: "", lang: "zh" },
  { date: "2026-9-13", streamTitle: "歌回 | 原來，最遠的距離是沒有以後...初見歡迎🤍", title: "我期待", artist: "張惠妹", time: "2:13:37", sec: 8017, vid: "pBA4X3VkTtA", tag: "", lang: "zh" },
  { date: "2026-9-13", streamTitle: "歌回 | 原來，最遠的距離是沒有以後...初見歡迎🤍", title: "傷心的人別聽慢歌", artist: "五月天", time: "2:20:52", sec: 8452, vid: "pBA4X3VkTtA", tag: "", lang: "zh" },
  { date: "2026-9-13", streamTitle: "歌回 | 原來，最遠的距離是沒有以後...初見歡迎🤍", title: "Be Crazy For Me", artist: "96猫", time: "2:56:38", sec: 10598, vid: "pBA4X3VkTtA", tag: "", lang: "jp" },

  // ── title：歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍(2026-9-6) ──
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "帶我走", artist: "楊丞琳", time: "4:17", sec: 257, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "節約用愛", artist: "DIOR 大穎", time: "20:46", sec: 1246, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "愛人錯過", artist: "告五人", time: "26:30", sec: 1590, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "我想要佔據你", artist: "告五人", time: "31:31", sec: 1891, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "Let Me Fall", artist: "孫盛希", time: "45:30", sec: 2730, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "永不失聯的愛", artist: "周興哲", time: "49:18", sec: 2958, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "後來", artist: "劉若英", time: "1:35:03", sec: 5703, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "星空", artist: "五月天", time: "1:41:34", sec: 6094, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "夜訪吸血鬼", artist: "五月天", time: "2:05:58", sec: 7558, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "你就不要想起我", artist: "田馥甄", time: "2:12:34", sec: 7954, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "寂寞不痛", artist: "A-Lin", time: "2:17:41", sec: 8261, vid: "JPvKhoc33HU", tag: "", lang: "zh" },
  { date: "2026-9-6", streamTitle: "歌回 | 我們都在學習，好好愛一個人~❤️初見歡迎🤍", title: "憨人", artist: "五月天", time: "2:31:16", sec: 9076, vid: "JPvKhoc33HU", tag: "", lang: "zh" },

  // ── title：歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍(2026-8-23) ──
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "摯友", artist: "A-Lin", time: "2:39", sec: 159, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "黑輪說", artist: "楊丞琳", time: "28:50", sec: 1730, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "你要的愛", artist: "戴佩妮", time: "34:47", sec: 2087, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "甲乙丙丁", artist: "李佳薇", time: "40:51", sec: 2451, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "派對動物", artist: "五月天", time: "45:00", sec: 2700, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "節約用愛", artist: "DIOR 大穎", time: "1:31:31", sec: 5491, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "残響散歌", artist: "Aimer", time: "1:40:51", sec: 6051, vid: "q21ykRH_vRA", tag: "", lang: "jp" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "野人", artist: "孟維來", time: "1:37:11", sec: 5831, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "Be Crazy For Me", artist: "96貓", time: "1:58:06", sec: 7086, vid: "q21ykRH_vRA", tag: "", lang: "jp" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "赤伶", artist: "HITA", time: "2:04:47", sec: 7487, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "像天堂的懸崖", artist: "李佳薇", time: "2:12:07", sec: 7927, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "おもかげ", artist: "milet×Aimer×幾田りら", time: "2:18:39", sec: 8319, vid: "q21ykRH_vRA", tag: "", lang: "jp" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "消愁", artist: "毛不易", time: "2:22:47", sec: 8567, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "秘密", artist: "藍又時", time: "2:35:56", sec: 9356, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "雨愛", artist: "楊丞琳", time: "2:44:02", sec: 9842, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "我管你", artist: "華晨宇", time: "2:57:30", sec: 10650, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "黑暗騎士", artist: "五月天", time: "3:13:35", sec: 11615, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "拿走了什麼", artist: "A-Lin", time: "3:18:43", sec: 11923, vid: "q21ykRH_vRA", tag: "", lang: "zh" },
  { date: "2026-8-23", streamTitle: "歌回 | 總有人，會把你的真心放在心上~❤️初見歡迎🤍", title: "曲終人散", artist: "張宇", time: "3:26:00", sec: 12360, vid: "q21ykRH_vRA", tag: "", lang: "zh" },

  // ── title：歌回 |成熟的愛，是祝福不是挽留~❤️初見歡迎🤍(2026-8-16) ──
  { date: "2026-8-16", streamTitle: "歌回 |成熟的愛，是祝福不是挽留~❤️初見歡迎🤍", title: "甲乙丙丁", artist: "李佳薇", time: "7:21", sec: 441, vid: "ay_hNCMifWw", tag: "", lang: "zh" },
  { date: "2026-8-16", streamTitle: "歌回 |成熟的愛，是祝福不是挽留~❤️初見歡迎🤍", title: "Let Me Fall", artist: "孫盛希", time: "1:10:43", sec: 4243, vid: "ay_hNCMifWw", tag: "", lang: "zh" },
  { date: "2026-8-16", streamTitle: "歌回 |成熟的愛，是祝福不是挽留~❤️初見歡迎🤍", title: "節約用愛", artist: "DIOR 大穎", time: "1:28:43", sec: 5323, vid: "ay_hNCMifWw", tag: "", lang: "zh" },
  { date: "2026-8-16", streamTitle: "歌回 |成熟的愛，是祝福不是挽留~❤️初見歡迎🤍", title: "我的心裡只有你沒有他", artist: "黃小琥", time: "1:34:40", sec: 5680, vid: "ay_hNCMifWw", tag: "", lang: "zh" },
  { date: "2026-8-16", streamTitle: "歌回 |成熟的愛，是祝福不是挽留~❤️初見歡迎🤍", title: "何日君再來", artist: "鄧麗君", time: "1:58:13", sec: 7093, vid: "ay_hNCMifWw", tag: "", lang: "zh" },
  { date: "2026-8-16", streamTitle: "歌回 |成熟的愛，是祝福不是挽留~❤️初見歡迎🤍", title: "心裡有針", artist: "蕭煌奇", time: "2:02:28", sec: 7348, vid: "ay_hNCMifWw", tag: "", lang: "zh" },
  { date: "2026-8-16", streamTitle: "歌回 |成熟的愛，是祝福不是挽留~❤️初見歡迎🤍", title: "瑟魯之歌テルーの唄", artist: "手嶌葵", time: "2:27:48", sec: 8868, vid: "ay_hNCMifWw", tag: "", lang: "jp" },
  { date: "2026-8-16", streamTitle: "歌回 |成熟的愛，是祝福不是挽留~❤️初見歡迎🤍", title: "残響散歌", artist: "Aimer", time: "2:53:42", sec: 10422, vid: "ay_hNCMifWw", tag: "", lang: "jp" },
  { date: "2026-8-16", streamTitle: "歌回 |成熟的愛，是祝福不是挽留~❤️初見歡迎🤍", title: "朝が来る", artist: "Aimer", time: "2:58:02", sec: 10682, vid: "ay_hNCMifWw", tag: "", lang: "jp" }
];
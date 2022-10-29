document.addEventListener('DOMContentLoaded', function () {
  const quranList = [
    {
      audioSrc:
        './quran/m1.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الفاتحة',
      desc: 'القارئ : سعود الشريم',
      id: 1,
    },
    {
      audioSrc:
        './quran/m2.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة البقرة',
      desc: 'القارئ : سعود الشريم',
      id: 2,
    },
    {
      audioSrc:
        './quran/m3.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة آل عمران ',
      desc: 'القارئ : سعود الشريم',
      id: 3,
    },
    {
      audioSrc:
        './quran/m4.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة النساء ',
      desc: 'القارئ : سعود الشريم',
      id: 4,
    },
    {
      audioSrc:
        './quran/m5.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة المائدة ',
      desc: 'القارئ : سعود الشريم',
      id: 5,
    },
    {
      audioSrc:
        './quran/m6.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الأنعام ',
      desc: 'القارئ : سعود الشريم',
      id: 6,
    },
    {
      audioSrc:
        './quran/m7.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الأعراف',
      desc: 'القارئ : سعود الشريم',
      id: 7,
    },
    {
      audioSrc:
        './quran/m8.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الأنفال',
      desc: 'القارئ : سعود الشريم',
      id: 8,
    },
    {
      audioSrc:
        './quran/m9.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة التوبة',
      desc: 'القارئ : سعود الشريم',
      id: 9,
    },
    {
      audioSrc:
        './quran/m10.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة يونس',
      desc: 'القارئ : سعود الشريم',
      id: 10,
    },
    {
      audioSrc:
        './quran/m11.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة هود',
      desc: 'القارئ : سعود الشريم',
      id: 11,
    },
    {
      audioSrc:
        './quran/m12.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة يوسف',
      desc: 'القارئ : سعود الشريم',
      id: 12,
    },
    {
      audioSrc:
        './quran/m13.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الرعد',
      desc: 'القارئ : سعود الشريم',
      id: 13,
    },
    {
      audioSrc:
        './quran/m14.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة إبراهيم',
      desc: 'القارئ : سعود الشريم',
      id: 14,
    },
    {
      audioSrc:
        './quran/m15.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الحجر',
      desc: 'القارئ : سعود الشريم',
      id: 15,
    },
    {
      audioSrc:
        './quran/m16.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة النحل',
      desc: 'القارئ : سعود الشريم',
      id: 16,
    },
    {
      audioSrc:
        './quran/m17.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الإسراء',
      desc: 'القارئ : سعود الشريم',
      id: 17,
    },
    {
      audioSrc:
        './quran/m18.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الكهف',
      desc: 'القارئ : سعود الشريم',
      id: 18,
    },
    {
      audioSrc:
        './quran/m19.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة مريم',
      desc: 'القارئ : سعود الشريم',
      id: 19,
    },
    {
      audioSrc:
        './quran/m20.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة طه',
      desc: 'القارئ : سعود الشريم',
      id: 20,
    },
    {
      audioSrc:
        './quran/m21.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الأنبياء',
      desc: 'القارئ : سعود الشريم',
      id: 21,
    },
    {
      audioSrc:
        './quran/m22.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الحج',
      desc: 'القارئ : سعود الشريم',
      id: 22,
    },
    {
      audioSrc:
        './quran/m23.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة المؤمنون',
      desc: 'القارئ : سعود الشريم',
      id: 23,
    },
    {
      audioSrc:
        './quran/m24.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة النّور',
      desc: 'القارئ : سعود الشريم',
      id: 24,
    },
    {
      audioSrc:
        './quran/m25.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الفرقان',
      desc: 'القارئ : سعود الشريم',
      id: 25,
    },
    {
      audioSrc:
        './quran/m26.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الشعراء',
      desc: 'القارئ : سعود الشريم',
      id: 26,
    },
    {
      audioSrc:
        './quran/m27.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة النّمل',
      desc: 'القارئ : سعود الشريم',
      id: 27,
    },
    {
      audioSrc:
        './quran/m28.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة القصص',
      desc: 'القارئ : سعود الشريم',
      id: 28,
    },
    {
      audioSrc:
        './quran/m29.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة العنكبوت',
      desc: 'القارئ : سعود الشريم',
      id: 29,
    },
    {
      audioSrc:
        './quran/m30.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الرّوم',
      desc: 'القارئ : سعود الشريم',
      id: 30,
    },
    {
      audioSrc:
        './quran/m31.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة لقمان',
      desc: 'القارئ : سعود الشريم',
      id: 31,
    },
    {
      audioSrc:
        './quran/m32.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة السجدة',
      desc: 'القارئ : سعود الشريم',
      id: 32,
    },
    {
      audioSrc:
        './quran/m33.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الأحزاب',
      desc: 'القارئ : سعود الشريم',
      id: 33,
    },
    {
      audioSrc:
        './quran/m34.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة سبأ',
      desc: 'القارئ : سعود الشريم',
      id: 34,
    },
    {
      audioSrc:
        './quran/m35.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة فاطر',
      desc: 'القارئ : سعود الشريم',
      id: 35,
    },
    {
      audioSrc:
        './quran/m36.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة يس',
      desc: 'القارئ : سعود الشريم',
      id: 36,
    },
    {
      audioSrc:
        './quran/m37.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الصافات',
      desc: 'القارئ : سعود الشريم',
      id: 37,
    },
    {
      audioSrc:
        './quran/m38.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة ص',
      desc: 'القارئ : سعود الشريم',
      id: 38,
    },
    {
      audioSrc:
        './quran/m39.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الزمر',
      desc: 'القارئ : سعود الشريم',
      id: 39,
    },
    {
      audioSrc:
        './quran/m40.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة غافر',
      desc: 'القارئ : سعود الشريم',
      id: 40,
    },
    {
      audioSrc:
        './quran/m41.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة فصّلت',
      desc: 'القارئ : سعود الشريم',
      id: 41,
    },
    {
      audioSrc:
        './quran/m42.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الشورى',
      desc: 'القارئ : سعود الشريم',
      id: 42,
    },
    {
      audioSrc:
        './quran/m43.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الزخرف',
      desc: 'القارئ : سعود الشريم',
      id: 43,
    },
    {
      audioSrc:
        './quran/m44.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الدّخان',
      desc: 'القارئ : سعود الشريم',
      id: 44,
    },
    {
      audioSrc:
        './quran/m45.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الجاثية',
      desc: 'القارئ : سعود الشريم',
      id: 45,
    },
    {
      audioSrc:
        './quran/m46.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الأحقاف',
      desc: 'القارئ : سعود الشريم',
      id: 46,
    },
    {
      audioSrc:
        './quran/m47.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة محمد',
      desc: 'القارئ : سعود الشريم',
      id: 47,
    },
    {
      audioSrc:
        './quran/m48.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الفتح',
      desc: 'القارئ : سعود الشريم',
      id: 48,
    },
    {
      audioSrc:
        './quran/m49.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الحجرات',
      desc: 'القارئ : سعود الشريم',
      id: 49,
    },
    {
      audioSrc:
        './quran/m50.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة ق',
      desc: 'القارئ : سعود الشريم',
      id: 50,
    },
    {
      audioSrc:
        './quran/m51.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الذاريات',
      desc: 'القارئ : سعود الشريم',
      id: 51,
    },
    {
      audioSrc:
        './quran/m52.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الطور',
      desc: 'القارئ : سعود الشريم',
      id: 52,
    },
    {
      audioSrc:
        './quran/m53.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة النجم',
      desc: 'القارئ : سعود الشريم',
      id: 53,
    },
    {
      audioSrc:
        './quran/m54.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة القمر',
      desc: 'القارئ : سعود الشريم',
      id: 54,
    },
    {
      audioSrc:
        './quran/m55.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الرحمن',
      desc: 'القارئ : سعود الشريم',
      id: 55,
    },
    {
      audioSrc:
        './quran/m56.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الواقعة',
      desc: 'القارئ : سعود الشريم',
      id: 56,
    },
    {
      audioSrc:
        './quran/m57.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الحديد',
      desc: 'القارئ : سعود الشريم',
      id: 57,
    },
    {
      audioSrc:
        './quran/m58.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة المجادلة',
      desc: 'القارئ : سعود الشريم',
      id: 58,
    },
    {
      audioSrc:
        './quran/m59.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الحشر',
      desc: 'القارئ : سعود الشريم',
      id: 59,
    },
    {
      audioSrc:
        './quran/m60.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الممتحنة',
      desc: 'القارئ : سعود الشريم',
      id: 60,
    },
    {
      audioSrc:
        './quran/m61.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الصف',
      desc: 'القارئ : سعود الشريم',
      id: 61,
    },
    {
      audioSrc:
        './quran/m62.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الجمعة',
      desc: 'القارئ : سعود الشريم',
      id: 62,
    },
    {
      audioSrc:
        './quran/m63.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة المنافقون',
      desc: 'القارئ : سعود الشريم',
      id: 63,
    },
    {
      audioSrc:
        './quran/m64.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة التغابن',
      desc: 'القارئ : سعود الشريم',
      id: 64,
    },
    {
      audioSrc:
        './quran/m65.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الطلاق',
      desc: 'القارئ : سعود الشريم',
      id: 65,
    },
    {
      audioSrc:
        './quran/m66.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة التحريم',
      desc: 'القارئ : سعود الشريم',
      id: 66,
    },
    {
      audioSrc:
        './quran/m67.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الملك',
      desc: 'القارئ : سعود الشريم',
      id: 67,
    },
    {
      audioSrc:
        './quran/m68.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة القلم',
      desc: 'القارئ : سعود الشريم',
      id: 68,
    },
    {
      audioSrc:
        './quran/m69.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الحاقة',
      desc: 'القارئ : سعود الشريم',
      id: 69,
    },
    {
      audioSrc:
        './quran/m70.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة المعارج',
      desc: 'القارئ : سعود الشريم',
      id: 70,
    },
    {
      audioSrc:
        './quran/m71.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة نوح',
      desc: 'القارئ : سعود الشريم',
      id: 71,
    },
    {
      audioSrc:
        './quran/m72.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الجن',
      desc: 'القارئ : سعود الشريم',
      id: 72,
    },
    {
      audioSrc:
        './quran/m73.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة المزّمّل',
      desc: 'القارئ : سعود الشريم',
      id: 73,
    },
    {
      audioSrc:
        './quran/m74.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة المدّثر',
      desc: 'القارئ : سعود الشريم',
      id: 74,
    },
    {
      audioSrc:
        './quran/m75.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة القيامة',
      desc: 'القارئ : سعود الشريم',
      id: 75,
    },
    {
      audioSrc:
        './quran/m76.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الإنسان',
      desc: 'القارئ : سعود الشريم',
      id: 76,
    },
    {
      audioSrc:
        './quran/m77.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة المرسلات',
      desc: 'القارئ : سعود الشريم',
      id: 77,
    },
    {
      audioSrc:
        './quran/m78.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة النبأ',
      desc: 'القارئ : سعود الشريم',
      id: 78,
    },
    {
      audioSrc:
        './quran/m79.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة النازعات',
      desc: 'القارئ : سعود الشريم',
      id: 79,
    },
    {
      audioSrc:
        './quran/m80.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة عبس',
      desc: 'القارئ : سعود الشريم',
      id: 80,
    },
    {
      audioSrc:
        './quran/m81.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة التكوير',
      desc: 'القارئ : سعود الشريم',
      id: 81,
    },
    {
      audioSrc:
        './quran/m82.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الانفطار',
      desc: 'القارئ : سعود الشريم',
      id: 82,
    },
    {
      audioSrc:
        './quran/m83.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة المطفّفين',
      desc: 'القارئ : سعود الشريم',
      id: 83,
    },
    {
      audioSrc:
        './quran/m84.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الانشقاق',
      desc: 'القارئ : سعود الشريم',
      id: 84,
    },
    {
      audioSrc:
        './quran/m85.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة البروج',
      desc: 'القارئ : سعود الشريم',
      id: 85,
    },
    {
      audioSrc:
        './quran/m86.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الطارق',
      desc: 'القارئ : سعود الشريم',
      id: 86,
    },
    {
      audioSrc:
        './quran/m87.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الأعلى',
      desc: 'القارئ : سعود الشريم',
      id: 87,
    },
    {
      audioSrc:
        './quran/m88.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الغاشية',
      desc: 'القارئ : سعود الشريم',
      id: 88,
    },
    {
      audioSrc:
        './quran/m89.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الفجر',
      desc: 'القارئ : سعود الشريم',
      id: 89,
    },
    {
      audioSrc:
        './quran/m90.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة البلد',
      desc: 'القارئ : سعود الشريم',
      id: 90,
    },
    {
      audioSrc:
        './quran/m91.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الشمس',
      desc: 'القارئ : سعود الشريم',
      id: 91,
    },
    {
      audioSrc:
        './quran/m92.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الليل',
      desc: 'القارئ : سعود الشريم',
      id: 92,
    },
    {
      audioSrc:
        './quran/m93.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الضحى',
      desc: 'القارئ : سعود الشريم',
      id: 93,
    },
    {
      audioSrc:
        './quran/m94.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الشرح',
      desc: 'القارئ : سعود الشريم',
      id: 94,
    },
    {
      audioSrc:
        './quran/m95.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة التين',
      desc: 'القارئ : سعود الشريم',
      id: 95,
    },
    {
      audioSrc:
        './quran/m96.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة العلق',
      desc: 'القارئ : سعود الشريم',
      id: 96,
    },
    {
      audioSrc:
        './quran/m97.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة القدر',
      desc: 'القارئ : سعود الشريم',
      id: 97,
    },
    {
      audioSrc:
        './quran/m98.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة البينة',
      desc: 'القارئ : سعود الشريم',
      id: 98,
    },
    {
      audioSrc:
        './quran/m99.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الزلزلة',
      desc: 'القارئ : سعود الشريم',
      id: 99,
    },
    {
      audioSrc:
        './quran/m100.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة العاديات',
      desc: 'القارئ : سعود الشريم',
      id: 100,
    },
    {
      audioSrc:
        './quran/m101.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة القارعة',
      desc: 'القارئ : سعود الشريم',
      id: 101,
    },
    {
      audioSrc:
        './quran/m102.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة التكاثر',
      desc: 'القارئ : سعود الشريم',
      id: 102,
    },
    {
      audioSrc:
        './quran/m103.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة العصر',
      desc: 'القارئ : سعود الشريم',
      id: 103,
    },
    {
      audioSrc:
        './quran/m104.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الهمزة',
      desc: 'القارئ : سعود الشريم',
      id: 104,
    },
    {
      audioSrc:
        './quran/m105.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الفيل',
      desc: 'القارئ : سعود الشريم',
      id: 105,
    },
    {
      audioSrc:
        './quran/m106.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة قريش',
      desc: 'القارئ : سعود الشريم',
      id: 106,
    },
    {
      audioSrc:
        './quran/m107.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الماعون',
      desc: 'القارئ : سعود الشريم',
      id: 107,
    },
    {
      audioSrc:
        './quran/m108.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الكوثر',
      desc: 'القارئ : سعود الشريم',
      id: 108,
    },
    {
      audioSrc:
        './quran/m109.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الكافرون',
      desc: 'القارئ : سعود الشريم',
      id: 109,
    },
    {
      audioSrc:
        './quran/m110.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة النصر',
      desc: 'القارئ : سعود الشريم',
      id: 110,
    },
    {
      audioSrc:
        './quran/m111.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة المسد',
      desc: 'القارئ : سعود الشريم',
      id: 111,
    },
    {
      audioSrc:
        './quran/m112.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الإخلاص',
      desc: 'القارئ : سعود الشريم',
      id: 112,
    },
    {
      audioSrc:
        './quran/m113.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة الفلق',
      desc: 'القارئ : سعود الشريم',
      id: 113,
    },
    {
      audioSrc:
        './quran/m114.mp3',
      coverSrc: './images/quran.jpg',
      name: 'سورة النّاس',
      desc: 'القارئ : سعود الشريم',
      id: 114,
    },
  ];

  const currentTrackName = document.querySelector('header h3');
  const currentTrackDesc = document.querySelector('header p');
  const currentTrackCover = document.querySelector('header img');
  const currentTrackAudio = document.querySelector('audio');
  const playPauseBtn = document.querySelector('.event-playPause');
  const muteUnmuteBtn = document.querySelector('.event-muteUnmute');
  const playNextBtn = document.querySelector('.event-next');
  const playPrevBtn = document.querySelector('.event-prev');
  const progress = document.querySelector('.slider-progress');
  const currentTrackTime = document.querySelector('.count-current');
  const finalTrackTime = document.querySelector('.count-final');
  // ADD quran TO MY PLAYLIST ON PAGE LOAD
  (function addMyquranList() {
    for (let track of quranList) {
      var li = document.createElement('li');
      li.id = track.id;
      li.innerHTML = `
                    <div class="track-number">0${track.id}</div>
                    <img
                    src=${track.coverSrc}
                    class="track-img"
                    alt=""
                    />

                    <div class="track-detail">
                    <div class="track-detail_name">${track.name}</div>
                    <div class="track-detail_desc">
                        <small>${track.desc}</small>
                    </div>
                    </div>
        `;
      document.querySelector('ul').appendChild(li);
      (function (id) {
        li.addEventListener(
          'click',
          () => {
            playSelectedTrack(id);
          },
          false
        );
      })(track.id);
    }
  })();

  let trackId = 1;

  const loadTrack = (songId) => {
    const song = quranList.find((track) => track.id === songId);

    const { audioSrc, coverSrc, name, desc } = song;
    currentTrackName.innerText = name;
    currentTrackDesc.innerText = desc;
    currentTrackAudio.src = audioSrc;
    currentTrackCover.src = coverSrc;
  };

  const playSelectedTrack = (songId) => {
    trackId = songId;
    loadTrack(songId);
    playTrack();
  };

  loadTrack(trackId);

  const playTrack = () => {
    playPauseBtn.classList.remove('fa-play');
    playPauseBtn.classList.add('fa-pause');

    currentTrackAudio.play();
  };

  const pauseTrack = () => {
    playPauseBtn.classList.remove('fa-pause');
    playPauseBtn.classList.add('fa-play');

    currentTrackAudio.pause();
  };

  const playPrevTrack = () => {
    trackId--;

    if (trackId < 0) {
      trackId = quranList.length - 1;
    }
    loadTrack(trackId);
    playTrack();
  };

  const playNextTrack = () => {
    trackId++;
    if (trackId > quranList.length - 1) {
      trackId = 0;
    }
    loadTrack(trackId);
    playTrack();
  };

  const updateProgress = () => {
    const currentTime = currentTrackAudio.currentTime;
    const trackDuration = currentTrackAudio.duration;
    const percent = (currentTime / trackDuration) * 100;
    progress.style.width = percent + '%';
    let curMins = Math.floor(currentTime / 60);
    let curSecs = Math.floor(currentTime - curMins * 60);
    let durMins = Math.floor(trackDuration / 60) || '--';
    let durSecs = Math.floor(trackDuration - durMins * 60) || '--';

    if (curMins < 10) {
      curMins = `0${curMins}`;
    }
    if (curSecs < 10) {
      curSecs = `0${curSecs}`;
    }
    if (durMins < 10) {
      durMins = `0${durMins}`;
    }
    if (durSecs < 10) {
      durSecs = `0${durSecs}`;
    }

    currentTrackTime.innerText = `${curMins}:${curSecs}`;
    finalTrackTime.innerText = `${durMins}:${durSecs}`;
  };

  const muteUnmuteTrack = () => {
    if (currentTrackAudio.muted) {
      currentTrackAudio.muted = false;
      muteUnmuteBtn.classList.remove('fa-volume-mute');
      muteUnmuteBtn.classList.add('fa-volume-up');
    } else {
      currentTrackAudio.muted = true;
      muteUnmuteBtn.classList.remove('fa-volume-up');
      muteUnmuteBtn.classList.add('fa-volume-mute');
    }
  };

  playPauseBtn.addEventListener('click', () => {
    const currentlyPlaying = playPauseBtn.classList.contains('fa-pause');

    currentlyPlaying ? pauseTrack() : playTrack();
  });
  muteUnmuteBtn.addEventListener('click', () => muteUnmuteTrack());

  playPrevBtn.addEventListener('click', () => playPrevTrack());
  playNextBtn.addEventListener('click', () => playNextTrack());

  currentTrackAudio.addEventListener('timeupdate', () => updateProgress());
});

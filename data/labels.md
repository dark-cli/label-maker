# Label Maker Database

## Settings
- pagesize: A4
- orientation: landscape
- facewidth: 58
- wrapwidth: 22
- hdata: 17.5
- barwidth: 2
- codefont: 11.5
- descfont: 8
- padleft: 2.5
- iconsize: 4.5
- spacing: 1.5
- opacity: 37

## Types
- **ac**: AC Power | #e02020
- **dc**: DC Power | #ff7800
- **eth**: Ethernet | #c061cb
- **fbr**: Fiber | #2ec27e

---

## Main Rack

### AC-CHG-IN
| Field | Value |
|-------|-------|
| **Title** | AC Power Input · Main to Inverter |
| **Type** | ac |
| **QR** | https://dark-cli.github.io/label-maker/?code=AC-CHG-IN |
| **Details** | خط الكهرباء الرئيسي من المنزل الذي يغذي جهاز العاكس (Inverter) |

### AC-INV-OUT
| Field | Value |
|-------|-------|
| **Title** | AC Power Output · Inverter to Distribution |
| **Type** | ac |
| **QR** | https://dark-cli.github.io/label-maker/?code=AC-INV-OUT |
| **Details** | خط الكهرباء الخارج من جهاز العاكس (Inverter) الذي يغذي لوح التوزيع الرئيسي |

### AC-MAIN-BKUP
| Field | Value |
|-------|-------|
| **Title** | AC Power Input · Main Backup Line |
| **Type** | ac |
| **QR** | https://dark-cli.github.io/label-maker/?code=AC-MAIN-BKUP |
| **Details** | خط كهرباء احتياطي مباشر من المنزل إلى الرف يستخدم في حالة انقطاع جهاز العاكس (Inverter) عن الخدمة |

### AC-OUT-RACK
| Field | Value |
|-------|-------|
| **Title** | AC Power Output · Inverter to Rack |
| **Type** | ac |
| **QR** | https://dark-cli.github.io/label-maker/?code=AC-OUT-RACK |
| **Details** | خط الكهرباء الخارج من جهاز العاكس (Inverter) الذي يغذي منافذ الكهرباء في الرف الرئيسي |

### AC-OUT-ROOM
| Field | Value |
|-------|-------|
| **Title** | AC Power Output · Room Supply |
| **Type** | ac |
| **QR** | https://dark-cli.github.io/label-maker/?code=AC-OUT-ROOM |
| **Details** | خط الكهرباء الذي يغذي غرفة محمد علي ملاحظة: هذا الخط عبارة عن موصل Live واحد فقط، بينما الموصل Neutral مشترك مع المنزل |

### AC-OUT-DIST-ROOF
| Field | Value |
|-------|-------|
| **Title** | AC Power Output · Roof Distribution Panel |
| **Type** | ac |
| **QR** | https://dark-cli.github.io/label-maker/?code=AC-OUT-DIST-ROOF |
| **Details** | خط الكهرباء الموزع إلى لوح التوزيع الرئيسي (Main Panel) الموجود على سطح المنزل |

### AC-OUT-DIST-A
| Field | Value |
|-------|-------|
| **Title** | AC Power Output · Distribution Switch A |
| **Type** | ac |
| **QR** | https://dark-cli.github.io/label-maker/?code=AC-OUT-DIST-A |
| **Details** | خط الكهرباء الموزع إلى خزانة التوزيع (Cabinet) A، الموجودة فوق حمام المرآب بالمنزل |

### AC-OUT-DIST-B
| Field | Value |
|-------|-------|
| **Title** | AC Power Output · Distribution Switch B |
| **Type** | ac |
| **QR** | https://dark-cli.github.io/label-maker/?code=AC-OUT-DIST-B |
| **Details** | خط الكهرباء الموزع إلى خزانة التوزيع (Cabinet) B، الموجودة أمام منزل أبو زين |

### AC-OUT-DIST-F
| Field | Value |
|-------|-------|
| **Title** | AC Power Output · Distribution Switch F |
| **Type** | ac |
| **QR** | https://dark-cli.github.io/label-maker/?code=AC-OUT-DIST-F |
| **Details** | خط الكهرباء الموزع إلى خزانة التوزيع (Cabinet) F، الموجودة على عمود الكهرباء أمام منزل عقيل |

---

## Roof Distribution Panel

### AC-IN-RACK
| Field | Value |
|-------|-------|
| **Title** | AC Power Input · From Roof Panel to Rack |
| **Type** | ac |
| **QR** | https://dark-cli.github.io/label-maker/?code=AC-IN-RACK |
| **Details** | خط الكهرباء من لوح التوزيع على السطح الذي يغذي منظم الطاقة الرئيسي (Distribution Panel) في الرف |

### DC24-OUT-POE
| Field | Value |
|-------|-------|
| **Title** | DC 24V Output · To PoE Distribution Panel |
| **Type** | dc |
| **QR** | https://dark-cli.github.io/label-maker/?code=DC24-OUT-POE |
| **Details** | خط الكهرباء 24 فولط (DC) الذي يغذي لوح توزيع PoE المستخدم لتشغيل أجهزة القطاعات (Sectors) |

### ETH-ROOM
| Field | Value |
|-------|-------|
| **Title** | Ethernet · Ali's Room |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=ETH-ROOM |
| **Details** | كابل شبكة Ethernet عالي السرعة الذي يغذي غرفة علي |

### ETH-DIST-HOME
| Field | Value |
|-------|-------|
| **Title** | Ethernet · Home Network Switch |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=ETH-DIST-HOME |
| **Details** | كابل شبكة Ethernet الذي يغذي مفتاح الشبكة (Switch) الرئيسي بالمنزل في الطابق الثاني |

### ETH-AHMED
| Field | Value |
|-------|-------|
| **Title** | Ethernet · Ahmed's Home |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=ETH-AHMED |
| **Details** | كابل شبكة Ethernet عالي السرعة الذي يغذي منزل أحمد |

### FBR-DIST-ROOF
| Field | Value |
|-------|-------|
| **Title** | Fiber Optic · Main to Roof Sector Switch |
| **Type** | fbr |
| **QR** | https://dark-cli.github.io/label-maker/?code=FBR-DIST-ROOF |
| **Details** | كابل الألياف البصرية الرئيسي الذي يغذي مفتاح التوزيع (Switch) على سطح المنزل |

### FBR-DIST-A
| Field | Value |
|-------|-------|
| **Title** | Fiber Optic · Distribution Switch A |
| **Type** | fbr |
| **QR** | https://dark-cli.github.io/label-maker/?code=FBR-DIST-A |
| **Details** | كابل الألياف البصرية الذي يغذي مفتاح التوزيع (Switch) A الموجود في خزانة التوزيع فوق حمام المرآب |

### FBR-DIST-B
| Field | Value |
|-------|-------|
| **Title** | Fiber Optic · Distribution Switch B |
| **Type** | fbr |
| **QR** | https://dark-cli.github.io/label-maker/?code=FBR-DIST-B |
| **Details** | كابل الألياف البصرية الذي يغذي مفتاح التوزيع (Switch) B الموجود في خزانة التوزيع أمام منزل أبو زينب |

### FBR-DIST-F
| Field | Value |
|-------|-------|
| **Title** | Fiber Optic · Distribution Switch F |
| **Type** | fbr |
| **QR** | https://dark-cli.github.io/label-maker/?code=FBR-DIST-F |
| **Details** | كابل الألياف البصرية الذي يغذي مفتاح التوزيع (Switch) F الموجود في خزانة التوزيع (Cabinet) F أمام منزل عقيل |

### FBR-ISP
| Field | Value |
|-------|-------|
| **Title** | Fiber Optic · ISP Input (Horizon) |
| **Type** | fbr |
| **QR** | https://dark-cli.github.io/label-maker/?code=FBR-ISP |
| **Details** | كابل الألياف البصرية الرئيسي القادم من شركة مزود الإنترنت (ISP) Horizon |

### HOME-SARA
| Field | Value |
|-------|-------|
| **Title** | Network Port · Sara |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=HOME-SARA |
| **Details** | منفذ الشبكة (Port) المخصص لغرفة/جهاز سارة |

### HOME-MOHAMED
| Field | Value |
|-------|-------|
| **Title** | Network Port · Mohamed |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=HOME-MOHAMED |
| **Details** | منفذ الشبكة (Port) المخصص لغرفة/جهاز محمد |

### HOME-RADA
| Field | Value |
|-------|-------|
| **Title** | Network Port · Rada |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=HOME-RADA |
| **Details** | منفذ الشبكة (Port) المخصص لغرفة/جهاز رضا |

### SECT-H1
| Field | Value |
|-------|-------|
| **Title** | Network Port · Sector H1 |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=SECT-H1 |
| **Details** | منفذ الشبكة (Port) الخاص بأجهزة القطاع (Sector) H1 ملاحظة: هذا الكابل عبارة عن كابل واحد يحمل شبكة Ethernet و PoE معاً |

### SECT-H2
| Field | Value |
|-------|-------|
| **Title** | Network Port · Sector H2 |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=SECT-H2 |
| **Details** | منفذ الشبكة (Port) الخاص بأجهزة القطاع (Sector) H2 ملاحظة: هذا الكابل عبارة عن كابل واحد يحمل شبكة Ethernet و PoE معاً |

### SECT-H3
| Field | Value |
|-------|-------|
| **Title** | Network Port · Sector H3 |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=SECT-H3 |
| **Details** | منفذ الشبكة (Port) الخاص بأجهزة القطاع (Sector) H3 ملاحظة: هذا الكابل عبارة عن كابل واحد يحمل شبكة Ethernet و PoE معاً |

### USER-0017
| Field | Value |
|-------|-------|
| **Title** | Network Port · User 0017 |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=USER-0017 |
| **Details** | منفذ الشبكة (Port) المخصص للمستخدم/الجهاز رقم 0017 |

### User-0020
| Field | Value |
|-------|-------|
| **Title** | Network Port · User 0020 |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=User-0020 |
| **Details** | منفذ الشبكة (Port) المخصص للمستخدم/الجهاز رقم 0020 |

### HOME-UPLINK
| Field | Value |
|-------|-------|
| **Title** | Ethernet Uplink · Main Switch to Home Router |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=HOME-UPLINK |
| **Details** | كابل Ethernet الذي يربط مفتاح الشبكة (Switch) الرئيسي بجهاز الراوتر (Router) المنزلي Mikrotik 3011 من Port 1 في Switch الرئيسي إلى Port 5 في جهاز Mikrotik 3011 |

### POE-SW-DIST-ROOF
| Field | Value |
|-------|-------|
| **Title** | PoE Output · Roof Sector Switch |
| **Type** | eth |
| **QR** | https://dark-cli.github.io/label-maker/?code=POE-SW-DIST-ROOF |
| **Details** | كابل Power over Ethernet (PoE) الذي يغذي مفتاح الشبكة (Switch) الموجود على السطح والمتصل بأجهزة القطاعات (Sectors) |

### SW-SECT-UPLINK
| Field | Value |
|-------|-------|
| **Title** | Fiber Optic Uplink · Sector Switch to Main Rack |
| **Type** | fbr |
| **QR** | https://dark-cli.github.io/label-maker/?code=SW-SECT-UPLINK |
| **Details** | كابل الألياف البصرية الذي يربط مفتاح الشبكة (Switch) الخاص بأجهزة القطاعات (Sectors) مع مفتاح الشبكة الرئيسي في الرف |

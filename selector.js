class Selector {
  constructor(sureKind, sureNation) {
    this.sureKind = sureKind;
    this.sureNation = sureNation;
    this.resultUrl = null;
  }

  sureFinder(sk, sn, ss, sir) {
    this.sureKind = sk;
    this.sureNation = sn;
    this.sureSelect = ss;
    this.sureIsRand = sir;
    this.resultUrl = null;

    switch (!this.sureIsRand) {
      //Tam Sure Seçilmiştir Ve Karışık Listeler Gelmeyecektir
      case true:
        //Fatiha
        if (this.sureSelect == 1) {
          //Türk
          if (this.sureNation == "turkish") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=M8leM3w0J7s&list=PLHJOyeH38RjnebU64biaYgIRuaBz5xtTa";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=i-ezGPl32s4&list=PLHJOyeH38Rjk9bpriBtvPR3cvKvMcY_T2";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=TV5SRcu_w2U&list=PLHJOyeH38RjlGWKv4EZHM-FmN7cV-22Ns";
            }
            //Yabancı
          } else if (this.sureNation == "foreign") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=MHUGR3Ejly8&list=PLHJOyeH38RjmxERTwfqwx5PQnswDanJRx";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=LE5B0i2lKA0&list=PLHJOyeH38RjmvlEcyIeOKQk0TeLobd6cU";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=nbwBkaptuV0&list=PLHJOyeH38Rjlg8ovicLDQHZZJCsC31XHf";
            }
          }
        }
        //Yâsin
        else if (this.sureSelect == 36) {
          //Türk
          if (this.sureNation == "turkish") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=3vEPZlHkVQA&list=PLHJOyeH38Rjl1AFmAEbnO4ANd45UuxT8i";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=TNvGAbR1XHc&list=PLHJOyeH38RjklM6pSW2qzCOp02QxDEnAp";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=wHh7f4fVHLQ&list=PLHJOyeH38Rjl1JYl0PxPtgYzMnYIHE-Re";
            }
            //Yabancı
          } else if (this.sureNation == "foreign") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=PxIuqDRQFko&list=PLHJOyeH38RjnS-ZXeXij6JZfrlF4SI1tl";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=7wfnKKro2tc&list=PLHJOyeH38Rjkb0941tP4U9xeS8pVjMI4w";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=1zGdic_pYwM&list=PLHJOyeH38RjnbCmIt0PNJYDNOnkxRpB9L";
            }
          }
        }
        //Fetih
        else if (this.sureSelect == 48) {
          //Türk
          if (this.sureNation == "turkish") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=smq6LwoAmuI&list=PLHJOyeH38RjncKk9kOTM8DKY_ak2ki4f5";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=8DwJCbTd3TI&list=PLHJOyeH38Rjllwx-Q3r3VPgdLtucoVis1";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=U7Urh7yYGNs&list=PLHJOyeH38RjnP-j5UANXIzPYuEhsYGxab";
            }
            //Yabancı
          } else if (this.sureNation == "foreign") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=W_Qs8nqHOwo&list=PLHJOyeH38Rjnu-2AuaxymDvro4-i51BRX";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=74823oMwd7s&list=PLHJOyeH38RjmTl1rCaD7N1m1bb74GIcSl";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=RtQXT4dU-Dg&list=PLHJOyeH38RjlYe0Cgz-ncsjwkLFYAq7-_";
            }
          }
        }
        //Rahman
        else if (this.sureSelect == 55) {
          //Türk
          if (this.sureNation == "turkish") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjlnG2ilAeuKSEFPwv9M9Irz";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjlFNtrKyKO1TSzG-Nff0azJ";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38Rjlv53rjOGJLhIxkq9zilgok";
            }
            //Yabancı
          } else if (this.sureNation == "foreign") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjmMH24tArUVqnBQwsjeWBrR";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjkHGNmxOtXPtgFYDrN4Dlrs";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjlZbV2Qf5AIB2isdDgSRPqf";
            }
          }
        }
        //Vakıa
        else if (this.sureSelect == 56) {
          //Türk
          if (this.sureNation == "turkish") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=k26pjjsQKa4&list=PLHJOyeH38RjnQ7UpmUFkJGtXLp7M1Ddw1";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=7ojFVXB1Zbs&list=PLHJOyeH38Rjmo3AtdqqvGaqlQUthmfpRP";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=VZwVH2N_axs&list=PLHJOyeH38Rjmb3Dpu_BV3bMw-ORDoKfe4";
            }
            //Yabancı
          } else if (this.sureNation == "foreign") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=AP8D85c-MV4&list=PLHJOyeH38RjnTbYD0VRjallS6inqLiWNL";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=TwT6k6j7qJI&list=PLHJOyeH38RjnOzvTIcB9C_7H91ygjfFEy";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=pwLj239kvH4&list=PLHJOyeH38Rjm7CL-OrnebyKGsL0cArqfs";
            }
          }
        }
        //Nebe
        else if (this.sureSelect == 78) {
          //Türk
          if (this.sureNation == "turkish") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjmR29tGUYRvgHviJ0rFfZYf";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38Rjk1NoIiv_asFfoU8spz05vC";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjmQ7hDOqvnnVt6-nea_eWC-";
            }
            //Yabancı
          } else if (this.sureNation == "foreign") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjlPvh67K3uHxq2ZlAT_lBNB";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjkD7hFL9C1npTyvFNtIvkPY";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjmjmQHfCdw0tv20dTDVbBt9";
            }
          }
        }
        //Fecr
        else if (this.sureSelect == 89) {
          //Türk
          if (this.sureNation == "turkish") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjkHvLnB-84iboDRm3IOny02";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38Rjmg288CoWyyoDzX6k1-up3S";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjkxotvRIA09ld_wuivUUEpL";
            }
            //Yabancı
          } else if (this.sureNation == "foreign") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjmLVnjbBkSvMJ3uYqIntbCW";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38Rjn-YzMZYj_aF36Drqf3ixZD";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?list=PLHJOyeH38RjmksOrJOwbu_Il313oLqzks";
            }
          }
        }
        //Nâs
        else if (this.sureSelect == 114) {
          //Türk
          if (this.sureNation == "turkish") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=KIWmaDuBf4g&list=PLHJOyeH38RjlN0NGNPZFupqFVinjxGL4r";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=rroZfxgeAc4&list=PLHJOyeH38Rjni7rIR7GqNZmX2iggKu8u_";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=_j9QDA2oEWw&list=PLHJOyeH38RjlPXmTbYYi-9nEIqEDqGBh4";
            }
            //Yabancı
          } else if (this.sureNation == "foreign") {
            if (this.sureKind == "calm") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=I-h2cliHKl0&list=PLHJOyeH38Rjl0c9sPZdWJiQNU_lC0wPxP";
            } else if (this.sureKind == "emotional") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=G8h_2bvkHa0&list=PLHJOyeH38Rjm1qDZhjElbDFQrHmqmY1p0";
            } else if (this.sureKind == "action") {
              this.resultUrl =
                "https://www.youtube.com/embed/videoseries?=list=FTGM_0W0NvQ&list=PLHJOyeH38RjnL5M-YVe6y5aVdRtCkF6qR";
            }
          }
        }

        break;

      //Tam Sure Seçilmemişse Yani Karışık Liste Gelecekse
      case false:
        if (this.sureNation == "turkish") {
          if (this.sureKind == "calm") {
            this.resultUrl =
              "https://www.youtube.com/embed/videoseries?=list=6osSduKpHrE&list=PLHJOyeH38Rjl7_JH5BOeRm9YF49BQC0pc";
          } else if (this.sureKind == "emotional") {
            this.resultUrl =
              "https://www.youtube.com/embed/videoseries?=list=6osSduKpHrE&list=PLHJOyeH38Rjn9Zu7jozVA60Cerq7tXLkF";
          } else if (this.sureKind == "action") {
            this.resultUrl =
              "https://www.youtube.com/embed/videoseries?=list=7lfmEqWZe5Q&list=PLHJOyeH38RjnmK9QR9o5VmE_vcmgyPUwh";
          }
        } else if (this.sureNation == "foreign") {
          if (this.sureKind == "calm") {
            this.resultUrl =
              "https://www.youtube.com/embed/videoseries?=list=H-bbhFwhiWY&list=PLHJOyeH38RjkLXwERuELfYrPlkkM_GA6Z";
          } else if (this.sureKind == "emotional") {
            this.resultUrl =
              "https://www.youtube.com/embed/videoseries?=list=gBNlm3wq_3k&list=PLHJOyeH38Rjn-8DL2IavsUgHPjzj3of5v";
          } else if (this.sureKind == "action") {
            this.resultUrl =
              "https://www.youtube.com/embed/videoseries?=list=XGvJe3jorOs&list=PLHJOyeH38RjlvSY4mVHf7ugPtPiCujmht";
          }
        }
        break;
      default:
        break;
    }
    return this.resultUrl;
  }
}

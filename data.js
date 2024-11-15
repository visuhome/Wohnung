var APP_DATA = {
  "scenes": [
    {
      "id": "0-flur",
      "name": "Flur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.7071363613159036,
        "pitch": 0.28713205926523955,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 0.03358200840645864,
          "pitch": 0.3052874870734872,
          "rotation": 0,
          "target": "2-wohnzimmer"
        },
        {
          "yaw": 1.357871306476186,
          "pitch": 0.3297871265364325,
          "rotation": 0,
          "target": "1-wc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.31707780964676857,
          "pitch": 0.22605650941548738,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9758464026884202,
          "pitch": 0.3358481771635695,
          "rotation": 0,
          "target": "0-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.010885629200100055,
        "pitch": 0.04832967160018242,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 1.7736192413962328,
          "pitch": 0.22492689602328753,
          "rotation": 0,
          "target": "0-flur"
        },
        {
          "yaw": -0.326364802927122,
          "pitch": 0.23741297549028317,
          "rotation": 0,
          "target": "3-wohnzimmer-balkon"
        },
        {
          "yaw": 0.28735350961694195,
          "pitch": 0.23445256893008093,
          "rotation": 0,
          "target": "4-kche"
        },
        {
          "yaw": -2.0420656119194316,
          "pitch": 0.2331571950933906,
          "rotation": 0,
          "target": "6-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wohnzimmer-balkon",
      "name": "Wohnzimmer-Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.139383122552152,
        "pitch": 0.24697909250404138,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 1.592621685353933,
          "pitch": 0.2231546717126811,
          "rotation": 0,
          "target": "2-wohnzimmer"
        },
        {
          "yaw": 0.22184903965162128,
          "pitch": 0.2635252590552959,
          "rotation": 0,
          "target": "4-kche"
        },
        {
          "yaw": 2.1832413401274815,
          "pitch": 0.18259210576790252,
          "rotation": 0,
          "target": "6-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kche",
      "name": "Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.4853502336037137,
        "pitch": 0.24677662269380107,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 2.0676441985442873,
          "pitch": 0.3185863009208756,
          "rotation": 0,
          "target": "3-wohnzimmer-balkon"
        },
        {
          "yaw": 0.7023449830460642,
          "pitch": 0.2790366223995946,
          "rotation": 0,
          "target": "5-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bad",
      "name": "Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.09252784820084514,
        "pitch": 0.20603702103237254,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 0.17060643274886722,
          "pitch": 0.3009356358406112,
          "rotation": 0,
          "target": "4-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.29756775944680136,
        "pitch": 0.3563540164333112,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 2.075706102488116,
          "pitch": 0.3132775915329198,
          "rotation": 0,
          "target": "2-wohnzimmer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

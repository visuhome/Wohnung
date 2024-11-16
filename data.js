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
        "yaw": 0.718535216242266,
        "pitch": 0.27006197054096326,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 0.0030333748636852675,
          "pitch": 0.29810060270418326,
          "rotation": 0,
          "target": "2-wohnzimmer"
        },
        {
          "yaw": 1.3334309842752692,
          "pitch": 0.3667028924810207,
          "rotation": 0,
          "target": "1-wc"
        }
      ],
      "infoHotspots": []
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
        "yaw": 2.3350814055572275,
        "pitch": 0.24657753912526026,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 2.6862207013088444,
          "pitch": 0.274691498814132,
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
        "yaw": 0.07077350197196353,
        "pitch": 0.14244534787424712,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 1.5296611689770652,
          "pitch": 0.2377436678637075,
          "rotation": 0,
          "target": "0-flur"
        },
        {
          "yaw": -0.414929360501727,
          "pitch": 0.2354549639371637,
          "rotation": 0,
          "target": "3-wohnzimmer-balkon"
        },
        {
          "yaw": 0.24112231161534403,
          "pitch": 0.20466219351654935,
          "rotation": 0,
          "target": "4-kche"
        },
        {
          "yaw": -1.8619804507012265,
          "pitch": 0.2895085315800543,
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
        "yaw": 0.6677448473730934,
        "pitch": 0.23392922966516316,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 1.6232430950877106,
          "pitch": 0.21086373893241372,
          "rotation": 0,
          "target": "2-wohnzimmer"
        },
        {
          "yaw": 0.2071451985772761,
          "pitch": 0.30015114813928534,
          "rotation": 0,
          "target": "4-kche"
        },
        {
          "yaw": 2.1873302296945516,
          "pitch": 0.17044902071113555,
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
        "yaw": 1.2592714949798598,
        "pitch": 0.24673569185357458,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 2.0627732062518858,
          "pitch": 0.2649517222587896,
          "rotation": 0,
          "target": "3-wohnzimmer-balkon"
        },
        {
          "yaw": 0.7329517913738588,
          "pitch": 0.30169814513011417,
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
        "yaw": -0.3193117898696407,
        "pitch": 0.21366189715872608,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 0.2734533474751455,
          "pitch": 0.2363268614937617,
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
        "yaw": 1.2947715914024869,
        "pitch": 0.2532788096721248,
        "fov": 1.3328814693946158
      },
      "linkHotspots": [
        {
          "yaw": 2.1043861524150094,
          "pitch": 0.3893634363863576,
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

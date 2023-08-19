var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world - overworld",
        "world_nether - nether",
        "world_the_end - end"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1692415774",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daylight",
            "zoomLevels": 9,
            "defaultZoom": 6,
            "maxZoom": 9,
            "path": "world",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 0,
            "imgextension": "webp",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                1181,
                64,
                1153
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                1181,
                64,
                1153
            ],
            "north_direction": 0,
            "render_in_progress": true,
            "forcerendertime": 1692415768
        },
        {
            "name": "Night",
            "zoomLevels": 9,
            "defaultZoom": 5,
            "maxZoom": 9,
            "path": "world-night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 0,
            "imgextension": "webp",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                1181,
                64,
                1153
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                1181,
                64,
                1153
            ],
            "north_direction": 0,
            "render_in_progress": true,
            "forcerendertime": 1692415768
        },
        {
            "name": "Nether",
            "zoomLevels": 7,
            "defaultZoom": 5,
            "maxZoom": 7,
            "path": "world_nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world_nether - nether",
            "last_rendertime": 0,
            "imgextension": "webp",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0,
            "render_in_progress": true,
            "forcerendertime": 1692415768
        },
        {
            "name": "End",
            "zoomLevels": 8,
            "defaultZoom": 5,
            "maxZoom": 8,
            "path": "world_the_end",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world_the_end - end",
            "last_rendertime": 0,
            "imgextension": "webp",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0,
            "render_in_progress": true,
            "forcerendertime": 1692415768
        }
    ]
};

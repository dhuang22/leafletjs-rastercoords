# Leaflet-JS with Tile Mapping script

### Leaflet JS Plugin
Reference:
http://leafletjs.com/reference-1.0.3.html
Examples:
http://leafletjs.com/examples/crs-simple/crs-simple.html
http://leafletjs.com/examples.html
Other Leaflet Plugins:
http://leafletjs.com/plugins.html#tileimage-display



### TileMapping Plugin and Script:
leaflet-rastercoords is the only updated one https://github.com/commenthol/leaflet-rastercoords
Requires gdal2tiles python script at https://github.com/commenthol/gdal2tiles-leaflet

### TileMapping Directions:

Install Python

Install Gdal from https://pypi.python.org/pypi/GDAL/

Run:
```
gdalinfo --version
```
(Note: if it doesn't work, Gdal is not installed)

Run:
```
python setup.py
```

Download gdal2tiles.py or multicore version https://github.com/commenthol/gdal2tiles-leaflet

Run:
```
python ./gdal2tiles.py -l -p raster -z 3-6 -w none ../img/map5000x2321.jpg ../img/tiles
python ./gdal2tiles-multiprocess.py -l -p raster -z 3-6 -w none ../img/map5000x2321.jpg ../img/tiles
```
(Notes:
Delete Old Tiles
"3-6" = Zoom Range
"map5000x2321.jpg" = Map File
"tiles" = Output Folder

while inotifywait -r -E MODIFY ..;do
lessc ../less/screen960.less > ../css/screen960.css;
done;

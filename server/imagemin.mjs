import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

await imagemin(['public/img/*.{jpg,png}'], {
  destination: 'public/images',
  plugins: [
    imageminJpegtran(),
    imageminPngquant({
      quality: [0.2, 0.2],
    }),
  ],
});

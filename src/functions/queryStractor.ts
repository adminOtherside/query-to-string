import fs from 'fs';
import path from 'path';
import { StringDecoder } from 'string_decoder';

var sd = StringDecoder;

export function queryExtractor(fileName: string): void {
  fs.readFile(path.join(__dirname, fileName), function (err, data) {
    if (err) {
      console.error('Could not open file: %s', err);
      return 'Could not open file';
    }
    var d = new sd('utf8');
    var b = Buffer.from(data);
    const novadata = d.write(b);

    const expression = /\r?\n|\r/g;
    const expression2 = /^/gm;
    const expression3 = /$/gm;
    const subst = ``;
    const subst2 = `"`;
    const subst3 = `"`;

    const result = novadata
      .replace(expression, subst)
      .replace(expression2, subst2)
      .replace(expression3, subst3);

    // console.log(result);
    // console.log(typeof result);

    fs.writeFile(path.join(__dirname, 'fileName.txt'), result, function (err) {
      if (err) return console.log(err);
      console.log('Query Formated');
    });

    // return result;
  });
}

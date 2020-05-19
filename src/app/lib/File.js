import FS, { readFileSync } from 'fs';
import fileConfig from '../../config/file';


export default JSON.parse(
    FS.readFileSync(fileConfig.path)
);

// export default FS.readFile(fileConfig.path, (err, data) => {
//     if (err) throw err;
//     console.log(JSON.parse(data))
//     return JSON.parse(data);
// });

// readFile(fileConfig.path);
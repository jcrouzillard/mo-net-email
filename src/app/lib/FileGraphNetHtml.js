import FS, { readFileSync } from 'fs';
import fileConfig from '../../config/file';


export default FS.readFileSync(fileConfig.pathGraphNetHTML);

// export default FS.readFile(fileConfig.path, (err, data) => {
//     if (err) throw err;
//     console.log(JSON.parse(data))
//     return JSON.parse(data);
// });

// readFile(fileConfig.path);
import fs from 'fs';
import path from 'path';

export default function({filepath}) {
  const source = fs.readFileSync(path.join(process.cwd(),filepath),'utf-8');
  return <pre className={"code"}>{source}</pre>
}

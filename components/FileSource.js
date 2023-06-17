import fs from 'fs';
import path from 'path';

export default function({filepath,title}) {
  try {
    const source = fs.readFileSync(path.join(process.cwd(), filepath), 'utf-8');
    return <>
      {title ? <span className={"file-source-title"}>{title}</span> : ''}
      <pre className={"code"}>{source}</pre>
    </>
  } catch(e) {
    return <pre className={"code"}>Error loading {path.join(process.cwd(), filepath}

{e}
    </pre>
  }
}

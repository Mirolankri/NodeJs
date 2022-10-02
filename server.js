const FileSystem = require("fs");
const path = require('path')
const { mkdir, readdir, writeFile, rmdir, unlink } = require("fs/promises");
const user = [{name: 'Ben', last: 'Krakov'},{name: 'Miro', last: 'Lankri'},{name: 'Yinon', last: 'Peretz'}];
const ThisDir = `${__dirname}/users`
const removeFilesAndFolder = async ()=>
{
    readdir(`${ThisDir}`).then(filenames => {
        for (let filename of filenames) if(path.extname(filename) == ".txt")unlink(`${ThisDir}/${filename}`)

        readdir(`${ThisDir}`).then(Files=>{
            if(!Files.length) rmdir(`${ThisDir}`)
            else console.log(`Folder Not Empty Please See The File \n >> ${Files}`);
        })
    }).catch(err=>{
        console.log(err.message);
    })
}

const makeAndRemoveFileAndFolder = async ()=>
{
try {
   await readdir(`${ThisDir}`)
        removeFilesAndFolder()
    } catch (error) {
        await mkdir(`${ThisDir}`)
            user.forEach(user=>{
                writeFile(`${ThisDir}/${user.name}-${user.last}.txt`,`Name: ${user.name} Last:${user.last}`)
            })
        setTimeout(() => {
            removeFilesAndFolder()
        }, 5000);
    }
}

makeAndRemoveFileAndFolder()
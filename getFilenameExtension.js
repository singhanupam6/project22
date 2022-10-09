function getFileExtension(filename){
    
    const extension = filename.split('.').pop();
    return extension;
}
const result=getFileExtension('module.java');
    console.log(result);
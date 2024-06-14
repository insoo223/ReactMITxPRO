import capWord from './capWord.js';

const mongoImg = 'https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png';
const catImg = 'http://cataas.com/cat';
const patImg = './LogoYMD.png';

const pathRoot = '/';
const pathCreate = '/create';
const pathPipeCreate = '/pipe/create';
const labelEdit = 'edit'
const labelDelete = 'delete'
const labelPipe = 'pipe'
const capEdit = capWord(labelEdit);
const capDelete = capWord(labelDelete);
const capPipe = capWord(labelPipe);
const pathEditOnly = '/edit';
const pathEditWithID = '/edit/:id';
const pathPipeOnly = '/pipe';
const pathPipeWithID = '/pipe/:id';
const glbStr = {
    routeRoot: pathRoot,
    
    hostIP: 'pat-production.up.railway.app' , // '192.168.123.122'
    hostPort: '', //'9470', //'5050'
    db: 'pat',
    cltnPat: 'tier1', //collection for PAT
    // router: 'record',
    router: 'pat',
    routerPipe: 'pipe',
    recListHead: 'Insoo Kim ( insoo@hotmail.com )', // 'PAT(Portable Agri-gene Toolbox) List',
    patFdLeft: 'title', //pat collection field 1
    patFdMid: 'seq', //pat collection field 2
    patFdRite: 'comp', //pat collection field 3
    patFdRes: 'result', //pat collection field 4
    recListBody_Action: 'Action',
    frmTitle_CreateUpdate: 'Create/Update PAT Record',
    frmTitle_PipeCreateUpdate: 'Create/Update PAT Pipe',
    frmSubTitle_PatInfo: 'PAT Info',
    frmSubTitle_PipeInfo: 'Pipe Info',
    bttonTitle_SavePatInfo: 'Save PAT Record',
    bttonTitle_SavePipeInfo: 'Save Pipe Config',
    pageTitle_NavBarTop: 'You think, Machines Do!', 
    bttonTitle_NavBarTop: 'Create PAT Row', 
    imgTitle_NavBarTop: 'YMD logo', // 'MongoDB logo', // 'cat img', 
    imgSrc_NavBarTop: catImg,  // mongoImg, //  patImg,
    bttonTitle_DispRecEdit: capEdit, 
    bttonTitle_DispRecPipe: capPipe, 
    bttonTitle_DispRecDelete: capDelete,
    bttonTitle_NavPipeTop: 'Create Pipe', 
    imgTitle_NavPipeTop: 'Pipelining logo',
    imgSrc_NavPipeTop: mongoImg,
    className_nav: 'flex justify-between items-center mb-6',
    className_NavLinkRoot: 'h-10 inline',
    className_NavLinkCreate: 'inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3',
    
    
    toName_NavLinkRoot: pathRoot,
    routeCreate: pathCreate,
    routePipeCreate: pathPipeCreate,
    toName_NavLinkCreate: pathCreate,
    toName_NavLinkPipeCreate: pathPipeCreate,
    routeEditOnly: pathEditOnly,
    routeEditWithID: pathEditWithID,
    routePipeOnly: pathPipeOnly,
    routePipeWithID: pathPipeWithID,
    pipeSeq: 'SrcSeq',
    pipeCom: 'Computation',
    pipeRes: 'Result',

} //strPat

export default glbStr;

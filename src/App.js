import React from 'react';
import './App.css';
import Nbar from './Nbar.js';
import Route1 from './Route';
import { BrowserRouter as Router } from 'react-router-dom';


var loop1 = null,
    linenumber = 1,
    linecount = 0

class App extends React.Component {
  constructor(){
    super()
    this.onChange = this.onChange.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onClickdelete = this.onClickdelete.bind(this)
    this.checkInputs = this.checkInputs.bind(this)
    this.showPreview = this.showPreview.bind(this)
    this.onBlurPos = this.onBlurPos.bind(this)
    this.checkPreview = this.checkPreview.bind(this)
    this.state = {
      toollength: "",
      toollengthV: "",
      toolheight: "",
      toolheightV: "",
      toolwidth: "",
      toolwidthV: "",
      chamberlength: "",
      chamberheight: "",
      chamberwidth: "",
      substratelength: "",
      substratelengthV: "",
      substrateheight: "",
      substrateheightV:"",
      substratewidth: "",
      substratewidthV:"",
      //refers to the working distance in Setu Up Values and Manufacturing Parameters.
      nozzledistance: "",
      nozzledistanceV:"",
      substrateposx: "",
      substrateposxV:"",
      substrateposxG: "",
      substrateposy: "",
      substrateposyV: "",
      substrateposyG: "",
      rpposx:"",
      rpposxV:"",
      rpposy: "",
      rpposyV:"",
      power: "",
      powerV:"",
      jetdiameter: "",
      jetdiameterV:"",
      gasflow: "",
      gasflowV:"",
      wirefeed: "",
      wirefeedV:"",
      printheadspeed: "",
      printheadspeedV:"",
      wiredelay: "",
      wiredelayV:"",
      plasmadelay: "",
      plasmadelayV:"",
      xyzdelay: "",
      xyzdelayV:"",
      submitbutton: true,
      showpreview: false,
      previewbutton: true,
      expertmode: false,
      mparmsend: true,
      gcode:"",
      gcodex:"",
      gcodey:"",
      gcodez:"",
      gcodespeed:"",
      textarea: true,
      possend: true,
      selectedFile: null,
      imageURL: "",
      setupvalues1check: false,
      setupvalues1checkserver: false,
      setupvalues2check: false,
      mparmvaluescheck: false,
      delayvaluescheck: false,
      startstoppausecheck: true,
      stepsize: 5,
      setspeed: 10,
      fileInfo: null,
      printheadpos: "Nozzle Position: X: 0 Y: 0 Z: 0",
      fieldx: "",
      fieldy: "",
      fieldz: "",
      invcommand: "",
      upperborderx: "",
      upperbordery:"",
      upperborderz:"",
      translated: false,
      gcodebuttons: true,
      verifiedyes: false,
      verifiedno: false,
      dangerbutton: false,
      dangershow: true,
      dropdowntitle: "Choose Profile",
      uploadfilenameApp:"Click to choose file.",
      uploadbutton: false,
      passwordshow: false,
      password: "",
      passwordnotcorrect: false,
      passwordbordercolor: "",
      showgraphicalrepresentation: false,
      columnsizetext:"5",
      columnsizeinput:"7",
      columnsizeform:"5",
      columnsizeimage:"5",
      consolelog: "",
      startreading: false,
      startbutton: true,
      progress: 0,
      progressloop: true,
      wirefeeddropdowntext: "Wirefeed Set Value",
      wirefeedplaceholder: "mm/s",
      wirefeedoption:"c",
      linecontent: "",
      linecontentcheck:"",
      linecontentcheck2:"",
      wirecheck1:"",
      wirecheck2:"",
      setup2activate: true,
      verified: false



    
      
    }
    

  }
  render(){
    return (
      <Router>

        <div className="App">
          <Nbar
            passwordClose = {this.passwordClose}
            setColumnsize = {this.setColumnsize}
            onChange = {this.onChange}
            passwordCheck = {this.passwordCheck}
            passwordOnClick = {this.passwordOnClick}
            password = {this.state.password}
            passwordbordercolor = {this.state.passwordbordercolor}
            expertmodeClick = {this.expertmodeClick}
            printheadpos = {this.state.printheadpos}
            dangerbutton = {this.state.dangerbutton}
            passwordshow = {this.state.passwordshow}
            expertmode = {this.state.expertmode}
            passwordnotcorrect = {this.state.passwordnotcorrect}
            />
          
        <div>
          <Route1 
          //FUNCTIONS
            onClickdelete = {this.onClickdelete}
            onClickdeletePos = {this.onClickdeletePos} 
            onBlur={this.onBlur} 
            onChange={this.onChange}
            onChangeGcode = {this.onChangeGcode}
            onChangeGcodeFile = {this.onChangeGcodeFile}
            onBlurGcode = {this.onBlurGcode}
            onBlurPos = {this.onBlurPos} 
            onBlurMparm = {this.onBlurMparm}
            onBlurDelay = {this.onBlurDelay}
            showPreview = {this.showPreview}
            checkInputs = {this.checkInputs}
            checkValue = {this.checkValue} 
            createGcode = {this.createGcode}
            deleteGcode = {this.deleteGcode}
            editGcode = {this.editGcode}
            dropdownClick = {this.dropdownClick}
            dropdownClickfalse = {this.dropdownClickfalse}
            setTextVariable={this.setTextVariable} 
            sendSetupValues = {this.sendSetupValues}
            sendSetupValues2 = {this.sendSetupValues2}
            sendMparmValues = {this.sendMparmValues}
            sendTimeDelay = {this.sendTimeDelay}
            uploadInput = {this.uploadInput}
            movenozzleXplus = {this.movenozzleXplus}
            movenozzleXminus = {this.movenozzleXminus}
            movenozzleYplus = {this.movenozzleYplus}
            movenozzleYminus = {this.movenozzleYminus}
            movenozzleZplus = {this.movenozzleZplus}
            movenozzleZminus = {this.movenozzleZminus}
            setStepSize = {this.setStepSize}
            returnHome = {this.returnHome}
            setSpeed = {this.setSpeed}
            repairPos = {this.repairPos}
            manualCoords = {this.manualCoords}
            sendInvcommand = {this.sendInvcommand}
            startTranslate = {this.startTranslate}
            openGcode = {this.openGcode}
            verifyGcode = {this.verifyGcode}
            setPosmanualsubstrate = {this.setPosmanualsubstrate}
            setPosmanualrppos = {this.setPosmanualrppos}
            fileSelectionNameOnChange = {this.fileSelectionNameOnChange}
            fileUpload = {this.fileUpload}
            startPrinting = {this.startPrinting}
            readifyPrint = {this.readifyPrint}
            stopPrint = {this.stopPrint}
            dropdownWirefeed = {this.dropdownWirefeed}
            resetAll = {this.resetAll}
            activateTCP = {this.activateTCP}
            closeTCP = {this.closeTCP}
            

            //STATES
            toollength = {this.state.toollength} 
            toollengthV = {this.state.toollengthV} 
            toolheight = {this.state.toolheight} 
            toolheightV = {this.state.toolheightV}
            toolwidth = {this.state.toolwidth} 
            toolwidthV = {this.state.toolwidthV} 
            chamberlength = {this.state.chamberlength} 
            chamberheight = {this.state.chamberheight}
            chamberheightV = {this.state.chamberheightV} 
            chamberwidth = {this.state.chamberwidth}
            substratelength = {this.state.substratelength} 
            substratelengthV = {this.state.substratelengthV} 
            substrateheight = {this.state.substrateheight} 
            substrateheightV = {this.state.substrateheightV}
            substratewidth = {this.state.substratewidth} 
            substratewidthV = {this.state.substratewidthV}
            nozzledistance = {this.state.nozzledistance} 
            nozzledistanceV = {this.state.nozzledistanceV}
            substrateposx = {this.state.substrateposx} 
            substrateposxV = {this.state.substrateposxV}
            substrateposxG = {this.state.substrateposxG}
            substrateposy = {this.state.substrateposy} 
            substrateposyV = {this.state.substrateposyV}
            substrateposyG = {this.state.substrateposyG} 
            rpposx = {this.state.rpposx} 
            rpposxV = {this.state.rpposxV}
            rpposy = {this.state.rpposy} 
            rpposyV = {this.state.rpposyV}
            power = {this.state.power} 
            powerV = {this.state.powerV}
            jetdiameter = {this.state.jetdiameter} 
            jetdiameterV = {this.state.jetdiameterV}
            gasflow = {this.state.gasflow} 
            gasflowV = {this.state.gasflowV}
            wirefeed = {this.state.wirefeed} 
            wirefeedV = {this.state.wirefeedV}
            printheadspeed = {this.state.printheadspeed} 
            printheadspeedV = {this.state.printheadspeedV}
            wiredelay = {this.state.wiredelay} 
            wiredelayV = {this.state.wiredelayV}
            plasmadelay = {this.state.plasmadelay} 
            plasmadelayV = {this.state.plasmadelayV}
            xyzdelay = {this.state.xyzdelay} 
            xyzdelayV = {this.state.xyzdelayV}
            submitbutton = {this.state.submitbutton}
            showpreview = {this.state.showpreview}
            previewbutton = {this.state.previewbutton}
            expertmode = {this.state.expertmode}
            mparmsend = {this.state.mparmsend}
            gcode = {this.state.gcode}
            gcodex = {this.state.gcodex}
            gcodey = {this.state.gcodey}
            gcodez = {this.state.gcodez}
            gcodespeed = {this.state.gcodespeed}
            textarea = {this.state.textarea}
            possend = {this.state.possend}
            filename = {this.state.filename}
            setupvalues1check = {this.state.setupvalues1check}
            setupvalues2check = {this.state.setupvalues2check}
            mparmvaluescheck = {this.state.mparmvaluescheck}
            delayvaluescheck = {this.state.delayvaluescheck}
            startstoppausecheck = {this.state.startstoppausecheck}
            stepsize = {this.state.stepsize}
            setspeed = {this.state.setspeed}
            printheadpos = {this.state.printheadpos}
            fieldx = {this.state.fieldx}
            fieldy = {this.state.fieldy}
            fieldz = {this.state.fieldz}
            invcommand = {this.state.invcommand}
            upperborderx = {this.state.upperborderx}
            upperbordery = {this.state.upperborderx}
            upperborderz = {this.state.upperborderz}
            translated = {this.state.translated}
            gcodebuttons = {this.state.gcodebuttons}
            verifiedyes = {this.state.verifiedyes}
            verifiedno = {this.state.verifiedno}
            dangershow = {this.state.dangershow}
            dropdowntitle = {this.state.dropdowntitle}
            dangerbutton = {this.state.dangerbutton}
            uploadfilenameApp = {this.state.uploadfilenameApp}
            uploadbutton = {this.state.uploadbutton}
            showgraphicalrepresentation = {this.state.showgraphicalrepresentation}
            columnsizetext = {this.state.columnsizetext}
            columnsizeinput = {this.state.columnsizeinput}
            columnsizeform = {this.state.columnsizeform}
            columnsizeimage = {this.state.columnsizeimage}
            consolelog = {this.state.consolelog}
            startbutton = {this.state.startbutton}
            progress = {this.state.progress}
            wirefeeddropdowntext = {this.state.wirefeeddropdowntext}
            wirefeedplaceholder = {this.state.wirefeedplaceholder}
            linecontent = {this.state.linecontent}
            setup2activate = {this.state.setup2activate}

            
            /> 
        </div>
        </div>
      </Router>
      
        );
    }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//  


// State management of input fields
  
  //Managing of columnsizes for different Screen Setups (4:3, 16:9)
  setColumnsize = (a,b,c,d) => {
    this.setState({
      columnsizetext: a,
      columnsizeinput: b,
      columnsizeform: c,
      columnsizeimage: d
    })

  }
  
  //OnBlur function for checking inputs of the upper setup values. If the entered numbers are not within the defined area, the input field will be colored red.
  onBlur(e, low, high, name, nameV){
    const b = e.currentTarget.value

    
    if (b > high){
      this.setState({[nameV]: "rgba(255,0,0, 0.1)"}, function() {this.checkInputs(e)})
      this.setState({[name]: "Value must be lower!"}, function() {this.checkInputs(e)})
      
    }
    
    if (b < low){
      this.setState({[nameV]: "rgba(255,0,0, 0.1)"}, function() {this.checkInputs(e)})
      this.setState({[name]: "Value must be higher!"}, function() {this.checkInputs(e)})
    }
    if (low <= b && b <= high){
      this.setState({[nameV]:""}, function () {this.checkInputs(e)})
    }
    this.setState({
      setupvalues1check: false,
 
    }, function() {this.startbuildCheck()})
  }
//onBlur function for the inputcheck of substrateplate position and referencepoint position 
  onBlurPos(e, low, high, name, nameV){
    const b = e.currentTarget.value

    
    if (b > high){
      this.setState({[nameV]: "rgba(255,0,0, 0.1)"}, function() {this.checkPreview(e)})
      this.setState({[name]: "Value must be lower!"}, function() {this.checkPreview(e)})
      this.setState({showpreview: false})
      
    }
    
    if (b < low){
      this.setState({[nameV]: "rgba(255,0,0, 0.1)"}, function() {this.checkPreview(e)})
      this.setState({[name]: "Value must be higher!"}, function() {this.checkPreview(e)})
      this.setState({showpreview: false})
    }
    if (low <= b && b <= high){
      this.setState({[nameV]:""}, function () {this.checkPreview(e)})
    }
    this.setState({
      setupvalues2check: false,
    }, function() {this.startbuildCheck()})
  }

  onBlurMparm = (e, low, high, name, nameV) => {
    const b = e.currentTarget.value
    
    if (b > high){
      this.setState({[nameV]: "rgba(255,0,0, 0.1)"}, function() {this.checkMparm(e)})
      this.setState({[name]: "Value must be lower!"}, function() {this.checkMparm(e)})
      this.setState({showpreview: false})
      
    }
    
    if (b < low){
      this.setState({[nameV]: "rgba(255,0,0, 0.1)"}, function() {this.checkMparm(e)})
      this.setState({[name]: "Value must be higher!"}, function() {this.checkMparm(e)})
      this.setState({showpreview: false})
    }
    if (low <= b && b <= high){
      this.setState({[nameV]:""}, function () {this.checkMparm(e)})
    }
    this.setState({
      mparmvaluescheck: false
    }, function() {this.startbuildCheck()})
  }
  
  onBlurDelay = () => {
    this.setState({
      delayvaluescheck: false,
    }, function() {this.startbuildCheck()})
  }

  onClickdelete(e, a){
    this.setState({[a]: ""})
    console.log("deleted it")
  }

  onClickdeletePos = (e,a) => {
    this.setState({
      [a]: "",
      showpreview: false,
    })

  }
  onChange(e,f){
    this.setState({[f]: e.target.value})

    
  }
  checkState = () => {
    const { substratewidth } = this.state;
    console.log(substratewidth)
  }

  //Checks if every input field is correctly filed from Tool length to Nozzle Distance
  checkInputs(e) {
    if (this.state.toollengthV === "" && this.state.toolheightV === "" && this.state.toolwidthV === "" && this.state.substrateheightV ==="" && this.state.substratelengthV ==="" && this.state.substratewidthV ==="" && this.state.nozzledistanceV === "") {
        this.setState({submitbutton: false})
    }  
    
    if (this.state.toollength === "" || this.state.toolheight === "" || this.state.toolwidth === "" || this.state.substrateheight === "" || this.state.substratelength === "" || this.state.substratewidth === "" || this.state.nozzledistance === "") {
      this.setState({submitbutton: true})
    }

    if (this.state.toollengthV !== "" || this.state.toolheightV !== "" || this.state.toolwidthV !== "" || this.state.substrateheightV !== "" || this.state.substratelengthV !== "" || this.state.substratewidthV !== "" || this.state.nozzledistanceV !== "" ) {
        this.setState({submitbutton: true})
      }
  }

  onClick = (e) => { 
    alert("it works")
    
  }
  //Checks if values can be previewed in a 2D graphic
  checkPreview(e){
    
    if (this.state.substrateposxV==="" && this.state.substrateposyV==="" && this.state.rpposxV==="" && this.state.rpposyV===""){
      this.setState({previewbutton: false})
    }
    if (this.state.substrateposx === "" || this.state.substrateposy === "" || this.state.rpposy === "" || this.state.rpposx === ""){
      this.setState({previewbutton: true})
    }
    if (this.state.substrateposxV !=="" || this.state.substrateposyV !=="" || this.state.rpposyV !== "" || this.state.rpposxV !== ""){
      this.setState({previewbutton: true})
    }
    
    
  }

  checkMparm = (e) => {
    if (this.state.powerV==="" && this.state.jetdiameterV==="" && this.state.gasflowV==="" && this.state.wirefeedV==="" && this.state.printheadspeedV==="" && this.state.nozzledistanceV===""){
      this.setState({mparmsend: false})
    }

    if (this.state.power==="" || this.state.jetdiameter==="" || this.state.gasflow==="" || this.state.wirefeed==="" || this.state.printheadspeed==="" || this.state.nozzledistance===""){
      this.setState({mparmsend: true})
    }

    if (this.state.powerV !=="" || this.state.jetdiameterV !=="" || this.state.gasflowV !=="" || this.state.wirefeedV !=="" || this.state.printheadspeedV !=="" || this.state.nozzledistanceV !==""){
      this.setState({mparmsend: true})
    }
  }

  createGcode = (e) => {
    this.setState({gcode: this.state.gcode.concat(`${linenumber}. X${this.state.gcodex}, Y${this.state.gcodey}, Z${this.state.gcodez}, F${this.state.gcodespeed}\n`)})
    linenumber += 1 
  }

  deleteGcode = () => {
    this.setState({gcode:""})
    linenumber = 1
  }

  editGcode = () => {
    this.setState({textarea: false})
    
  }

  onChangeGcode = (e) => {
    
    this.setState({gcode : e.currentTarget.value})

  }


  onBlurGcode = (e) => {
    if (this.state.textarea === false)
      this.setState({textarea: true})
  }
  showPreview(e) {
 
   this.setState({
     showpreview: true,
     showgraphicalrepresentation: true
    })
   
  }

  dropdownClick = (e) => {

    this.setState({
      toollength: "150",
      toolwidth: "0",
      toolheight: "100",
      substratelength: "210",
      substratewidth: "210",
      substrateheight: "33",
      substrateposx: "20",
      substrateposy: "200",
      rpposx: "20",
      rpposy: "200",
      nozzledistance: "20",
      submitbutton: false,
      power: "68",
      printheadspeed: "53",
      jetdiameter: "83",
      gasflow: "69",
      wirefeed: "98",
      mparmsend: false,
      dropdowntitle: "Standard"



    })
  }




  expertmodeClick = (e) => {

    if (this.state.expertmode===false){
      this.setState({passwordshow: true})
    }
    if (this.state.expertmode===true){
      this.setState({
        expertmode: false
      })
    }
  }

  passwordClose = () => {
    this.setState({
      passwordshow: false,
      expertmode: false,
      password: "",
      passwordbordercolor: "",
      passwordnotcorrect:""
    })
  }
  
  passwordCheck = () => {
    if (this.state.password === "ipk"){
      this.setState({
        expertmode: true,
        passwordshow: false,
        passwordnotcorrect: false,
        passwordbordercolor: "",
        password: ""
      })
    }
    else{
      this.setState({
        passwordnotcorrect: true,
        passwordbordercolor: "red"
      })
    }
  }

  passwordOnClick = () => {
    this.setState({
      passwordbordercolor:"",
      passwordnotcorrect: false,
      password: "",
    })
  }

  startbuildCheck = () => {
    if (this.state.setupvalues1check === true && this.state.setupvalues2check === true && this.state.mparmvaluescheck === true && this.state.delayvaluescheck === true && this.state.verified === true){
      this.setState({
        startstoppausecheck: false
      })
    }

    if (this.state.setupvalues1check === false || this.state.setupvalues2check === false || this.state.mparmvaluescheck === false || this.state.delayvaluescheck === false){
      this.setState({
        startstoppausecheck: true
      })
    }
  }



  setStepSize = (option) => {
    if (option === "a"){
      this.setState({
        stepsize: 1
      })
    }

    if (option === "b"){
      this.setState({
        stepsize: 5
      })
    }

    if (option === "c"){
      this.setState({
        stepsize: 10
      })
    }

    if (option === "d"){
      this.setState({
        stepsize: 50
      })
    }

    if (option === "e"){
      this.setState({
        stepsize: 100
      })
    }
  }

  setSpeed = (option) => {
    if (option === "a"){
      this.setState({
        setspeed: 10
      }, function() {this.sendSpeed()})
    }
    if (option === "b"){
      this.setState({
        setspeed:20
      }, function() {this.sendSpeed()})
    }
    if (option === "c"){
      this.setState({
        setspeed:50
      }, function() {this.sendSpeed()}) 
    }
  }

  dropdownWirefeed = (option) => {
    if (option === "a"){
      this.setState({
        wirefeeddropdowntext:"Wirefeed Scaling Factor",
        wirefeedplaceholder:"No Unit",
        wirefeedoption:"a"
      })
    }
    if (option === "b"){
      this.setState({
        wirefeeddropdowntext:"Wirefeed Overwrite Value",
        wirefeedplaceholder: "mm/s",
        wirefeedoption:"b"
      })
    }

    if (option === "c"){
      this.setState({
        wirefeeddrop: "Wirefeed Set Value",
        wirefeedplaceholder: "mm/s",
        wirefeedoption:"c"
      })
    }
  }

  

  
  
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Communication with Backend//
  sendSetupValues = (e) => {

    
    const toolvalues = {
      "toollength":this.state.toollength, 
      "toolheight":this.state.toolheight,
      "toolwidth":this.state.toolwidth,
      "substratelength": this.state.substratelength,
      "substratewidth": this.state.substratewidth,
      "substrateheight": this.state.substrateheight,
      "nozzledistance": this.state.nozzledistance,
    };

    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const init = {
      method: 'post',
      headers: headers,
      mode: 'cors',
      body: JSON.stringify(toolvalues)
    };
  
  fetch('http://localhost:5000/setupvalues', init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((status) => {
      console.log(status)
      if (status === "toohigh"){
        alert("Chosen Nozzledistance is too small for the given tool settings. The axis will go down as far as possible, but won't reach the desired distance.")
        this.setState({
          dangerbutton: true
        })
      }
      if (status === "DANGER"){
        alert("DANGER! With these values the printhead would collide with objects in the machine chamber. Please choose different values.")
        this.setState({
          dangershow: false,
          dangerbutton: true,
          chamberheightV:"rgba(255,0,0, 0.1)"
        })
      }
      if (status === "nocon"){
        alert("Values were transmitted to the server, but the machine is not connected.")
        this.setState({
          chamberheightV: "",
          dangershow: true,
          dangerbutton: false,
          setup2activate: false,
          previewbutton: false,
        })
      }
      if (status === "done"){
        this.setState({
          dangerbutton: false,
          dangershow: true,
          setupvalues1check: true,
          chamberheightV:"",
          setup2activate: false,
          previewbutton: false
        }, function() {this.startbuildCheck()})
      }

    })

     .catch(function(error){
      console.log(error)
      alert("Parameters could not be transmitted. Please check if the server is running.")
     })
};



  sendSetupValues2 = () => {
    const positionvalues = {
      "substrateposx": this.state.substrateposx,
      "substrateposy": this.state.substrateposy,
      "rpposx": this.state.rpposx,
      "rpposy": this.state.rpposy,
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(positionvalues)
    }
    
    fetch('http://localhost:5000/setupvalues2', init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((msg) => {
      if (msg === "nocon"){
        alert("Values were transmitted to the server, but the machine is not connected.")
      }
      if (msg === "x_substrate_error") {
        alert("Part of the Substrateplate is not accessible for the Printhead on the X-Axis. Please Change Location or Size before you continue.")
      }
      if (msg === "y_substrate_error") {
        alert("Part of the Substrateplate is not accessible for the Printhead on the Y-Axis. Please Change Location or Size before you continue.")
      }
      if (msg === "z_substrate_error") {
        alert("Part of the Substrateplate is not accessible for the Printhead on the Z-Axis. Please Change Location or Size before you continue.")
      }
      
      if (msg === "done"){
        this.setState({
          setupvalues2check: true,
        }, function() {this.startbuildCheck()})
      }
    })
    .catch(function(error){
      console.log(error)
      alert("Parameters could not be transmitted. Please check if the server is running.")
    })
  }
  
  sendMparmValues = () => {
    const mparmvalues = {
      "power": this.state.power,
      "jetdiameter": this.state.jetdiameter,
      "gasflow": this.state.gasflow,
      "wirefeed": this.state.wirefeed,
      "printheadspeed": this.state.printheadspeed,
      "nozzledistance": this.state.nozzledistance,
      "wirefeedoption": this.state.wirefeedoption,
    }

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(mparmvalues)   
    }

    fetch('http://localhost:5000/mparmvalues', init)
    .then((response) => {
      console.log(response)
      if (response.ok){
        this.setState({
          mparmvaluescheck: true
        }, function() {this.startbuildCheck()})
      }
      return response.json()
    })
    .then((dudel) => {
      console.log(dudel)
    })
    .catch(function(error){
      console.log(error)
      alert("Parameters could not be transmitted. Please check if the server is running.")
    }
    )
  }

  sendTimeDelay = () => {
    const delayvalues = {
      "wiredelay": this.state.wiredelay,
      "plasmadelay": this.state.plasmadelay,
      "xyzdelay": this.state.xyzdelay
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(delayvalues)   
    }

    fetch('http://localhost:5000/delayvalues', init)
    .then((response) => {
      console.log(response)
      if (response.ok === true){
        this.setState({
          delayvaluescheck: true

        }, function() {this.startbuildCheck()})
      }
    })
    .catch(function(error){
      console.log(error)
      alert("Parameters could not be transmitted. Please check if the server is running.")
    })
    
  }

  movenozzleXplus = () => {

    const stepsize = {
      "stepsize": this.state.stepsize,
    }

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(stepsize)
        
    }

    fetch("http://localhost:5000/x+", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((flaskvalue) => {
      console.log(flaskvalue)
      if (flaskvalue === "nocon"){
        console.log(flaskvalue)
        alert("Command could not be transmitted. Please connect the machine via Serial Port.")
      }
      if (flaskvalue !== "nocon"){
      console.log(flaskvalue)
      this.setState({
        printheadpos: flaskvalue
      })}
    })
      
  }

  movenozzleXminus = () => {

    const stepsize = {
      "stepsize": this.state.stepsize,
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(stepsize)
        
    }

    fetch("http://localhost:5000/x- ", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((flaskvalue) => {
      console.log(flaskvalue)
      if (flaskvalue === "nocon"){
        console.log(flaskvalue)
        alert("Command could not be transmitted. Please connect the machine via Serial Port.")
      }
      if (flaskvalue !== "nocon"){
      console.log(flaskvalue)
      this.setState({
        printheadpos: flaskvalue
      })}
    })
  }

  movenozzleYplus = () => {

    const stepsize = {
      "stepsize": this.state.stepsize,
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(stepsize)
        
    }

    fetch("http://localhost:5000/y+", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((flaskvalue) => {
      console.log(flaskvalue)
      if (flaskvalue === "nocon"){
        console.log(flaskvalue)
        alert("Command could not be transmitted. Please connect the machine via Serial Port.")
      }
      if (flaskvalue !== "nocon"){
      console.log(flaskvalue)
      this.setState({
        printheadpos: flaskvalue
      })}
    })
  }
    
    
  

  movenozzleYminus = () => {

    const stepsize = {
      "stepsize": this.state.stepsize,
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(stepsize)
        
    }

    fetch("http://localhost:5000/y-", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((flaskvalue) => {
      console.log(flaskvalue)
      if (flaskvalue === "nocon"){
        console.log(flaskvalue)
        alert("Command could not be transmitted. Please connect the machine via Serial Port.")
      }
      if (flaskvalue !== "nocon"){
      console.log(flaskvalue)
      this.setState({
        printheadpos: flaskvalue
      })}
    })
  }

  movenozzleZplus = () => {

    const stepsize = {
      "stepsize": this.state.stepsize,
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(stepsize)
        
    }

    fetch("http://localhost:5000/z+", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((flaskvalue) => {
      console.log(flaskvalue)
      if (flaskvalue === "nocon"){
        console.log(flaskvalue)
        alert("Command could not be transmitted. Please connect the machine via Serial Port.")
      }
      if (flaskvalue !== "nocon"){
      console.log(flaskvalue)
      this.setState({
        printheadpos: flaskvalue
      })}
    })
  }

  movenozzleZminus = () => {

    const stepsize = {
      "stepsize": this.state.stepsize,
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(stepsize)
        
    }

    fetch("http://localhost:5000/z-", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((flaskvalue) => {
      console.log(flaskvalue)
      if (flaskvalue === "nocon"){
        console.log(flaskvalue)
        alert("Command could not be transmitted. Please connect the machine via Serial Port.")
      }
      if (flaskvalue !== "nocon"){
      console.log(flaskvalue)
      this.setState({
        printheadpos: flaskvalue
      })}
    })
  }
  repairPos = () => {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors"
        
    }

    fetch("http://localhost:5000/repairPos", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((flaskvalue) => {
      console.log(flaskvalue)
      if (flaskvalue === "nocon"){
        console.log(flaskvalue)
        alert("Command could not be transmitted. Please connect the machine via Serial Port.")
      }
      if (flaskvalue !== "nocon"){
      console.log(flaskvalue)
      this.setState({
        printheadpos: flaskvalue
      })}
    })
  }

  returnHome = () => {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors"
        
    }

    fetch("http://localhost:5000/returnHome", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((flaskvalue) => {
      console.log(flaskvalue)
      if (flaskvalue === "nocon"){
        console.log(flaskvalue)
        alert("Command could not be transmitted. Please connect the machine via Serial Port.")
      }
      if (flaskvalue !== "nocon"){
      console.log(flaskvalue)
      this.setState({
        printheadpos: flaskvalue
      })}
    })
  }

  sendSpeed = () => {
    const speed = {
      "speed": this.state.setspeed
    }

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(speed)   
    }

    fetch("http://localhost:5000/setSpeed", init) 
    
  }

  manualCoords = () => {
    const coords = {
      "x": this.state.fieldx,
      "y": this.state.fieldy,
      "z": this.state.fieldz
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(coords)   
    }

    fetch("http://localhost:5000/manualCoords", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((flaskvalue) => {
      console.log(flaskvalue)
      if (flaskvalue === "nocon"){
        console.log(flaskvalue)
        alert("Command could not be transmitted. Please connect the machine via Serial Port.")
      }
      if (flaskvalue !== "nocon"){
      console.log(flaskvalue)
      this.setState({
        printheadpos: flaskvalue
      })}
    })

  }
  sendInvcommand = () => {
    const msg = {
      "msg": this.state.invcommand
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(msg)   
    }
    fetch("http://localhost:5000/sendInvcommand", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((flaskvalue) => {
      console.log(flaskvalue)
      if (flaskvalue === "nocon"){
        console.log(flaskvalue)
        alert("Command could not be transmitted. Please connect the machine via Serial Port.")
      }
      else {
        console.log(flaskvalue)
        this.setState({
          printheadpos: flaskvalue
        })
      }
    })
  }

  startTranslate = () => {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
    const init = {
      method: "post",
      headers: headers,
      mode: "cors",   
    }

    fetch("http://localhost:5000/startTranslate", init)
    .then((response) => {
      console.log(response)
      return response.json()

    })
    .then((status) => {
      console.log(status)
      console.log(typeof(status))
      if (status === "done"){
        this.setState({
          translated: true,
          gcodebuttons: false,
          verifiedno: false,
          verified: true
        }, function() {this.startbuildCheck()})
      }
      if (status === "error"){
        alert("G-Code could not be translated")
      }
      if (status === "type_error"){
        alert("Please enter Set Up Values before translating the G-Code / Make sure, that coordinates are type float.")
      }
      if (status !== "done" && status !=="error" && status!=="type_error"){
        this.setState({
          verifiedno: true,
          translated: false
        })
        alert(`${status}`)
        
      }

    })
    .catch(function(error){
      console.log(error)
      alert("Connection to the server could not be established.")
    })
  }

  openGcode = () => {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application"
    }
    const init = {
      method: "post",
      headers: headers,
      mode: "cors",
    }

    fetch("http://localhost:5000/openGcode", init)
  }

  verifyGcode = () => {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application"
    }

    const init = {
      method: "post",
      headers: headers,
      mode: "cors"
    }

    fetch("http://localhost:5000/verifyGcode", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((status) => {
      if (status === "done"){
        this.setState({
          verifiedyes: true,
          verifiedno: false,
        })}
      if (status === "error"){
        this.setState({
          verifiedno: true,
          verifiedyes: false,
        })
      }

    })
  }
  setPosmanualsubstrate = () => {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application"
    }
    const init = {
      method: "post",
      headers: headers,
      mode: "cors"
    }
    fetch("http://localhost:5000/setPosmanual", init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((status) => {
      this.setState({
          substrateposx: status.xpos,
          substrateposy: status.ypos
      })
    })
  }

  setPosmanualrppos = () => {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application"
    }
    const init = {
      method: "post",
      headers: headers,
      mode: "cors"
    }

    fetch("http://localhost:5000/setPosmanual", init)
    .then((response) => {
      return response.json()
    })
    .then((status) => {
      this.setState({
        rpposx: status.xpos,
        rpposy: status.ypos
      })
    })
  }
  
/*The name of the chosen file to upload is saved in a state and send to the backend*/
  fileSelectionNameOnChange = (e, a) => {
    console.log(a)

    this.setState({
        uploadfilenameApp: a,
        uploadbutton: false,
        translated: false,
        verifiedno: false

    })
    console.log(this.state.uploadfilenameApp)
    const name = {
        "filename": a
    }

    const headers = {
        'Accept': 'application/json',
          'Content-Type': 'application/json'
      };

    const init = {
        method: 'post',
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(name)
        };

    fetch('http://localhost:5000/getFilename', init)
    .then((response)=> {
        console.log(response)
        if (!response.ok){
            alert("Something went wrong, please try to choose the file again.")
        }
        if (response){
            console.log("Filename has been transmitted to backend.")
        }
        return response.json()
    }).then((filename) => {
        if (filename === "File Name"){
            alert("Something went wrong, please try to choose the file again.")
        }

    })

  }

  fileUpload = (e, a) => {

    
    e.preventDefault();
    const data = new FormData();
    data.append('file', a);
    //data.append('filename', this.fileName.value);
    fetch('http://localhost:5000/fileupload', {
      method: "POST",
      body: data,
    })
    .then((response) => {
        console.log(response)
        if (response.ok === false){
            alert("Please choose a file before trying to upload.")
        }
        if (response.ok === true){
            this.setState({
                uploadbutton: true  
            }, function() {this.startbuildCheck()})
        
        }
    }).catch(function(error){
        console.log(error)
        alert("Please start the Server before trying to upload.")

    })
  }

  startPrinting = () => {
    loop1 = setInterval(this.printProgress, 2000)
    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const init = {
      method: 'post',
      headers: headers,
      mode: 'cors',
      };

    
    fetch('http://localhost:5000/startPrinting', init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((msg) => {
      if (msg === "done"){
        console.log("thread was started")
      }
    })
  }

  printProgress = () => {
    
    
    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const init = {
      method: 'post',
      headers: headers,
      mode: 'cors',
      };

      fetch('http://localhost:5000/printProgress', init)
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((msg) => {
        if (msg.percent >= 100){
          this.setState({
            progress: 100
          })
          clearInterval(loop1)
          console.log("loop cleared")
        }
        this.setState({
          progress:msg.percent,
          linecontentcheck: msg.linecontent,
          wirecheck1: msg.wirefeed
        })
        console.log(this.state.linecontentcheck)
        console.log(this.state.linecontentcheck2)
        if (this.state.linecontentcheck !== this.state.linecontentcheck2){
          linecount += 1
          var d = new Date();
          this.setState({
            
            linecontentcheck2: msg.linecontent,
            linecontent: this.state.linecontent.concat(`${linecount}. ${msg.linecontent}, ${d.getHours()}h:${d.getMinutes()}min:${d.getSeconds()}s\n`)
        })
        }
        if (this.state.wirecheck1 !== this.state.wirecheck2){
          this.setState({
            wirecheck2: msg.wirefeed,
            linecontent: this.state.linecontent.concat(`Wirefeed Speed: ${msg.wirefeed} mm/s\n`)
          })
        }
        console.log(this.state.progressloop)
        console.log(this.state.linecontent)
      })
  }
  
    

  stopPrint = () => {
    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const init = {
      method: 'post',
      headers: headers,
      mode: 'cors',
      };
    fetch('http://localhost:5000/stopPrint', init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((msg) => {
      if (msg === "done"){
        alert("Print Process was stopped.")
      }
    })
  }


  readifyPrint = () => {
    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const init = {
      method: 'post',
      headers: headers,
      mode: 'cors',
      };
    fetch('http://localhost:5000/readifyPrint', init)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((msg) => {
      if (msg === "done"){
        this.setState({
          startbutton: false
        })
      }
    })
  }

  resetAll = () => {
    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const init = {
      method: 'post',
      headers: headers,
      mode: 'cors',
      };
    fetch('http://localhost:5000/resetAll',init)
    .then((response) => {
      if (response.ok){
        alert("Please refresh the page and return to Set Up Menu.")
        this.setState({
          setup2activate: true
        })
      }
      else {
        alert("Settings could not be reseted. Please restart the machine.")
      }

    })
  }

}
export default App;
  
  


  


      
        
    
    
        
        
        
          
        




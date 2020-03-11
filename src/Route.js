import React from 'react';
import Setup from './Setup.js';
import Mparm from './ManufacturingParameters'
import Build from './Build'
import Start from './Start.js'
import { BrowserRouter as Route, Switch, Redirect } from 'react-router-dom';


export default class Route1 extends React.Component {

    render() {
        return (


        <Switch>
            <Redirect exact from="/" to="/start"/>
            <Route path="/start">
            <Start/>
            
            </Route>   
            <Route path="/setup">
                <Setup 
                //FUNCTIONS
                    onClickdelete = {this.props.onClickdelete} 
                    onBlur={this.props.onBlur} 
                    onChangeChamber={this.props.onChangeChamber} 
                    onChange={this.props.onChange} 
                    setText={this.props.setText}
                    dropdownClick = {this.props.dropdownClick}
                    dropdownClickfalse = {this.props.dropdownClickfalse}
                    showPreview={this.props.showPreview}
                    showpreview={this.props.showpreview}
                    checkInputs = {this.props.checkInputs}
                    setChamberValue={this.props.setChamberValue} 
                    sendSetupValues = {this.props.sendSetupValues}
                    sendSetupValues2 = {this.props.sendSetupValues2}
                    movenozzleXplus = {this.props.movenozzleXplus}
                    movenozzleXminus = {this.props.movenozzleXminus}
                    movenozzleYplus = {this.props.movenozzleYplus}
                    movenozzleYminus = {this.props.movenozzleYminus}
                    movenozzleZplus = {this.props.movenozzleZplus}
                    movenozzleZminus = {this.props.movenozzleZminus}
                    setStepSize = {this.props.setStepSize}
                    setPosmanualsubstrate = {this.props.setPosmanualsubstrate}
                    setPosmanualrppos = {this.props.setPosmanualrppos}
                    onClickdeletePos = {this.props.onClickdeletePos}
                    columnsizetext = {this.props.columnsizetext}
                    columnsizeinput = {this.props.columnsizeinput}
                    columnsizeform = {this.props.columnsizeform}
                    columnsizeimage = {this.props.columnsizeimage}
                    
                //STATES
                    //states with V at the end are for formvalidation and change of background color of field
                    toollength = {this.props.toollength}
                    toollengthV = {this.props.toollengthV} 
                    toolheight = {this.props.toolheight}
                    toolheightV = {this.props.toolheightV} 
                    toolwidth = {this.props.toolwidth}
                    toolwidthV = {this.props.toolwidthV}
                    chamberlength = {this.props.chamberlength} 
                    chamberheight = {this.props.chamberheight}
                    chamberheightV = {this.props.chamberheightV} 
                    chamberwidth = {this.props.chamberwidth}
                    substratelength = {this.props.substratelength}
                    substratelengthV = {this.props.substratelengthV} 
                    substrateheight = {this.props.substrateheight}
                    substrateheightV = {this.props.substrateheightV} 
                    substratewidth = {this.props.substratewidth}
                    substratewidthV = {this.props.substratewidthV}
                    nozzledistance = {this.props.nozzledistance}
                    nozzledistanceV = {this.props.nozzledistanceV} 
                    substrateposx = {this.props.substrateposx}
                    substrateposxV = {this.props.substrateposxV} 
                    substrateposy = {this.props.substrateposy}
                    substrateposyV = {this.props.substrateposyV}
                    rpposx = {this.props.rpposx} 
                    rpposxV = {this.props.rpposxV}
                    rpposy = {this.props.rpposy}
                    rpposyV = {this.props.rpposyV}
                    submitbutton = {this.props.submitbutton}
                    previewbutton = {this.props.previewbutton}
                    onBlurPos = {this.props.onBlurPos}
                    checkPreview = {this.props.checkPreview}
                    setupvalues1check = {this.props.setupvalues1check}
                    setupvalues2check = {this.props.setupvalues2check}
                    dangershow = {this.props.dangershow}
                    dropdowntitle = {this.props.dropdowntitle}
                    dangerbutton = {this.props.dangerbutton}
                    printheadpos = {this.props.printheadpos}
                    stepsize = {this.props.stepsize}
                    showgraphicalrepresentation = {this.props.showgraphicalrepresentation}
                    setup2activate = {this.props.setup2activate}
                    />
                    
            </Route>
            <Route path="/mp">
                <Mparm 
                //FUNCTIONS
                    onClickdelete = {this.props.onClickdelete}
                    onChange = {this.props.onChange}
                    onBlurMparm = {this.props.onBlurMparm} 
                    createGcode = {this.props.createGcode}
                    deleteGcode = {this.props.deleteGcode}
                    editGcode = {this.props.editGcode}
                    onChangeGcode = {this.props.onChangeGcode}
                    onBlurGcode = {this.props.onBlurGcode}
                    sendMparmValues = {this.props.sendMparmValues}
                    movenozzleXplus = {this.props.movenozzleXplus}
                    movenozzleXminus = {this.props.movenozzleXminus}
                    movenozzleYplus = {this.props.movenozzleYplus}
                    movenozzleYminus = {this.props.movenozzleYminus}
                    movenozzleZplus = {this.props.movenozzleZplus}
                    movenozzleZminus = {this.props.movenozzleZminus}
                    fileInput = {this.props.fileInput}
                    setStepSize = {this.props.setStepSize}
                    returnHome = {this.props.returnHome}
                    setSpeed = {this.props.setSpeed}
                    repairPos = {this.props.repairPos}
                    manualCoords = {this.props.manualCoords}
                    sendInvcommand = {this.props.sendInvcommand}
                    startTranslate = {this.props.startTranslate}
                    openGcode = {this.props.openGcode}
                    verifyGcode = {this.props.verifyGcode}
                    fileSelectionNameOnChange = {this.props.fileSelectionNameOnChange}
                    uploadfilenameApp = {this.props.uploadfilenameApp}
                    fileUpload = {this.props.fileUpload}
                    uploadbutton = {this.props.uploadbutton}
                    dropdownWirefeed = {this.props.dropdownWirefeed}


                //STATES
                    //states with V at the end are for formvalidation and change of background color of field
                    power = {this.props.power}
                    powerV = {this.props.powerV} 
                    jetdiameter = {this.props.jetdiameter}
                    jetdiameterV = {this.props.jetdiameterV} 
                    gasflow = {this.props.gasflow} 
                    gasflowV = {this.props.gasflowV}
                    wirefeed = {this.props.wirefeed}
                    wirefeedV = {this.props.wirefeedV} 
                    printheadspeed = {this.props.printheadspeed}
                    printheadspeedV = {this.props.printheadspeedV}
                    nozzledistance = {this.props.nozzledistance}
                    nozzledistanceV = {this.props.nozzledistanceV}
                    expertmode = {this.props.expertmode}
                    mparmsend = {this.props.mparmsend}
                    gcode = {this.props.gcode}
                    gcodex = {this.props.gcodex}
                    gcodey = {this.props.gcodey}
                    gcodez = {this.props.gcodez}
                    gcodespeed = {this.props.gcodespeed}
                    textarea = {this.props.textarea}
                    filename = {this.props.filename}
                    mparmvaluescheck = {this.props.mparmvaluescheck}
                    stepsize = {this.props.stepsize}
                    printheadpos = {this.props.printheadpos}
                    setspeed = {this.props.setspeed}
                    fieldx = {this.props.fieldx}
                    fieldy = {this.props.fieldy}
                    fieldz = {this.props.fieldz}
                    invcommand = {this.props.invcommand}
                    translated = {this.props.translated}
                    gcodebuttons = {this.props.gcodebuttons}
                    verifiedyes = {this.props.verifiedyes}
                    verifiedno = {this.props.verifiedno}
                    wirefeeddropdowntext = {this.props.wirefeeddropdowntext}
                    wirefeedplaceholder = {this.props.wirefeedplaceholder}

                   

                    />
            </Route>
            <Route path="/build">
                <Build 
                //FUNCTIONS
                    onChange = {this.props.onChange}
                    onClickdelete = {this.props.onClickdelete}
                    onBlurDelay = {this.props.onBlurDelay}
                    sendTimeDelay = {this.props.sendTimeDelay}
                    startPrinting = {this.props.startPrinting}
                    stopReading = {this.props.stopReading}
                    readifyPrint = {this.props.readifyPrint}
                    stopPrint = {this.props.stopPrint}
                    resetAll = {this.props.resetAll}
                //STATES
                    //states with V at the end are for formvalidation and change of background color of field
                    toollength = {this.props.toollength}
                    toolheight = {this.props.toolheight} 
                    toolwidth = {this.props.toolwidth}
                    chamberlength = {this.props.chamberlength} 
                    chamberheight = {this.props.chamberheight} 
                    chamberwidth = {this.props.chamberwidth}
                    substratelength = {this.props.substratelength} 
                    substrateheight = {this.props.substrateheight} 
                    substratewidth = {this.props.substratewidth}
                    nozzledistance = {this.props.nozzledistance} 
                    substrateposx = {this.props.substrateposx} 
                    substrateposy = {this.props.substrateposy}
                    rpposx = {this.props.rpposx} 
                    rpposy = {this.props.rpposy}
                    power = {this.props.power} 
                    jetdiameter = {this.props.jetdiameter} 
                    gasflow = {this.props.gasflow} 
                    wirefeed = {this.props.wirefeed} 
                    printheadspeed = {this.props.printheadspeed} 
                    wiredelay = {this.props.wiredelay} 
                    plasmadelay = {this.props.plasmadelay} 
                    xyzdelay = {this.props.xyzdelay}
                    delayvaluescheck = {this.props.delayvaluescheck}
                    startstoppausecheck = {this.props.startstoppausecheck}
                    consolelog = {this.props.consolelog}
                    startbutton = {this.props.startbutton}
                    progress = {this.props.progress}
                    linecontent = {this.props.linecontent}
                    /> 
            </Route>
        </Switch>
        )
    }
}   
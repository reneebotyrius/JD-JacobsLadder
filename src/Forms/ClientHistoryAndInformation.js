import React, { Component } from 'react';
import Header from '../Header/Header';
import './formFormatting.css';
import {
    Col,
    Button,
    FormGroup,
    FormFeedback,
    Input,
    Label,
    Row
} from "reactstrap";
import ReactTable from "react-table";


class ClientHistoryAndInformation extends Component{
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            fields: [],
            submitButtonPressed: false,
            saveButtonPressed:false,
            siblingColumns:[{
                Header: 'Name',
                accessor: 'name'
            }, {
                Header: 'Age',
                accessor: 'age'
            }, {
                Header: 'Gender',
                accessor: 'gender'
            }],
            siblingData:[{
                name: <input type="text" name="sib1Name"/>,
                age: <input type="text" name="sib1Age"/>,
                gender: <input type="text" name="sib1Gender"/>,
            }, {
                name: <input type="text" name="sib2Name"/>,
                age: <input type="text" name="sib2Age"/>,
                gender: <input type="text" name="sib2Gender"/>,
            }, {
                name: <input type="text" name="sib3Name"/>,
                age: <input type="text" name="sib3Age"/>,
                gender: <input type="text" name="sib3Gender"/>,
            }, {
                name: <input type="text" name="sib4Name" />,
                age: <input type="text" name="sib4Age" />,
                gender: <input type="text" name="sib4Gender" />,
            }],

            devHistoryColumns:[{
                Header: 'Activity',
                accessor: 'activity'
            }, {
                Header: 'Years',
                accessor: 'years'
            }, {
                Header: 'Months',
                accessor: 'months'
            }, {
                Header: 'Not Yet Developed',
                accessor: 'na'
            }],
            devHistoryData:[{
                activity: 'Crawled on stomach',
                years: <Input type="select"
                              name="crawlYears"
                              id="crawlYears">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19+</option>
                        </Input>,
                months: <Input type="select"
                               name="crawlMonths"
                               id="crawlMonths">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Input>,
                na: <Input type="select"
                           name="crawlNa"
                           id="crawlNa">
                        <option>true</option>
                        <option>false</option>
                    </Input>
            }, {
                activity: 'Crept on hands and knees',
                years: <Input type="select"
                              name="creptYears"
                              id="creptYears">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19+</option>
                        </Input>,
                months: <Input type="select"
                               name="creptMmonths"
                               id="creptMonths">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Input>,
                na: <Input type="select"
                           name="creptNa"
                           id="creptNa">
                        <option>true</option>
                        <option>false</option>
                    </Input>
            }, {
                activity: 'Walked',
                years: <Input type="select"
                              name="walkYears"
                              id="walkYears">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19+</option>
                        </Input>,
                months: <Input type="select"
                               name="walkMonths"
                               id="walkMonths">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Input>,
                na: <Input type="select"
                           name="walkNa"
                           id="walkNa">
                        <option>true</option>
                        <option>false</option>
                    </Input>
            }, {
                activity: 'Toilet trained',
                years: <Input type="select"
                              name="toiletYears"
                              id="toiletYears">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19+</option>
                        </Input>,
                months: <Input type="select"
                               name="toiletMonths"
                               id="toiletMonths">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Input>,
                na: <Input type="select"
                           name="toiletNa"
                           id="toiletNa">
                        <option>true</option>
                        <option>false</option>
                    </Input>
            }, {
                activity: 'First word',
                years: <Input type="select"
                              name="wordYears"
                              id="wordYears">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19+</option>
                        </Input>,
                months: <Input type="select"
                               name="wordMonths"
                               id="wordMonths">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </Input>,
                na: <Input type="select"
                           name="wordNa"
                           id="wordNa">
                        <option>true</option>
                        <option>false</option>
                    </Input>
            }, {
                activity: 'Use of couplets (2 words together)',
                years: <Input type="select"
                              name="coupletYears"
                              id="coupletYears">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19+</option>
                        </Input>,
                months: <Input type="select"
                               name="coupletMonths"
                               id="coupletMonths">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </Input>,
                na: <Input type="select"
                           name="coupletNa"
                           id="coupletNa">
                        <option>true</option>
                        <option>false</option>
                    </Input>
            }, {
                activity: '3-4 word phrases',
                years: <Input type="select"
                              name="phraseYears"
                              id="phraseYears">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19+</option>
                        </Input>,
                months: <Input type="select"
                               name="phraseMonths"
                               id="phraseMonths">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Input>,
                na: <Input type="select"
                           name="phraseNa"
                           id="phraseNa">
                        <option>true</option>
                        <option>false</option>
                    </Input>
            }, {
                activity: 'Sentences',
                years: <Input type="select"
                              name="sentenceYears"
                              id="sentenceYears">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19+</option>
                        </Input>,
                months: <Input type="select"
                               name="sentenceMonths"
                               id="sentenceMonths">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </Input>,
                na: <Input type="select"
                           name="sentenceNa"
                           id="sentenceNa">
                        <option>true</option>
                        <option>false</option>
                    </Input>
            }, {
                activity: 'Conversational language',
                years: <Input type="select"
                              name="conversationYears"
                              id="conversationYears">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19+</option>
                        </Input>,
                months: <Input type="select"
                               name="conversationMonths"
                               id="conversationMonths">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </Input>,
                na: <Input type="select"
                           name="conversationNa"
                           id="conversationNa">
                        <option>true</option>
                        <option>false</option>
                    </Input>
            }, {
                activity: 'Reading',
                years:<Input type="select"
                            name="readYears"
                            id="readYears">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19+</option>
                    </Input>,
                months: <Input type="select"
                               name="readMonths"
                               id="readMonths">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </Input>,
                na: <Input type="select"
                           name="readNa"
                           id="readNa">
                        <option>true</option>
                        <option>false</option>
                    </Input>
            }],
            otherDoctorsColumns:[{
                Header: 'Name',
                accessor: 'name'
            }, {
                Header: 'Specialty',
                accessor: 'specialty'
            }, {
                Header: 'Phone Number',
                accessor: 'phone'
            }, {
                Header: 'Schedule of Service',
                accessor: 'sched'
            }],
            otherDoctorsData:[{
                name: <input type="text" name="doc1Name"/>,
                specialty: <input type="text" name="doc1Specialty"/>,
                phone: <input type="text" name="doc1Phone"/>,
                sched: <input type="text" name="doc1Sched"/>
            }, {
                name: <input type="text" name="doc2Name"/>,
                specialty: <input type="text" name="doc2Specialty"/>,
                phone: <input type="text" name="doc2Phone"/>,
                sched: <input type="text" name="doc2Sched"/>
            }, {
                name: <input type="text" name="doc3Name"/>,
                specialty: <input type="text" name="doc3Specialty"/>,
                phone: <input type="text" name="doc3Phone"/>,
                sched: <input type="text" name="doc3Sched"/>
            }, {
                name: <input type="text" name="doc4Name" />,
                specialty: <input type="text" name="doc4Specialty" />,
                phone: <input type="text" name="doc4Phone" />,
                sched: <input type="text" name="doc4Sched" />
            }],
            epilepsy: false
        };

        this.goBack = this.goBack.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    goBack(event) {
        window.location.reload();
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate();
        this.setState({fields: fields});
    }

    handleCheckBoxChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (this.state.submitButtonPressed) {
            //SECTION ONE
            if (!fields["dob"]) {
                formIsValid = false;
                errors["dob"] = "Cannot be empty";
            }
            if (!fields["age"]) {
                formIsValid = false;
                errors["age"] = "Cannot be empty";
            }
            if (!fields["diagnosis"]) {
                formIsValid = false;
                errors["diagnosis"] = "Cannot be empty";
            }
            if (!fields["height"]) {
                formIsValid = false;
                errors["height"] = "Cannot be empty";
            }
            if (!fields["weight"]) {
                formIsValid = false;
                errors["weight"] = "Cannot be empty";
            }
            if (!fields["street"]) {
                formIsValid = false;
                errors["street"] = "Cannot be empty";
            }
            if (!fields["city"]) {
                formIsValid = false;
                errors["city"] = "Cannot be empty";
            }
            if (!fields["state"]) {
                formIsValid = false;
                errors["state"] = "Cannot be empty";
            }
            if (!fields["zip"]) {
                formIsValid = false;
                errors["zip"] = "Cannot be empty";
            }
            if (!fields["country"]) {
                formIsValid = false;
                errors["country"] = "Cannot be empty";
            }

            if (!fields["homeNumber"]) {
                formIsValid = false;
                errors["homeNumber"] = "Cannot be empty";
            }
            //SECTION TWO
            if (!fields["motherName"]) {
                formIsValid = false;
                errors["motherName"] = "Cannot be empty";
            }
            if (!fields["motherAge"]) {
                formIsValid = false;
                errors["motherAge"] = "Cannot be empty";
            }
            if (!fields["motherCell"]) {
                formIsValid = false;
                errors["motherCell"] = "Cannot be empty";
            }
            if (!fields["motherEmail"]) {
                formIsValid = false;
                errors["motherEmail"] = "Cannot be empty";
            }
            if (!fields["motherOccupation"]) {
                formIsValid = false;
                errors["motherOccupation"] = "Cannot be empty";
            }
            if (!fields["fatherName"]) {
                formIsValid = false;
                errors["fatherName"] = "Cannot be empty";
            }
            if (!fields["fatherAge"]) {
                formIsValid = false;
                errors["fatherAge"] = "Cannot be empty";
            }
            if (!fields["fatherCell"]) {
                formIsValid = false;
                errors["fatherCell"] = "Cannot be empty";
            }
            if (!fields["fatherEmail"]) {
                formIsValid = false;
                errors["fatherEmail"] = "Cannot be empty";
            }
            if (!fields["fatherOccupation"]) {
                formIsValid = false;
                errors["fatherOccupation"] = "Cannot be empty";
            }
            //SECTION 3
            if (!fields["birthWeek"]) {
                formIsValid = false;
                errors["birthWeek"] = "Cannot be empty";
            }
            if (!fields["birthWeight"]) {
                formIsValid = false;
                errors["birthWeight"] = "Cannot be empty";
            }

            //SECTION FOUR

            //SECTION 14
            if (!fields["studentName"]) {
                formIsValid = false;
                errors["studentName"] = "Cannot be empty";
            }
            if (!fields["parentName"]) {
                formIsValid = false;
                errors["parentName"] = "Cannot be empty";
            }
            if (!fields["date"]) {
                formIsValid = false;
                errors["date"] = "Cannot be empty";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitButtonPressed:true},() => {
            if (this.validate()) {
                //NEED TO UPDATE DATABASE
                this.props.history.push("/parenthome")
            }
        });
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        this.setState({saveButtonPressed: true});
        //UPDATE DATABASE
        this.props.history.push("/parenthome")
    }

    renderSection1() {
        return(
            <fieldset>
                <div className={"section"}>Section 1: Client Information</div>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Date of Birth</Label>
                            <Input
                                type="text"
                                ref="dob"
                                value={this.state.fields["dob"] || ""}
                                onChange={this.handleChange.bind(this, "dob")}
                                className="error"
                                invalid={this.state.errors["dob"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["dob"] }>{this.state.errors["dob"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Current Age</Label>
                            <Input
                                type="text"
                                ref="age"
                                value={this.state.fields["age"] || ""}
                                onChange={this.handleChange.bind(this, "age")}
                                className="error"
                                invalid={this.state.errors["age"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["age"] }>{this.state.errors["age"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Referring Diagnosis</Label>
                            <Input
                                type="text"
                                ref="diagnosis"
                                value={this.state.fields["diagnosis"] || ""}
                                onChange={this.handleChange.bind(this, "diagnosis")}
                                className="error"
                                invalid={this.state.errors["diagnosis"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["diagnosis"] }>{this.state.errors["diagnosis"]}
                            </FormFeedback>
                            <Label className={"additional-note"}>
                                *If you wish to use private insurance funds, please discuss diagnosis (and resulting diagnosis code(s)) with our insurance biller.
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Current Height</Label>
                            <Input
                                type="text"
                                ref="height"
                                value={this.state.fields["height"] || ""}
                                onChange={this.handleChange.bind(this, "height")}
                                className="error"
                                invalid={this.state.errors["height"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["height"] }>{this.state.errors["height"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Current Weight</Label>
                            <Input
                                type="text"
                                ref="weight"
                                value={this.state.fields["weight"] || ""}
                                onChange={this.handleChange.bind(this, "weight")}
                                className="error"
                                invalid={this.state.errors["weight"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["weight"] }>{this.state.errors["weight"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Street Name</Label>
                            <Input
                                type="text"
                                ref="street"
                                value={this.state.fields["street"] || ""}
                                onChange={this.handleChange.bind(this, "street")}
                                className="error"
                                invalid={this.state.errors["street"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["street"] }>{this.state.errors["street"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">City</Label>
                            <Input
                                type="text"
                                ref="city"
                                value={this.state.fields["city"] || ""}
                                onChange={this.handleChange.bind(this, "city")}
                                className="error"
                                invalid={this.state.errors["city"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["city"] }>{this.state.errors["city"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label className="control-label required">State</Label>
                            <Input
                                type="text"
                                ref="state"
                                value={this.state.fields["state"] || ""}
                                onChange={this.handleChange.bind(this, "state")}
                                className="error"
                                invalid={this.state.errors["state"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["state"] }>{this.state.errors["state"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Zip Code</Label>
                            <Input
                                type="text"
                                ref="zip"
                                value={this.state.fields["zip"] || ""}
                                onChange={this.handleChange.bind(this, "zip")}
                                className="error"
                                invalid={this.state.errors["zip"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["zip"] }>{this.state.errors["zip"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Country</Label>
                            <Input
                                type="text"
                                ref="country"
                                value={this.state.fields["country"] || ""}
                                onChange={this.handleChange.bind(this, "country")}
                                className="error"
                                invalid={this.state.errors["country"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["country"] }>{this.state.errors["country"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Home Phone Number</Label>
                            <Input
                                type="text"
                                ref="homeNumber"
                                value={this.state.fields["homeNumber"] || ""}
                                onChange={this.handleChange.bind(this, "homeNumber")}
                                className="error"
                                invalid={this.state.errors["homeNumber"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["homeNumber"] }>{this.state.errors["homeNumber"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>


            </fieldset>


        );
    }

    renderSection2() {
        return(
            <fieldset>
                <div className={"section"}>Section 2: Family Information</div>
                <div className={"sub-section"}>Mother's Information</div>
                    <Row>
                        <Col sm={9}>
                            <FormGroup>
                                <Label className="control-label required">Mother's Name</Label>
                                <Input
                                    type="text"
                                    ref="motherName"
                                    value={this.state.fields["motherName"] || ""}
                                    onChange={this.handleChange.bind(this, "motherName")}
                                    className="error"
                                    invalid={this.state.errors["motherName"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["motherName"] }>{this.state.errors["motherName"]}
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col sm={3}>
                            <FormGroup>
                                <Label className="control-label required">Mother's Age</Label>
                                <Input
                                    type="text"
                                    ref="motherAge"
                                    value={this.state.fields["motherAge"] || ""}
                                    onChange={this.handleChange.bind(this, "motherAge")}
                                    className="error"
                                    invalid={this.state.errors["motherAge"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["motherAge"] }>{this.state.errors["motherAge"]}
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Mother's Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="motherCell"
                                value={this.state.fields["motherCell"] || ""}
                                onChange={this.handleChange.bind(this, "motherCell")}
                                className="error"
                                invalid={this.state.errors["motherCell"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherCell"] }>{this.state.errors["motherCell"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label className="control-label required">Mother's Email</Label>
                            <Input
                                type="text"
                                ref="motherEmail"
                                value={this.state.fields["motherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "motherEmail")}
                                className="error"
                                invalid={this.state.errors["motherEmail"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherEmail"] }>{this.state.errors["motherEmail"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <FormGroup>
                            <Label className="control-label required">Mother's Occupation</Label>
                            <Input
                                type="text"
                                ref="motherOccupation"
                                value={this.state.fields["motherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "motherOccupation")}
                                className="error"
                                invalid={this.state.errors["motherOccupation"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherOccupation"] }>{this.state.errors["motherOccupation"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>

                <div className={"sub-section"}>Father's Information</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label className="control-label required">Father's Name</Label>
                            <Input
                                type="text"
                                ref="fatherName"
                                value={this.state.fields["fatherName"] || ""}
                                onChange={this.handleChange.bind(this, "fatherName")}
                                className="error"
                                invalid={this.state.errors["fatherName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherName"] }>{this.state.errors["fatherName"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Father's Age</Label>
                            <Input
                                type="text"
                                ref="fatherAge"
                                value={this.state.fields["fatherAge"] || ""}
                                onChange={this.handleChange.bind(this, "fatherAge")}
                                className="error"
                                invalid={this.state.errors["fatherAge"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherAge"] }>{this.state.errors["fatherAge"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Father's Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="fatherCell"
                                value={this.state.fields["fatherCell"] || ""}
                                onChange={this.handleChange.bind(this, "fatherCell")}
                                className="error"
                                invalid={this.state.errors["fatherCell"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherCell"] }>{this.state.errors["fatherCell"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label className="control-label required">Father's Email</Label>
                            <Input
                                type="text"
                                ref="fatherEmail"
                                value={this.state.fields["fatherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "fatherEmail")}
                                className="error"
                                invalid={this.state.errors["fatherEmail"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherEmail"] }>{this.state.errors["fatherEmail"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <FormGroup>
                            <Label className="control-label required">Father's Occupation</Label>
                            <Input
                                type="text"
                                ref="fatherOccupation"
                                value={this.state.fields["fatherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "fatherOccupation")}
                                className="error"
                                invalid={this.state.errors["fatherOccupation"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherOccupation"] }>{this.state.errors["fatherOccupation"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup >
                            <Label className="control-label required pr-2">Marital Status</Label>
                            <Input type="select"
                                   name="maritalStatus"
                                   id="maritalStatus">
                                <option>Single</option>
                                <option>Married</option>
                                <option>Divorced</option>
                                <option>Separated</option>
                                <option>Widowed</option>
                            </Input>
                            {/*<FormFeedback*/}
                                {/*invalid={this.state.errors["maritalStatus"] }>{this.state.errors["maritalStatus"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className={"pt-3"}>If Divorced or Separated, who is the legal guardian?</Label>
                            <Input type="text"
                                   ref="legalGuardian"
                                   value={this.state.fields["legalGuardian"] || ""}
                                   onChange={this.handleChange.bind(this, "legalGuardian")}/>
                        </FormGroup>
                    </Col>
                </Row>

                <div className={"sub-section"}>Step Mother's Information (if applicable)</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label >Step Mother's Name</Label>
                            <Input
                                type="text"
                                ref="sMotherName"
                                value={this.state.fields["sMotherName"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherName")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label >Step Mother's Age</Label>
                            <Input
                                type="text"
                                ref="sMotherAge"
                                value={this.state.fields["sMotherAge"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherAge")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label>Step Mother's Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="sMotherCell"
                                value={this.state.fields["sMotherCell"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherCell")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label>Step Mother's Email</Label>
                            <Input
                                type="text"
                                ref="sMotherEmail"
                                value={this.state.fields["sMotherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherEmail")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <FormGroup>
                            <Label>Step Mother's Occupation</Label>
                            <Input
                                type="text"
                                ref="sMotherOccupation"
                                value={this.state.fields["sMotherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherOccupation")}/>
                        </FormGroup>
                    </Col>
                </Row>

                <div className={"sub-section"}>Step Father's Information (if applicable)</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label >Step Father's Name</Label>
                            <Input
                                type="text"
                                ref="sFatherName"
                                value={this.state.fields["sFatherName"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherName")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label >Step Father's Age</Label>
                            <Input
                                type="text"
                                ref="sFatherAge"
                                value={this.state.fields["sFatherAge"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherAge")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label>Step Father's Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="sFatherCell"
                                value={this.state.fields["sFatherCell"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherCell")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label>Step Father's Email</Label>
                            <Input
                                type="text"
                                ref="sFatherEmail"
                                value={this.state.fields["sFatherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherEmail")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <FormGroup>
                            <Label>Step Father's Occupation</Label>
                            <Input
                                type="text"
                                ref="sFatherOccupation"
                                value={this.state.fields["sFatherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherOccupation")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup >
                            <Label className="control-label required pr-2">Is your child adopted?</Label>
                            <Input type="select"
                                   name="isAdopted"
                                   id="isAdopted">
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["fatherOccupation"] }>{this.state.errors["fatherOccupation"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                    <Col sm={1} className={"text-right align-bottom"}>
                        <Label>If yes:</Label>
                    </Col>
                    <Col sm={3}>
                        <FormGroup >
                            <Label>What Age?</Label>
                            <Input type="text"
                                   name="isAdopted"
                                   id="isAdopted">
                            </Input>

                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup >
                            <Label>Country of Birth?</Label>
                            <Input type="text"
                                   name="birthCountry"
                                   id="birthCountry">
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                {/*<Row>*/}
                <Label className="pr-2">Please list siblings in the table below. </Label>
                <ReactTable
                    className={"-striped -highlight"}
                    data={this.state.siblingData}
                    columns={this.state.siblingColumns}
                    defaultPageSize={4}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                {/*</Row>*/}

            </fieldset>

        );
    }

    renderSection3() {
        return(
            <fieldset>
                <div className={"section"}>Section 3: Prenatal and Birth History</div>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">At how many weeks was the client born?</Label>
                            <Input
                                type="text"
                                ref="birthWeek"
                                value={this.state.fields["birthWeek"] || ""}
                                onChange={this.handleChange.bind(this, "birthWeek")}
                                className="error"
                                invalid={this.state.errors["birthWeek"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["birthWeek"] }>{this.state.errors["birthWeek"]}
                                </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Birth Weight</Label>
                            <Input
                                type="text"
                                ref="birthWeight"
                                value={this.state.fields["birthWeight"] || ""}
                                onChange={this.handleChange.bind(this, "birthWeight")}
                                className="error"
                                invalid={this.state.errors["birthWeight"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["birthWeight"] }>{this.state.errors["birthWeight"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup >
                            <Label className="control-label required pr-2">Delivery Type:</Label>
                            <Input type="select"
                                   name="deliveryType"
                                   id="deliveryType">
                                <option>Vaginal</option>
                                <option>Cesarean</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["maritalStatus"] }>{this.state.errors["maritalStatus"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup >
                            <Label className="control-label required pr-2">Were there any complications during the pregnancy or delivery?</Label>
                            <Input type="select"
                                   name="pregComplications"
                                   id="pregComplications">
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["maritalStatus"] }>{this.state.errors["maritalStatus"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>If yes, please describe</Label>
                            <Input
                                type="text"
                                ref="pregComplicationDescription"
                                value={this.state.fields["pregComplicationDescription"] || ""}
                                onChange={this.handleChange.bind(this, "pregComplicationDescription")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup >
                            <Label className="control-label required pr-2">Was your child hospitalized after birth?</Label>
                            <Input type="select"
                                   name="hospitaliedAfterBirth"
                                   id="hospitaliedAfterBirth">
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["maritalStatus"] }>{this.state.errors["maritalStatus"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>If yes, please describe</Label>
                            <Input
                                type="text"
                                ref="hospitaliedAfterBirthDescription"
                                value={this.state.fields["hospitaliedAfterBirthDescription"] || ""}
                                onChange={this.handleChange.bind(this, "hospitaliedAfterBirthDescription")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>

        );
    }

    renderSection4() {
        return(
            <fieldset>
                <div className={"section"}>Section 4: Developmental History</div>
                <div className={"sub-section"}>If your child is over 18 years of age, please mark what is known.</div>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={this.state.devHistoryData}
                    columns={this.state.devHistoryColumns}
                    defaultPageSize={9}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
            </fieldset>
        );
    }

    renderSection5() {
        return(
            <fieldset>
                <div className={"section"}>Section 5: Medical History/Past Therapies</div>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Primary Physician's Name</Label>
                            <Input
                                type="text"
                                ref="drName"
                                value={this.state.fields["drName"] || ""}
                                onChange={this.handleChange.bind(this, "drName")}
                                className="error"
                                invalid={this.state.errors["drName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drName"] }>{this.state.errors["drName"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Primary Physician's Phone Number</Label>
                            <Input
                                type="text"
                                ref="drPhone"
                                value={this.state.fields["drPhone"] || ""}
                                onChange={this.handleChange.bind(this, "drPhone")}
                                className="error"
                                invalid={this.state.errors["drPhone"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drPhone"] }>{this.state.errors["drPhone"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Primary Physician's Address</Label>
                            <Input
                                type="text"
                                ref="drStreet"
                                value={this.state.fields["drStreet"] || ""}
                                onChange={this.handleChange.bind(this, "drStreet")}
                                className="error"
                                invalid={this.state.errors["drStreet"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drStreet"] }>{this.state.errors["drStreet"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">City</Label>
                            <Input
                                type="text"
                                ref="drCity"
                                value={this.state.fields["drCity"] || ""}
                                onChange={this.handleChange.bind(this, "drCity")}
                                className="error"
                                invalid={this.state.errors["drCity"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drCity"] }>{this.state.errors["drCity"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label className="control-label required">State</Label>
                            <Input
                                type="text"
                                ref="drState"
                                value={this.state.fields["drState"] || ""}
                                onChange={this.handleChange.bind(this, "drState")}
                                className="error"
                                invalid={this.state.errors["drState"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drState"] }>{this.state.errors["drState"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Zip Code</Label>
                            <Input
                                type="text"
                                ref="drZip"
                                value={this.state.fields["drZip"] || ""}
                                onChange={this.handleChange.bind(this, "drZip")}
                                className="error"
                                invalid={this.state.errors["drZip"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drZip"] }>{this.state.errors["drZip"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Country</Label>
                            <Input
                                type="text"
                                ref="drCountry"
                                value={this.state.fields["drCountry"] || ""}
                                onChange={this.handleChange.bind(this, "drCountry")}
                                className="error"
                                invalid={this.state.errors["drCountry"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drCountry"] }>{this.state.errors["drCountry"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup >
                            <Label className="control-label required pr-2">Does the client currently receive therapy services outside of Jacob's Ladder?</Label>
                            <Input type="select"
                                   name="outsideTherapy"
                                   id="outsideTherapy">
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["fatherOccupation"] }>{this.state.errors["fatherOccupation"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <ReactTable
                    className={"otherDoctorsTable -striped -highlight"}
                    data={this.state.otherDoctorsData}
                    columns={this.state.otherDoctorsColumns}
                    defaultPageSize={4}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Please list any hospitalizations and/or medical procedures the client has received.</Label>
                            <Input
                                type="text"
                                ref="hospital"
                                value={this.state.fields["hospital"] || ""}
                                onChange={this.handleChange.bind(this, "hospital")}
                                className="error"
                                invalid={this.state.errors["hospital"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["hospital"] }>{this.state.errors["hospital"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Please check all of the following that apply to the client</Label>
                            <Row>
                                <Label>Epilepsy/Seizures
                                    <Input
                                        name="epilepsy"
                                        type="checkbox"
                                        checked={this.state.epilepsy}
                                        onChange={this.handleCheckBoxChange}
                                    />
                                </Label>
                            </Row>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>
        );
    }

    renderSection6() {
        return(
            <fieldset>
                <div className={"section"}>Section 6: General Health</div>
            </fieldset>

        );
    }

    renderSection7() {
        return(
            <fieldset>
                <div className={"section"}>Section 7: Educational History</div>
            </fieldset>

        );
    }

    renderSection8() {
        return(
            <fieldset>
                <div className={"section"}>Section 8: Communication</div>
            </fieldset>

        );
    }

    renderSection9() {
        return(
            <fieldset>
                <div className={"section"}>Section 9: Emotional/Behavioral History</div>
            </fieldset>

        );
    }

    renderSection10() {
        return(
            <fieldset>
                <div className={"section"}>Section 10: Current Schedule and Typical Day</div>
            </fieldset>
        );
    }

    renderSection11() {
        return(
            <fieldset>
                <div className={"section"}>Section 11: Independent Skill</div>
            </fieldset>

        );
    }

    renderSection12() {
        return(
            <fieldset>
                <div className={"section"}>Section 12: Additional Information for Evaluation Day</div>
            </fieldset>

        );
    }

    renderSection13() {
        return(
            <fieldset>
                <div className={"section"}>Section 13: Goals and Additional Information</div>
            </fieldset>

        );
    }

    renderSection14() {
        return(
            <fieldset>
                <div className={"section"}>Section 14: Signature</div>
                <div>
                    <FormGroup>
                        <Col sm={12}>
                            <Label sm={12} className={"checkBox"}>
                                <Input type="checkbox"
                                       ref="consentCheck"
                                       className="error"/>
                                I acknowledge that I have read and completed this information to the best of my knowledge and ability.
                            </Label>
                        </Col>

                    </FormGroup>
                    <FormGroup>
                        <Label className="control-label required" sm={12}>Student Name</Label>
                        <Col sm={12}>
                            <Input
                                type="text"
                                ref="studentName"
                                value={this.state.fields["studentName"] || ""}
                                onChange={this.handleChange.bind(this, "studentName")}
                                className="error"
                                invalid={this.state.errors["studentName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["studentName"] }>{this.state.errors["studentName"]}
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label className="control-label required" sm={12}>Parent/Guardian First Name</Label>
                        <Col sm={12}>
                            <Input
                                type="text"
                                ref="parentName"
                                value={this.state.fields["parentName"] || ""}
                                onChange={this.handleChange.bind(this, "parentName")}
                                className="error"
                                invalid={this.state.errors["parentName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["parentName"]}>{this.state.errors["parentName"]}
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label className="control-label required" sm={12}>Date</Label>
                        <Col sm={12}>
                            <Input
                                type="text"
                                ref="date"
                                value={this.state.fields["date"] || ""}
                                onChange={this.handleChange.bind(this, "date")}
                                className="error"
                                invalid={this.state.errors["date"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["date"]}>{this.state.errors["date"]}
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                </div>
            </fieldset>

        );
    }


    render(){
        return (
            <div>
                <Header loggedIn = {true}/>
                <div className="form-title">
                    <div className = "row" >
                        <div className = "parent-top col-9">
                            <h2>Client History and Information</h2>
                        </div>
                    </div>
                </div>
                <div className={"frame p-4"} data-spy="scroll">
                    <div> {this.renderSection1()} </div>
                    <div> {this.renderSection2()} </div>
                    <div> {this.renderSection3()} </div>
                    <div> {this.renderSection4()} </div>
                    <div> {this.renderSection5()} </div>
                    <div> {this.renderSection6()} </div>
                    <div> {this.renderSection7()} </div>
                    <div> {this.renderSection8()} </div>
                    <div> {this.renderSection9()} </div>
                    <div> {this.renderSection10()} </div>
                    <div> {this.renderSection11()} </div>
                    <div> {this.renderSection12()} </div>
                    <div> {this.renderSection13()} </div>
                    <div> {this.renderSection14()} </div>

                </div>
                <Row className={"p-2 justify-content-center"}>
                    <Button className={"m-2"} onClick={this.handleSaveAndQuit.bind(this)} active>
                        Save and Quit
                    </Button>

                    <Button className={"m-2"} onClick={this.handleSubmit.bind(this)} active>
                        Submit
                    </Button>

                </Row>

            </div>
        );
    };
}

export default ClientHistoryAndInformation;
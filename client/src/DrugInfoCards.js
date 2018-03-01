import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header';
import Menu from './DrugInfoCardMenu';
import TextDataButton from './TextDataButton';
import ShareDataButton from './ShareDataButton';
import SocialIcons from './SocialIcons';
import ShareModal from './ShareModal';
import TextModal from './TextModal';
import './assets/css/Sidebar.css';
import './assets/css/Widgets.css';

class Home extends Component {
  constructor( props ) {
		super( props );
    this.state = {
      currentDrug: "",
      background: {
        page1: "/images/page-display/drug-info-cards/en/front/2cs.jpg",
        page2: "/images/page-display/drug-info-cards/en/back/2cs.jpg"
        },
      previewUrl: "",
      downloadUrl: "",
      modalOpen: "false"
      }
      this.updateDrug = this.updateDrug.bind(this);
      this.openShareModal = this.openShareModal.bind(this);
      this.openTextModal = this.openTextModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

  updateDrug(data){
    this.setState({
      background: Object.assign({}, this.state.background, data.displayUrl),
      currentDrug: data.name,
      previewUrl: data.previewUrl,
      downloadUrl: data.downloadUrl
    },() => console.log(this.state))
  }

  openTextModal(){
    this.setState({
      modalOpen: "true"
    },() => console.log(this.state.modalOpen))
  }

  openShareModal(){
    this.setState({
      modalOpen: "true"
    },() => console.log(this.state.modalOpen))
  }

  closeModal(){
    this.setState({
        modalOpen: "false"
    },() => console.log(this.state.modalOpen))
  }

  resortDrugsByName(a, b) {
      const drugA = a.prettyName.toUpperCase();
      const drugB = b.prettyName.toUpperCase();

      let resort = 0;
      if (drugA > drugB) {
        resort = 1;
      } else if (drugA < drugB) {
        resort = -1;
      }
      return resort;
  }

  renderMenuItems() {
    if(this.props.drugInfoCards) {
      let propsCopy = Object.assign({}, this.props);
      propsCopy.drugInfoCards = propsCopy.drugInfoCards.sort(this.resortDrugsByName);
      return <Menu childProps={propsCopy} state={this.state.background} updateDrug={this.updateDrug} />;
    } else {
      return '<ul className="navigation"><li>No Information to Load</li></ul>';
    }
  }

  componentDidMount() {
    this.props.getDrugInfoCards()
  }
  render() {
	  return(
      <div>
        <div className="menu top left horizontal">
          <input id="slide" name="slide" type="checkbox"/>
          <label htmlFor="slide" className="icon open">
            <i className="fa fa-bars"></i>
          </label>

          <nav>
            <div className="sidebar-menu">
              <Header/>
              <div className="main-navigation">
                {this.renderMenuItems()}
              </div>
              <div className="social-icons">
                <SocialIcons/>
              </div>
            </div>
          </nav>
        </div>

        <div className="share-info">
          <ul>
            <TextDataButton url={this.props.match.path} action={this.openTextModal}/>
            {/*<TextDataButton url={this.props.match.path} action={this.openTextModal}/>*/}
          </ul>
        </div>
        <div className="banner-bg" id="front" style={{backgroundImage: `url(${this.state.background.page1})`}}></div>
        <div className="banner-bg" id="back" style={{backgroundImage: `url(${this.state.background.page2})`}}></div>

        <TextModal currentData={this.state}/>
      {/*<ShareModal currentData={this.state}/>*/}
      </div>
    )
  }
}

export default Home

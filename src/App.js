import React, { Component } from 'react';
// import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import resumeData from './resumeData';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    // ReactGA.initialize('UA-110570651-1');
    // ReactGA.pageview(window.location.pathname);

  }

  // getResumeData(){
  //   $.ajax({
  //     url:'/resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){

  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  componentDidMount(){
    this.setState({resumeData: {
      "main": {
        "name":"梁勇",
        "occupation":"(Your Occupation Here)",
        "description":"Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer",
        "image":"avatar.jpeg",
        "bio":"4年前端开发工作经验，简单可依赖，扎实的前端基础和快速的学习能力。有Vue全家桶、React全家桶、Angular项目开发经验，参与过微信H5、百度Hi H5页面开发。期望可以做一些即有挑战又有趣的事情（RN，Node，小程序，Flutter等）",
        "contactmessage":"Here is where you should write your message to readers to have them get in contact with you.",
        "email": "ly604547351@163.com",
        "phone": "13262275630",
        "address":{
          "street":"上海浦东张江镇（租房）"
        },
        "website": "http://www.timbakerdev.com",
        "resumedownload":"http://pybwfi2ha.bkt.clouddn.com/%E6%A2%81%E5%8B%87%E7%9A%84%E7%AE%80%E5%8E%86.pdf",
        "social":[
          {
            "name":"github",
            "url":"https://github.com/HankLiang",
            "className":"fa fa-github"
          }
        ]
      },
      "resume":{
        "skillmessage":"对前端技术比较敏感，喜欢并且擅长前端",
        "education":[
          {
            "school":"内蒙古工业大学",
            "degree":"学士",
            "graduated":"2011.09 - 2015.07",
            "description":"计算机科学与技术专业，担任过学生会干部。"
          }
        ],
        "work":[
          {
            "company":"百度",
            "title":"前端高级开发工程师",
            "years":"2018.08 - 至今",
            "description":"商业平台部（品牌广告技术部）FE，参与过百度指数产品重构的开发工作，日常维护商业产品的业务端（独立开发，维护），百度Veui组件库贡献者之一。技术栈是vue全家桶"
          },
          {
            "company":"上海泛微网络科技股份有限公司",
            "title":"前端开发工程师",
            "years":"2017.02 - 2018.07",
            "description":"OA系统-E9产品标准组件库开发和维护工作，参与前端基础架构研发和升级，处理复杂的产品业务，前端技术支持。技术栈是react全家桶"
          },
          {
            "company":"群硕软件开发(上海)有限公司",
            "title":"前端开发工程师",
            "years":"2014.11 - 2017.01",
            "description":"参与crm系统后台管理系统前端页面开发及维护，参与过微信公众号开发。技术栈是angular+vue全家桶"
          }
        ],
        "skills":[
          {
            "name":"Git",
            "level":"80%"
          },
          {
            "name":"Vue",
            "level":"80%"
          },
          {
            "name":"React",
            "level":"80%"
          },
          {
            "name":"CSS",
            "level":"80%"
          }
        ]
      },
      "portfolio":{
        "projects": [
          {
            "title":"百度指数",
            "category":"百度指数是以百度海量网民行为数据为基础的数据分享平台。",
            "image":"zhishu.jpg",
            "url":"http://index.baidu.com"
          },
          {
            "title":"百度指数专业版",
            "category":"百度指数专业版是基于百度海量用户行为分析行业、品牌、产品发展趋势变化，据此帮助客户进行商业分析、监控和决策的权威行业数据分析平台。",
            "image":"zhishu_vip.jpg",
            "url":"http://vip.index.baidu.com"
          },
          {
            "title":"天启",
            "category":"品牌广告投放系统",
            "image":"tianqi.jpg",
            "url":"http://pinpai.baidu-int.com/#/home"
          },
          {
            "title":"VEUI",
            "category":"百度VUE组件库",
            "image":"veui.jpg",
            "url":"http://one-design.baidu-int.com/"
          }
        ]
      }
    }});
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;

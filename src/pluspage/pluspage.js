import React from 'react';
import './pluspage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
class Pluspage extends React.Component {
  componentDidMount(){
  $('#action_menu_btn').on("click",function(){
    $('.action_menu').toggle();
  });
  }
 
  render() {
   
    return (
     
        <div className="maincontainer">
         
         
          <div class="container-fluid h-50">
            <div class="row justify-content-center h-100">
              <div class="col-md-4 col-xl-3 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
                <div class="card-header">
                  <div class="input-group">
                    <input type="text" placeholder="검색어 입력.." name="" class="form-control search" />
                    <div class="input-group-prepend">
                      <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
                    </div>
                  </div>
                </div>
                <div class="card-body contacts_body">
                  <ul class="contacts">
                  <li class="active">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" 
                        alt = ""
                        class="rounded-circle user_img" />
                        <span class="online_icon"></span>
                      </div>
                      <div class="user_info">
                        <span>전문가0</span>
                        <p>전문가 0 채팅 가능</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" 
                        alt = ""
                        class="rounded-circle user_img" />
                        <span class="online_icon offline"></span>
                      </div>
                      <div class="user_info">
                        <span>전문가1</span>
                        <p>전문가1 7분 전 온라인</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                        alt = ""
                         class="rounded-circle user_img" />
                        <span class="online_icon"></span>
                      </div>
                      <div class="user_info">
                        <span>전문가2</span>
                        <p>전문가2 채팅 가능</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                        alt = ""
                        class="rounded-circle user_img" />
                        <span class="online_icon offline"></span>
                      </div>
                      <div class="user_info">
                        <span>전문가3</span>
                        <p>전문가3 30분 전 온라인 </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                        alt = ""
                        class="rounded-circle user_img" />
                        <span class="online_icon offline"></span>
                      </div>
                      <div class="user_info">
                        <span>전문가4</span>
                        <p>전문가 4 55분 전 온라인</p>
                      </div>
                    </div>
                  </li>
                </ul>
                </div>
                <div class="card-footer"></div>
              </div></div>
              <div class="col-md-8 col-xl-6 chat">
                <div class="card">
                  <div class="card-header msg_head">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                        alt = ""
                        class="rounded-circle user_img" />
                        <span class="online_icon"></span>
                      </div>
                      <div class="user_info">
                        <span>전문가 0 </span>
                        <p>1767 메시지</p>
                      </div>
                      <div class="video_cam">
                        <span><i class="fas fa-video"></i></span>
                        <span><i class="fas fa-phone"></i></span>
                      </div>
                    </div>
                    <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
                    <div class="action_menu">
                      <ul>
                        <li><i class="fas fa-user-circle"></i> 프로필 보기</li>
                        <li><i class="fas fa-users"></i> 즐겨찾기 추가</li>
                        <li><i class="fas fa-plus"></i> 그룹 추가</li>
                        <li><i class="fas fa-ban"></i> 차단</li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body msg_card_body">
                    <div class="d-flex justify-content-end mb-4">
                      <div class="msg_cotainer_send">
                        안녕하세요. 도움이 필요합니다.
                        <span class="msg_time_send">8:55 AM, 오늘</span>
                      </div>
                      <div class="img_cont_msg">
                    <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                        alt = ""
                        class="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="img_cont_msg">
                        <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" 
                        alt = ""
                        class="rounded-circle user_img_msg" />
                      </div>
                      <div class="msg_cotainer">
                        네 연락해줘서 감사합니다. 어떤 걸 도와드릴까요?
                        <span class="msg_time">9:00 AM, 오늘</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                      <div class="msg_cotainer_send">
                        공공서비스 1 이 어려워요
                        <span class="msg_time_send">9:05 AM, 오늘</span>
                      </div>
                      <div class="img_cont_msg">
                    <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" 
                    alt = ""
                    class="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="img_cont_msg">
                        <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" 
                        alt = ""
                        class="rounded-circle user_img_msg" />
                      </div>
                      <div class="msg_cotainer">
                        그렇군요. 이렇게 하면 됩니다.
                        <span class="msg_time">9:07 AM, 오늘</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                      <div class="msg_cotainer_send">
                        해결했습니다. 감사합니다.
                        <span class="msg_time_send">9:10 AM, 오늘</span>
                      </div>
                      <div class="img_cont_msg">
                  <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" 
                  alt = ""
                  class="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="img_cont_msg">
                        <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt = ""
                        class="rounded-circle user_img_msg" />
                      </div>
                      <div class="msg_cotainer">
                        좋은 하루 되세요.
                        <span class="msg_time">9:12 AM, 오늘</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="input-group">
                      <div class="input-group-append">
                        <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                      </div>
                      <textarea name="" class="form-control type_msg" placeholder="메시지를 입력하세요."></textarea>
                      <div class="input-group-append">
                        <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      
)
};
}
export default Pluspage;
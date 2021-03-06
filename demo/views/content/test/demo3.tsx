import * as React from 'react';

import {formatTxt} from '../../../configs/tools';

var str=`
	武汉市全年共批准逮捕各类刑事犯罪嫌疑人11141人,提起公诉14207人。突出打击黑恶势力、严重暴力、贩卖毒品、拐卖妇女儿童、危害食品药品安全等严重危害公共安全和人民群众生命健康的犯罪，共批捕上述各类案件犯罪嫌疑人4125人，同比上升4.8%。
	共立案侦查贪污贿赂犯罪案件226件287人，同比上升1.8%, 其中大案263人，占立案总人数的91.6%；立案侦查渎职侵权犯罪案件61件87人，同比上升19.2%,其中重特大案件78人，占立案总人数的89.7%。所办职务犯罪案件中，县处级以上要案74人（含厅局级干部9人）。受理首次举报1236件，同比上升26.3%，全市检察机关所查办的职务犯罪案件，起诉率和有罪判决率分别达到92.6%和100%。
	在立案监督方面，对侦查机关应当立案而不立案的,督促立案378件；对不应当立案而立案的,监督撤案258件。督促行政执法机关移送涉嫌犯罪线索219件。
	在侦查活动监督中，坚持惩治犯罪与保障人权并重,对应当逮捕而未提请逮捕的,追加逮捕536人;对应当起诉而未移送起诉的,追加起诉223人；对滥用强制措施、违法取证、刑讯逼供等侦查活动违法情形,提出纠正意见571件次。
	  在刑事审判监督方面，对认为确有错误的刑事裁判提出抗诉116人；在已收到裁判结果的81人中，改判55人，改判率达67.9%。提出变更强制措施建议368件487人，侦查机关对建议采纳率为97.19%。审查刑罚执行机关提请减刑、假释、暂予监外执行案件4349件，提出书面纠正意见135件；按照上级部署，重点对涉黑犯罪、职务犯罪和经济犯罪“三类罪犯”的减刑、假释、暂予监外执行开展专项检察，督促收监执行27人，其中服刑前为厅局级以上职务的罪犯7人；立案查办监管场所职务犯罪案件6件6人。对357件不服生效再审裁判的案件认真审查，提出和提请抗诉69件。加大对民事审判程序中违法行为的监督力度，监督范围覆盖立案、诉前保全、中止诉讼、合并审理等各个审判环节，共提出检察建议309件，法院回复、采纳率达73.5%。办理民事执行活动监督案件164件，其中提出检察建议132件，法院采纳111件。积极开展行政执行、审判活动监督工作，依法纠正确有错误的行政裁判结果案件，共办理行政提请抗诉案件13件。结合履行检察职能督促行政作为，对269件行政机关违法行使职权或者不行使职权的案件提出纠正意见，行政机关采纳265件，采纳率达98.5%。



襄阳市共批准和决定逮捕各类犯罪嫌疑人3503人，提起公诉4492人。严厉打击黑恶势力、严重暴力、涉枪涉爆涉恐、拐卖妇女儿童等严重危害公共安全和人民群众生命健康的犯罪，提升人民群众安全感；不捕534人、不诉146人，追捕314人、追诉286人。
立案侦查职务犯罪271人，其中贪污贿赂犯罪204人，同比上升14.1%；渎职侵权犯罪67人，同比上升15.5%。查办贪污贿赂大案和渎职侵权重特大案件239人，同比上升73.6%；县级干部13人，同比上升85.7%。查办民政系统10人，医疗系统14人，土地违规建房审批环节25人。
刑事诉讼监督，监督侦查机关立案402件、撤案113件；对侦查活动中的违法情形发出纠正违法通知书717件；不断完善行政执法与刑事司法衔接工作机制，监督行政执法机关移送涉嫌犯罪案件116件，对认为确有错误的刑事判决、裁定提出、提请抗诉34件。
民事和行政诉讼监督，对认为确有错误的民事行政裁判提出、提请抗诉24件，发出再审检察建议34件，针对民事行政审判、执行活动违法情形发出检察建议768件，督促行政机关履行职责256件。
刑罚执行和监管场所活动监督，发出纠正违法通知书、检察建议597件，促进依法文明安全监管；积极开展减刑、假释、暂予监外执行及法院交付执行专项检察活动，监督重新收监12人。`;

export default class Demo3 extends React.Component<any,any> {

	constructor(props){
    super(props);
  };

  componentDidMount=()=>{

  };

  render() {
    return (
      <div>
        <h2>Demo3</h2>
        <div className="txt-info" dangerouslySetInnerHTML={{__html:formatTxt(str)}} />
      </div>
    )
  };
}

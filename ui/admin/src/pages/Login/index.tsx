import "./index.css";
import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react";
import { GlobalContext } from "../../components/GlobalContext";
import { login as fetchLogin } from "../../utils/api";
import { Button, Form, Input, notification } from "antd";
import { getLoginState } from "../../utils";
import axios from "axios";
import { config } from "../../config";
export interface LoginProps {}
export const Login: React.FC<LoginProps> = (props) => {
  const navigate = useNavigate();
  const { store, setStore } = useContext(GlobalContext);
  const login = useCallback(
    async (username: string, password: string) => {
      const data = await fetchLogin(username, password);
      if (data.success) {
        const { user, token } = data.data;
        window.localStorage.setItem("_token", token);
        window.localStorage.setItem("_user", user);
        setStore({ ...store, user });
        axios.defaults.headers.common = {
          Authorization: token,
        };
        notification.success({ message: "登录成功!" });
        navigate("/");
      } else {
        notification.error({ message: data.errorMessage ?? "登录失败!" });
      }
    },
    [setStore, store]
  );
  useEffect(() => {
    const hasLogin = getLoginState();
    if (hasLogin) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <div
            className="logo"
            style={{  display: "flex", alignItems: "center",justifyContent:"center",marginBottom: 30,fontSize: 18,fontWeight:500 }}
          >
            <svg
              viewBox="0 0 1707 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5964"
              width="50"
              height="50"
            >
              <path
                d="M1466.567451 794.997816h43.799479s99.027245 6.103591 135.27949-114.04114c9.259464-40.563032 20.721324-88.787447-29.678629-139.187399l-71.564442-60.552462c-143.108739-352.322931-286.257765-374.340177-286.257765-374.340177-495.445099-175.701514-608.291037-19.270965-608.291037-19.270965l-211.91347 272.50622c-203.681344 38.971666-313.781001 104.600382-313.781001 104.600382-58.121768 61.492508-58.121768 216.492843 0 297.256316l135.70251 38.286774"
                fill="#FF8FAA"
                p-id="5965"
              ></path>
              <path
                d="M455.775113 337.188173l194.099578-249.575785s211.550881-176.39312 625.695337 24.95825c0 0 206.615634 168.362432 241.558527 325.860606-0.020144 0-462.201006-165.260277-1061.353442-101.243071z"
                fill="#AADBF7"
                p-id="5966"
              ></path>
              <path
                d="M1494.433132 482.190436l-4.612945-3.894481 12.368334 12.2609c-2.376976-2.779854-4.962106-5.573136-7.755389-8.366419zM560.697796 373.386701l-0.080575 0.067146c30.37695-31.471433 75.526068-86.007593 139.677567-180.589759 0 0 20.385592-79.353403 163.326465-87.578815l-43.470463 206.817073 114.067999 1.269063L1026.692563 120.863196h-0.013429c48.996597 10.347233 105.204698 26.160167 169.765788 49.057029 0 0 110.327954 46.028734 160.184023 165.878022-98.792234-251.939332-186.78064-248.105283-186.78064-248.105284-449.436509-159.378268-539.049855 24.42108-539.049855 24.421081-192.239628 247.178665-173.237248 255.518226-173.237248 255.518226-184.74611 35.359199-316.366131 87.914546-316.36613 87.914545-52.723212 55.78508-80.273306 142.685718-27.550095 215.942244l158.444936-5.049396c-154.81904-38.723225-117.848331-98.335639-48.66758-137.649751 0 0 99.873288-51.937601 284.632827-87.290086 0 0 632.289096-96.408543 964.04514 47.479092l-4.09592-22.587988c0-0.006715-330.809282-186.001744-907.306584-93.004229z"
                fill="#FFFFFF"
                opacity=".43"
                p-id="5967"
              ></path>
              <path
                d="M1609.273313 547.463276l-71.564442-60.559176c-143.108739-352.322931-286.257765-374.340177-286.257765-374.340177a2290.142699 2290.142699 0 0 0-21.574081-7.520376c39.246966 52.548632 82.791289 126.745205 126.543767 231.352301-0.141007-0.040288-219.420418-67.985548-411.425035-45.437847l-10.770253 22.406693s298.431375 35.104044 474.361186 77.694892l26.11988 22.091106c50.399953 50.399953 38.938093 98.624368 29.678629 139.1874-36.265673 120.151446-135.292919 114.04114-135.292919 114.04114h-43.78605l-1205.939398 5.237405c6.640761 35.963515 19.317968 69.879071 38.118909 96.005666l135.702511 38.286774 1206.69815-5.237405h43.78605s99.027245 6.090162 135.292919-114.04114c9.246035-40.563032 20.707894-88.767303-29.692058-139.167256z"
                fill="#6E6E96"
                opacity=".15"
                p-id="5968"
              ></path>
              <path
                d="M1466.567451 818.498993h43.799479c-0.483453 0-0.980335-0.013429-1.457072-0.047002 40.683895 2.511269 126.315469-21.580795 159.25069-130.706832 0.141007-0.517026 0.288729-1.034052 0.416306-1.557792l0.201439-0.88633c9.716058-42.604277 23.044583-100.920769-36.185098-160.15045a19.257536 19.257536 0 0 0-1.443644-1.32278l-71.551012-60.552462c2.900717 2.450837 5.163544 5.573136 6.58033 9.091599-146.459335-360.521485-298.095644-387.729133-304.461106-388.716183 1.457073 0.228297 2.894002 0.584172 4.283929 1.081054C759.786339-94.790319 635.841131 66.891064 630.818594 73.860842c0.161151-0.228297 0.335731-0.44988 0.510311-0.678177L419.395291 345.68217a23.507892 23.507892 0 0 1 14.134279-8.655148C228.149427 376.327705 116.780706 441.754982 112.134188 444.521406c-1.85995 1.107913-3.55875 2.470981-5.042682 4.048917-65.507852 69.301614-66.535189 237.455893-1.994242 327.12967a23.501177 23.501177 0 0 0 12.69735 8.883445l135.702511 38.28006a23.501177 23.501177 0 1 0 12.764496-45.222979l-135.702511-38.286775a23.561609 23.561609 0 0 1 12.697351 8.883445c-51.454148-71.483866-52.515059-213.927857-1.994243-267.376249a23.407172 23.407172 0 0 1-5.042681 4.042203c1.047481-0.62446 109.663207-64.097782 306.166619-101.699665a23.507892 23.507892 0 0 0 14.13428-8.655148l211.926899-272.499505 0.510312-0.678177c0.839328-1.06091 114.417159-137.925051 581.372117 27.670958 1.389927 0.490167 2.826856 0.852757 4.283929 1.081054 0.919903 0.181295 133.627693 29.007167 268.06114 359.944027 1.430214 3.518462 3.699757 6.640761 6.587044 9.098313l71.564441 60.552461a24.360649 24.360649 0 0 1-1.436929-1.316066c40.838331 40.85176 32.458483 77.574028 23.588467 116.458404l-0.201438 0.879616c0.120863-0.517026 0.255156-1.034052 0.423021-1.544363-30.55153 101.162495-110.562966 97.429165-111.348577 97.375448a21.117486 21.117486 0 0 0-1.457073-0.047002h-43.792765c-12.992794 0-23.501177 10.508383-23.501177 23.501177s10.481525 23.474319 23.467604 23.474318z"
                fill="#6E6E96"
                p-id="5969"
              ></path>
              <path
                d="M627.031547 807.480299h420.20776a23.501177 23.501177 0 1 0 0-47.002354H627.031547a23.501177 23.501177 0 1 0 0 47.002354z"
                fill="#6E6E96"
                p-id="5970"
              ></path>
              <path
                d="M1271.554684 751.688504m-178.313502 0a178.313502 178.313502 0 1 0 356.627004 0 178.313502 178.313502 0 1 0-356.627004 0Z"
                fill="#F0F0FF"
                p-id="5971"
              ></path>
              <path
                d="M1271.554684 613.662735c76.103526 0 138.02577 61.928959 138.02577 138.032484s-61.922244 138.019055-138.02577 138.019055c-76.11024 0-138.032485-61.91553-138.032484-138.019055s61.922244-138.032485 138.032484-138.032484z m-218.607949 138.032484c0 120.527465 98.06034 218.594519 218.607949 218.59452 58.383638 0 113.282388-22.742425 154.577313-64.010492 41.268067-41.281496 64.010492-96.180246 64.010492-154.577313 0-120.52075-98.06034-218.601234-218.601234-218.601234s-218.594519 98.06034-218.59452 218.594519z"
                fill="#6E6E96"
                p-id="5972"
              ></path>
              <path
                d="M1276.449644 678.384976c69.19418 0 127.27566 47.512665 143.417611 111.711166 2.914146-11.596152 4.478653-23.70933 4.478653-36.211956 0-81.690091-66.206173-147.902979-147.896264-147.902979s-147.916408 66.212888-147.916409 147.902979c0 12.482482 1.571222 24.615804 4.498797 36.211956 16.141951-64.198501 74.216717-111.711166 143.417612-111.711166z"
                fill="#6E6E96"
                opacity=".15"
                p-id="5973"
              ></path>
              <path
                d="M1556.872403 461.294532c-175.197917-109.50877-427.412549-143.847347-650.834882-148.702019L980.348242 48.479571a23.501177 23.501177 0 0 0-45.243123-12.730923L857.390084 311.968053c-237.261169-0.832613-431.448037 29.154889-447.133394 31.646014a23.501177 23.501177 0 1 0 7.37937 46.418182c7.46666-1.181773 751.097618-115.934664 1114.345239 111.113565a23.487748 23.487748 0 1 0 24.891104-39.851282z"
                fill="#6E6E96"
                p-id="5974"
              ></path>
              <path
                d="M631.107322 289.615076l196.113965-11.146272-7.070497 33.633542-214.256873 9.635482z"
                fill="#6E6E96"
                opacity=".15"
                p-id="5975"
              ></path>
              <path
                d="M438.182803 751.688504m-178.313502 0a178.313502 178.313502 0 1 0 356.627004 0 178.313502 178.313502 0 1 0-356.627004 0Z"
                fill="#F0F0FF"
                p-id="5976"
              ></path>
              <path
                d="M438.182803 613.662735c76.103526 0 138.02577 61.928959 138.02577 138.032484 0 36.863275-14.355862 71.524154-40.428739 97.590316a137.099152 137.099152 0 0 1-97.603746 40.428739c-76.103526 0-138.02577-61.91553-138.02577-138.019055s61.922244-138.032485 138.032485-138.032484z m-218.601234 138.032484c0 120.527465 98.06034 218.594519 218.601234 218.59452 120.540894 0 218.601234-98.06034 218.601234-218.59452 0-120.547609-98.067054-218.607949-218.601234-218.607949-120.53418 0-218.601234 98.073769-218.601234 218.607949z"
                fill="#6E6E96"
                p-id="5977"
              ></path>
              <path
                d="M430.843721 683.984971c69.19418 0 127.27566 47.51938 143.424326 111.711166 2.920861-11.596152 4.478653-23.70933 4.478653-36.211956 0-81.690091-66.219602-147.902979-147.902979-147.902979s-147.909694 66.212888-147.909693 147.902979c0 12.482482 1.564507 24.615804 4.478652 36.211956 16.148666-64.191786 74.230146-111.711166 143.431041-111.711166z"
                fill="#6E6E96"
                opacity=".15"
                p-id="5978"
              ></path>
              <path
                d="M434.516619 754.172915m-48.459427 0a48.459427 48.459427 0 1 0 96.918854 0 48.459427 48.459427 0 1 0-96.918854 0Z"
                fill="#6E6E96"
                p-id="5979"
              ></path>
              <path
                d="M1270.487059 754.172915m-48.466141 0a48.466142 48.466142 0 1 0 96.932283 0 48.466142 48.466142 0 1 0-96.932283 0Z"
                fill="#6E6E96"
                p-id="5980"
              ></path>
              <path
                d="M1014.888258 501.92471h-57.074287a23.501177 23.501177 0 1 1 0-47.002354h57.074287a23.501177 23.501177 0 1 1 0 47.002354z"
                fill="#6E6E96"
                p-id="5981"
              ></path>
            </svg>
            <span style={{ marginLeft: 8, fontSize: 18 }}>{config.title}</span>
          </div>
          <Form
            onFinish={(values) => {
              login(values.username, values.password);
            }}
            autoComplete="on"
          >
            <Form.Item name="username" required label="账号">
              <Input placeholder="默认: admin" />
            </Form.Item>
            <Form.Item name="password" required label="密码">
              <Input.Password placeholder="默认: admin" />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                style={{ width: "100%" }}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Customer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCustomer", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"4\"/><Column id=\"name\" type=\"STRING\" size=\"16\"/><Column id=\"email\" type=\"STRING\" size=\"32\"/><Column id=\"phone\" type=\"STRING\" size=\"16\"/><Column id=\"comp_name\" type=\"STRING\" size=\"32\"/><Column id=\"department\" type=\"STRING\" size=\"32\"/><Column id=\"comp_phone\" type=\"STRING\" size=\"16\"/><Column id=\"comp_addr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1000</Col><Col id=\"name\">박주연</Col><Col id=\"email\">1234@naver.com</Col><Col id=\"phone\">01011111111</Col><Col id=\"comp_name\">SK로우닉스</Col><Col id=\"department\">개발</Col><Col id=\"comp_phone\">02)1111-1111</Col><Col id=\"comp_addr\">처인구</Col></Row><Row><Col id=\"id\">2000</Col><Col id=\"name\">김민재</Col><Col id=\"email\">5678@naver.com</Col><Col id=\"phone\">01022222222</Col><Col id=\"comp_name\">SanSung</Col><Col id=\"department\">인사</Col><Col id=\"comp_phone\">02)2222-2222</Col><Col id=\"comp_addr\">기흥구</Col></Row><Row><Col id=\"id\">3000</Col><Col id=\"name\">손헝민</Col><Col id=\"email\">15687@naver.com</Col><Col id=\"phone\">01033333333</Col><Col id=\"comp_name\">MG</Col><Col id=\"comp_phone\">02)3333-3333</Col><Col id=\"department\">기획</Col><Col id=\"comp_addr\">수지구</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","30","23","996","114",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Customer List Search");
            obj.set_background("#0ae078");
            obj.set_color("#f40414");
            obj.set_font("26px/normal \"Malgun Gothic\",\"D2Coding\"");
            this.addChild(obj.name, obj);

            obj = new Div("divCommand","5","147","550","120",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","60","33","275","35",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("0");
            this.divCommand.addChild(obj.name, obj);

            obj = new Button("search","393","170","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Search");
            this.addChild(obj.name, obj);

            obj = new Grid("gridCustomer","68","314","642","270",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsCustomer");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"전자메일\"/><Cell col=\"3\" text=\"휴대전화\"/><Cell col=\"4\" text=\"회사이름\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"회사번호\"/><Cell col=\"7\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:email\"/><Cell col=\"3\" text=\"bind:phone\"/><Cell col=\"4\" text=\"bind:comp_name\"/><Cell col=\"5\" text=\"bind:department\"/><Cell col=\"6\" text=\"bind:comp_phone\"/><Cell col=\"7\" text=\"bind:comp_addr\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("insert","570","200","120","57",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","725","200","115","57",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","780","287","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("ID");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","780","320","137","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","780","365","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","780","398","137","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","780","447","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("전자메일");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","780","480","137","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","780","525","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("휴대전화");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","780","558","137","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","780","605","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("회사이름");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","780","638","137","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","980","297","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("부서");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","980","330","137","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","980","385","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("회사번호");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","980","418","137","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","980","477","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","980","510","137","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCommand.form
            obj = new Layout("default","",0,0,this.divCommand.form,function(p){});
            this.divCommand.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","dsCustomer","id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00_00","value","dsCustomer","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_00_00","value","dsCustomer","email");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00_00_00_00","value","dsCustomer","phone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit00_00_00_00_00","value","dsCustomer","comp_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Edit00_01","value","dsCustomer","department");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Edit00_01_00","value","dsCustomer","comp_phone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Edit00_01_00_00","value","dsCustomer","comp_addr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Customer.xfdl", function() {

        /*
        * 검색 기능
        */


        this.Button00_onclick = function(obj,e)
        {
        	var id = "search";
             var url = "http://localhost:8584/HelloNX/Service/sample.xml";
             var reqDs = "";
             var respDs = "dsCustomer=customers";
             var args = "";
             var callback = "received";

             this.transaction(id, url, reqDs, respDs, args, callback);
        };

        this.received = function(id, code, message)
        {
             if (code == 0) {
                  this.alert(this.dsCustomer.rowcount + " numbers of data have been found.");
                  trace(this.dsCustomer.rowcount + " numbers of data have been found.");
             } else {
                  this.alert("Error["+code+"]:"+message);
                  trace("Error["+code+"]:"+message);
             }
        }

        /*
        * 입력 기능
        */

        this.divCommand_insert_onclick = function(obj,e)
        {
        	var row = this.dsCustomer.addRow();
             this.dsCustomer.setColumn(row, "id", "TC-001");
             this.dsCustomer.setColumn(row, "name", "Tzuyu");
             this.dsCustomer.setColumn(row, "email", "ceo@twice.com");
             this.dsCustomer.setColumn(row, "phone", "6987-6543");
             this.dsCustomer.setColumn(row, "comp_name", "TWICE");
             this.dsCustomer.setColumn(row, "department", "0");
             this.dsCustomer.setColumn(row, "comp_phone", "6506-7000");
             this.dsCustomer.setColumn(row, "comp_addr", "Seoul");
        };




        this.Button01_onclick = function(obj,e)
        {
        	var yn = this.confirm("정말 삭제하시겠습니까?");
        	if(yn){
        		this.dsCustomer.deleteRow(this.dsCustomer.rowposition);
        		this.alert("삭제성공");
        		}
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.search.addEventHandler("onclick",this.Button00_onclick,this);
            this.insert.addEventHandler("onclick",this.divCommand_insert_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Edit00_00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Edit00_00_00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Edit00_00_00_00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Edit00_00_00_00_00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Static01_01.addEventHandler("onclick",this.Static01_01_onclick,this);
            this.Edit00_01.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Edit00_01_00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Edit00_01_00_00.addEventHandler("onchanged",this.Edit00_onchanged,this);
        };
        this.loadIncludeScript("Customer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

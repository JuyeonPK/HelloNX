(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MainForm");
            this.set_titletext("넥사크로 메인 폼");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dc_member", this);
            obj._setContents("<ColumnInfo><Column id=\"MID\" type=\"STRING\" size=\"10\"/><Column id=\"MNAME\" type=\"STRING\" size=\"30\"/><Column id=\"PWD\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"MID\">1000</Col><Col id=\"MNAME\">홍길동</Col><Col id=\"EMAIL\">1000@ez.edu</Col><Col id=\"PWD\">123</Col></Row><Row><Col id=\"MID\">2000</Col><Col id=\"MNAME\">전우치</Col><Col id=\"EMAIL\">2000@ez.edu</Col><Col id=\"PWD\">1234</Col></Row><Row><Col id=\"MID\">3000</Col><Col id=\"MNAME\">임꺽정</Col><Col id=\"EMAIL\">3000@ez.edu</Col><Col id=\"PWD\">12345</Col></Row><Row><Col id=\"MID\">4000</Col><Col id=\"MNAME\">박주용</Col><Col id=\"EMAIL\">4000@ez.edu</Col><Col id=\"PWD\">123456</Col></Row><Row><Col id=\"MID\">5000</Col><Col id=\"MNAME\">김먼재</Col><Col id=\"EMAIL\">5000@ez.edu</Col><Col id=\"PWD\">1234567</Col></Row><Row><Col id=\"MID\">6000</Col><Col id=\"MNAME\">기선용</Col><Col id=\"EMAIL\">6000@ez.edu</Col><Col id=\"PWD\">12345678</Col></Row><Row><Col id=\"MID\">7000</Col><Col id=\"MNAME\">이번영</Col><Col id=\"EMAIL\">7000@ez.edu</Col><Col id=\"PWD\">123456789</Col></Row><Row><Col id=\"MID\">8000</Col><Col id=\"MNAME\">호난두</Col><Col id=\"EMAIL\">8000@ez.edu</Col><Col id=\"PWD\">1234567890</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","35","25","996","114",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객 정보 관리");
            obj.set_background("#0ae078");
            obj.set_color("#f40414");
            obj.set_font("26px/normal \"Malgun Gothic\",\"D2Coding\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","165","350","398",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dc_member");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"고객이름\"/><Cell col=\"2\" text=\"비밀번호\"/><Cell col=\"3\" text=\"전자메일\"/></Band><Band id=\"body\"><Cell text=\"bind:MID\"/><Cell col=\"1\" text=\"bind:MNAME\"/><Cell col=\"2\" text=\"bind:PWD\"/><Cell col=\"3\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","399","162","81","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_background("#ffffff");
            obj.set_font("14px/normal \"Malgun Gothic\",\"D2Coding\"");
            obj.set_cursor("default");
            obj.set_color("#0d0c0c");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","400","217","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("14px/normal \"Malgun Gothic\",\"D2Coding\"");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","398","270","81","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("고객이름");
            obj.set_background("#ffffff");
            obj.set_font("14px/normal \"Malgun Gothic\",\"D2Coding\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","399","325","201","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("14px/normal \"Malgun Gothic\",\"D2Coding\"");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","398","371","81","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("비밀번호");
            obj.set_background("#ffffff");
            obj.set_font("14px/normal \"Malgun Gothic\",\"D2Coding\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","399","426","201","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("14px/normal \"Malgun Gothic\",\"D2Coding\"");
            obj.set_password("true");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","397","475","81","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전자메일");
            obj.set_background("#ffffff");
            obj.set_font("14px/normal \"Malgun Gothic\",\"D2Coding\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","397","530","203","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("14px/normal \"Malgun Gothic\",\"D2Coding\"");
            this.addChild(obj.name, obj);

            obj = new Button("insert","660","42","123","77",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("입력");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","dc_member","MID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00_00","value","dc_member","MNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_01","value","dc_member","PWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00_02","value","dc_member","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MainForm.xfdl", function() {

        this.Static00_onclick = function(obj,e)
        {

        };

        this.Static01_onclick = function(obj,e)
        {

        };


        this.insert_onclick = function(obj,e)
        {
        	var row = this.dc_member.addRow();
        	trace("[insert] row =" + row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.insert.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("MainForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

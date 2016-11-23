
$(document).ready(function () {
    $('div.collapse').on("show.bs.collapse || hide.bs.collapse", function () {
      let glyph = $(this).siblings("div.panel-heading").find('span.glyphicon');
      glyph.hasClass("glyphicon-menu-right") ?   glyph.toggleClass("glyphicon-menu-down") :   glyph.toggleClass("glyphicon-menu-right");
    });

    $(".boxlike").on("click", function() {
        //console.log($(this).attr("id"));
        research.menuAction($(this).attr("id"));
    });
   
    $("#resultsframe").on("load", function() {
        $("#results").toggleClass("results-visible");
    });

    $(".searchtypes").mouseover(function() {
        $("#dropper").toggleClass("draghover");
        $(this).toggleClass("draghover");
    }).mouseleave(function() {
       $("#dropper").toggleClass("draghover");
       $(this).toggleClass("draghover");
    });

    $(".searchtypes").draggable({cursor: "pointer", containment: ".col3", snap:true, snapMode:"inner", snapTolerance:5, revert:function() {
      return true;
    }});
    $("#dropper").droppable({accept: ".searchtypes", tolerance: "touch", disabled: false, drop: function(event, ui) {
          research.menuAction(ui.draggable[0].id);
          $(this).html(ui.draggable[0].innerHTML).css("border", "2px solid #000");
      }
    });  

    $(".newpost").draggable({cursor: "pointer", containment: "body", revert: true});
    $(".container").droppable({accept: ".newpost", activeClass: "dragging", tolerance: "touch", disabled: false, drop: function(event, ui) {
        research.postit(ui.offset);
      }
    });
   
//results window
    function modalClose() {
      if ($("#results").hasClass("results-visible")) {
        $("#results").removeClass("results-visible");
      }
    }
    $("#results").on("click", () => {
        modalClose();
    });
    document.addEventListener('keyup', (e) => {
        if (e.keyCode == 27) {
            $("#results").toggleClass("results-visible");
        }
         if (e.keyCode == 83) {
            $("#scratchpad").toggleClass("results-visible");
        }
      });
    
  //results window

  $("#myCarousel").carousel({interval:3000, pause:"hover", wrap: false});
  
  research.makeIntro();
  $("#content").fadeIn(2500);

});

//end of document ready

const research = {
    sbox: null,
    newdivs:[],
    temp:{},
    gbox: null,
    clear: function() {
        this.newdivs=[];
        summonobj.params.fvf = [];
        $("head>script[src*=cse]").remove();
        $("head>script[src*=libapps]").remove();
        $("head>link[href*=google]").remove();
        $("head>style[type*=text]").remove();
        $("#hanger").hide( "fold", {horizFirst: true}, 2000 );
       //$("#hanger").toggle("explode", {pieces:144}, 1000);
        if ($("#hanger").length > 0) {
            $("#hanger").empty();  
        }
        $('#myCarousel').carousel({interval:""});
        $("div.carousel-inner").empty();
    },
    postit: function(os) {
      let newdiv = $("<div></div>").addClass("postit").css("top", os.top).css("left", os.left);
      let newhd = $("<div>Sticky Note (drag me)</div>").addClass("header");
      let closer = $("<span></span>").addClass("glyphicon").addClass("glyphicon-remove").css("float", "right");
      closer.on("click", function() {
          $(this).parents("div.postit").remove();
      });
      newhd.append(closer);
      newdiv.append(newhd).append($("<TEXTAREA></TEXTAREA>").addClass("txt").attr("cols", "22").attr("rows", "10")).appendTo(".container");
      $(".container > .postit").draggable({cursor: "pointer", containment: "body", revert: false});
    },
    posties: function() {
      return '<div class="postie">+<div class="newpost"></div>';
    },
    hasGoogle: function() {
      return typeof google === "object" ? true : false;
    },
    hasBox: function(el) {
      return $("#hanger").find(el).length > 0 ? true : false;
    },
    hasGCSEtag: function() {
      return document.getElementsByTagName('gcse:search').length > 0;
    },
    makeIntro: function() {
        for ( let i=0; i < sources.intro.slides.length; i++ ) {
          this.makeSummonSlide(sources.intro.slides[i]);
       }
      $("<div></div>").addClass("previewFrame").html(sources.intro.text).appendTo($("#hanger"));
      $("#myCarousel").show();
      $(".previewPane").show( "fold", {horizFirst: true}, 4000 );
    },
    makeSlide: function(active, htmlblock) {
        let newdiv = $("<div></div>").addClass("item slide").append(htmlblock);
        if (active) {
          newdiv.addClass("active");
        }
        $("div.carousel-inner").append(newdiv);
    },
    makeSummonSlide: function(obj) {
      let summoncitehtml = '<div class="documentSummary"><div class="grid"><div class="col"><div class="grid"><div class="col"><span class="resultNumber">2</span></div><div class="col"><div class="coverImageContainer"><div class="coverImage"><img alt="Cover Image" src="http://www.syndetics.com/index.aspx?isbn=' + obj.isbn + '/sc.gif&client=unioa"></div></div></div></div></div><div class="col fullWidth"><div class="summary"><h3 class="customPrimaryLinkContainer"><a style="word-wrap: break-word;" href="http://libraryopac.union.edu/record=' + obj.recno + '">' + obj.title + '</a></h3><div class="author"><span>by</span><a>' + obj.author + '</a></div><div class="shortSummary">' + obj.year + '</div><div class="docFooter"><span>' + obj.type + ':</span><a style="word-wrap: break-word;">' + obj.callno + '</a></div></div><div class="togglePreview"><a>Preview</a></div></div></div><div class="topRight col"><img src="images/topright.png" /></div></div>';    
      this.makeSlide(obj.active, summoncitehtml);
    },
    makeSummonBox: function(obj) {
      this.sbox = this.sbox === null ? $("#summonBoxContainers540f45ce18eb440bc83586bce4b8ef1") : this.sbox;
      let s = this.sbox; 
      for (param in obj.params) {
        summonobj.params.fvf.push(summonoptions[obj.params[param]].value);
      }
      this.makePanel(obj, s);
    },
    makeSummonBubbles: function() {
      if (!this.hasBox("#summonbubbles")) {
        let ul = $("<ul></ul>").attr("id", "bubblepanel").append($("<li></li>").addClass("bubbleheader").text("Your search will be limited by:"));
        let ndiv = $("<div></div>").attr("id", "summonbubbles").append(ul).append($("<div></div>").attr("id", "bubbles"));
        //ndiv.append(ul);
        this.newdivs.push(ndiv);
      }
    },
    makeGCSE: function(o) {
      this.gbox = research.runGCSE(o.cx);
      research.makePanel(o, "<gcse:search></gcse:search>");
    },
    runGCSE: function(cx){
      return function() {
        let gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
      };
    },
    makeWizard: function() {
      var lwz_options_5ea3272fae737b2848515b22e66336d5 = {
          "title" : "standalone",
          "width" : "1024",
          "height": "800",
          "fg": "#000000",
          "bg": "#f7941d",
          "pos": "50%",
          "side": "left",
          "button": "Display Help",
          "loadjq": true
        };
       let lzw = document.createElement('script');
       let id = "5ea3272fae737b2848515b22e66336d5";
        lzw.type = 'text/javascript';
        lzw.async = true;
        lzw.src = '//union.libwizard.com/lwz_load_tutorial.php?id=' + id;
        $("#results").append(lzw);
    },
     makeTeacher: function() {
      
       let lzw = document.createElement('script');
       let id = "5ea3272fae737b2848515b22e66336d5";
        lzw.type = 'text/javascript';
        lzw.async = true;
        lzw.src = '//union.libwizard.com/lwz_load_tutorial.php?id=' + id;
        $("#results").append(lzw);
    },
    makePanel: function(src, searchwidget) {
      let head = $('<div></div>').addClass("widget-heading").attr("id", "gcse").html(src.name);
      head.on("mouseover", function() {
          if (research.hasGCSEtag() && research.gbox !== null) { 
             research.gbox();
          }
      });
      let body = $('<div></div>').addClass("widget-body").append(searchwidget);
      this.newdivs.push($("<div></div>").addClass("widget").attr("id", src.id).append(head).append(body));
    },
    makeButton: function() {
      return $("<button></button>").addClass("formSearch btn").attr("type", "submit").html('<i class="fa fa-search">Search</i>');
    },
    makeForm: function(obj) {
      let headtxt = obj.name + '<span class="comments">' + obj.text + '</span>';
      let frm = $("<form></form").attr("method", obj.method).attr("target","formFrame").attr("action", obj.url);
      
      if (obj.type === "form") {
        frm.append($("<input></input>").attr("type","text").attr("size","30").html('<i class="fa fa-search">Search</i>'));
        frm.attr("name", obj.inputname).on("focus", function() {this.value = "";});
      }
      frm.append(this.makeButton());

      if (obj.hasOwnProperty("xarg")) {
          frm.on("submit", function() {
            this.SEARCH.value = this.SEARCH.value + " AND " + obj.xarg;
          });
      }
      if (obj.hasOwnProperty("params")) {
        for (p in obj.params) {
          frm.append($("<input></input>").attr("type", "hidden").attr("name", p).attr("value", obj.params[p]));  
        }
      }
      this.makePanel(obj, frm);
  },
  toHex: function(num) {
    let ohex = {10:"A", 11:"B", 12:"C", 13:"D", 14:"E", 15:"F"};
    let p2 = num % 16;
    let p1 = num < 16 ? 0 : (num-p2)/16;
    p1 = p1 < 10 ? p1 : ohex[p1];
    p2 = p2 < 10 ? p2 : ohex[p2];
    try {
      return p1.toString() + p2.toString();
    } catch(e) {
      console.log(num)
    }
    
  },
  addSwatch: function(r,g,b) {
      let col = "#" + this.toHex(r) + this.toHex(g) + this.toHex(b);
      $("<div></div").addClass("swatch").css("background", col).appendTo("#hanger");
  },
  rgb2Hex() {
    var red=0, green=0, blue=0;
    for (red=0; red < 256; red = red + 16) {
     // this.addSwatch(red, green, blue); 
      for (green = 0; green < 256; green = green + 16) {
       // this.addSwatch(red, green, blue); 
        for (blue = 0; blue < 256; blue = blue + 16) {
          this.addSwatch(red, green, blue); 
        }
      }  
    }
  },
  newOED: function() {
    let frm = $("<form></form>").append($("<input></input>").attr("type", "text").attr("id", "oxford"));
    let btn = $("<button></button>").addClass("buttonlike").text("get definition").on("click", (e) => {
      let word = document.getElementById("oxford").value;
      function err(e) {
        console.log(e);
      }
      function handlr(response) {
        let provider = response.metadata.provider;
        let results = response.results; //results includes id,language, type and word
        console.log(results);
        $(results).each(function() {
          let lex = this.lexicalEntries; // includes entries array, language, lexicalCategory, pronunciations array, text
          $(lex).each(function() {
            //console.log(this);
            let pronounce = this.pronunciations;
            let entry = this.entries; //includes id, etymologies array, senses array, examples array
            $(entry).each(function() {
              let etym = this.etymologies;
              let sens = this.senses;
              $(etym).each(function() {

              });
              $(sens).each(function() {
                let defs = this.definitions ? this.definitions.join() : null;
                let examples = this.examples ? this.examples.join() : null;
                let domains = this.domains ? this.domains.join() : null;
                console.log(domains);
                console.log(defs);
                console.log(examples);
              });
            });
            $(pronounce).each(function() {
              console.log(this.audioFile);
              console.log(this.phoneticSpelling);
            });
          });
        });
       };
       $.ajax({
            type: "POST",
            url: "cgi-bin/oed.py",
            cache: false,
            data: JSON.stringify({"word": word.toLowerCase()}),
            contentType: 'application/json',
            processData: false,
            success: handlr,
            error: err,
        });
    });
    $("<div></div>").append(frm).append(btn).appendTo("#hanger");
  },
  menuAction: function(choice) {
      this.clear();
      let s = sources[choice];
      if (s.hasOwnProperty("slides")) { 
          for ( let i = 0; i < s.slides.length; i++ ) {
              let active = i === 0 ? true : false; 
              this.makeSlide(active, s.slides[i]);
          }
      }
      if (s.hasOwnProperty("sources")) { 
        for (i in s.sources) {
          switch(s.sources[i].type) {
              case "summon":
                this.makeSummonBox(s.sources[i]);
                break;
              case "gcse":
                this.makeGCSE(s.sources[i]);
                break;
              case "d3js":
                research.makeSummonBubbles();
                break;
              default:
                this.makeForm(s.sources[i]);
                break;
          }
        }
      } 
                  
      $('#myCarousel').carousel('pause');

        for ( let i = 0; i < research.newdivs.length; i++ ) {
          research.newdivs[i].appendTo("#hanger");
        }
        if (research.hasBox("#summonBoxContainers540f45ce18eb440bc83586bce4b8ef1")) {
          $("input.summon-search-submit").addClass('formSearch');
          $("#summonSearchTerms540f45ce18eb440bc83586bce4b8ef1").css("width", "254px");
          $("#summonSubmissionForms540f45ce18eb440bc83586bce4b8ef1").attr("target", "formFrame");
          $("#summonBoxContainers540f45ce18eb440bc83586bce4b8ef1").show();
        }
        research.hasBox("#summonbubbles") ? bb() : null;
        $("#hanger").show( "fold", {horizFirst: false}, 1800 );
      
      window.setTimeout(function() { 
          if (research.hasGCSEtag() && research.gbox !== null) {
              research.gbox();
          }
        }, 1500);

    }
};
 

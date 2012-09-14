var ResponsiveGrids = (function(){

        var css = document.createElement("link")
        css.href = "public/js/grids/grid.css";
        css.rel = "stylesheet";
        css.type = "text/css";
        document.body.appendChild(css);
        

        var grids = document.createElement("div");
        grids.id = "grid";

        var gv = document.createElement("div");
        gv.className = "vert-container";

        for (var i = 0; i < 50; i++) {
                var gvi = document.createElement("div");
                gvi.className = "vert cols" + parseInt(i+1);
                if(i==0) gvi.className += " first-line";

                gv.appendChild(gvi);
        }
        grids.appendChild(gv);

        var gh = document.createElement("div");
        gh.className = "horiz-container";

        for (var i = 0; i < 500; i++) {
                var ghi = document.createElement("div");
                ghi.className = "horiz"
                if(i==0) ghi.className += " first-line";
                if(i%2) ghi.className += " odd";

                gh.appendChild(ghi);
        }
        grids.appendChild(gh);

        document.body.insertBefore(grids, document.body.childNodes[0]);
})()
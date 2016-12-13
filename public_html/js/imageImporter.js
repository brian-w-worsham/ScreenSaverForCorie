/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function ImageImporter(url, id)
{
    this.url = url;
    this.id = id;
    this.html = "";
}

ImageImporter.prototype.getData = function(){
    var that = this;
    $.getJSON(that.url, function (data)
        {
            $.each(data.items, function (i, item)
            {
                that.html += "<h2>" + item.title + "</h2>";
                that.html += "<img src=" + item.media.m + ">";
                that.html += "<p></p>";
            });
        });
};      

ImageImporter.prototype.print = function()     
{
    $(this.id).html(this.html);
};
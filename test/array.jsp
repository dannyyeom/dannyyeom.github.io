<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%@ page import="java.util.ArrayList" language="java" %>

<%
ArrayList<String> arr = new ArrayList<>();
    arr.add("홍길동");
    arr.add("김철수");
    arr.add("김영희");
%>

<html>
<body>
    <%
    for(int i=0; i<arr.size(); i++){
        out.print("배열 요소 : "+arr.get(i)+"<br/>");
    }
    %>
</body>
</html>
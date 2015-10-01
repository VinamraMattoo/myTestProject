package com.portea.test.server;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(description = "TestSmsTypeGenerator", urlPatterns = { "/TestSmsTypeGenerator" })
public class TestSmsTypeGenerator extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
       
    public TestSmsTypeGenerator() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		StringBuilder builder = new StringBuilder();
		builder.append(
				"[{\"gid\":g1, \"Gname\":\"group1\"}, {\"gid\":g2, \"Gname\":\"group2\"}, {\"gid\":g3, \"Gname\":\"group3\"}]"
		);
		response.getWriter().append(builder.toString());
	}

}

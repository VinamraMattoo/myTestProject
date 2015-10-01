package com.portea.test.server;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class myFirstServlet
 */
@WebServlet("/myFirstServlet")
public class myFirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public myFirstServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		StringBuilder builder = new StringBuilder();
	

		builder.append(" [{" + "\"id\": 1," + " \"paramid\": 1," + " \"tid\":1," + "\"name\": \"NEW_SMS_LOAD_WINDOW\","
				+ " \"description\": \"parameter value object\"," + " \"dataType\": \"NUMBER\"," + " \"active\": false,"
				+ "\"value\": 10 }," + " { \"id\": 2," + " \"paramid\": 2," + "\"tid\":2,"
				+ " \"name\": \"WAIT_TIME_FOR_CORRELATION_ID\"," + "\"description\": \"description\","
				+ " \"dataType\": \"NUMBER\"," + " \"active\": true," + " \"value\" : 30   }");
		
		builder.append(", { \"id\": 3," + " \"paramid\": 3," + "\"tid\":3,"
				+ " \"name\": \"WAIT_TIME_FOR_CORRELATION_ID\"," + "\"description\": \"description\","
				+ " \"dataType\": \"NUMBER\"," + " \"active\": true," + " \"value\" : 30   }");
		
		builder.append(", { \"id\": 4," + " \"paramid\": 4," + "\"tid\":4,"
				+ " \"name\": \"WAIT_TIME_FOR_CORRELATION_ID\"," + "\"description\": \"description\","
				+ " \"dataType\": \"NUMBER\"," + " \"active\": true," + " \"value\" : 50   }");
		builder.append(", { \"id\": 5," + " \"paramid\": 5," + "\"tid\":5,"
				+ " \"name\": \"WAIT_TIME_FOR_CORRELATION_ID\"," + "\"description\": \"description\","
				+ " \"dataType\": \"NUMBER\"," + " \"active\": true," + " \"value\" : 30   }");
		builder.append(", { \"id\": 6," + " \"paramid\": 6," + "\"tid\":6,"
				+ " \"name\": \"WAIT_TIME_FOR_CORRELATION_ID\"," + "\"description\": \"description\","
				+ " \"dataType\": \"NUMBER\"," + " \"active\": true," + " \"value\" : 30   }");
		builder.append(", { \"id\": 7," + " \"paramid\": 7," + "\"tid\":7,"
				+ " \"name\": \"WAIT_TIME_FOR_CORRELATION_ID\"," + "\"description\": \"description\","
				+ " \"dataType\": \"NUMBER\"," + " \"active\": true," + " \"value\" : 30   }");
		builder.append(", { \"id\": 8," + " \"paramid\": 8," + "\"tid\":8,"
				+ " \"name\": \"WAIT_TIME_FOR_CORRELATION_ID\"," + "\"description\": \"description\","
				+ " \"dataType\": \"NUMBER\"," + " \"active\": true," + " \"value\" : 30   }]");
	
		response.getWriter().append(builder.toString());

	}

}

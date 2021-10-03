package uk.nhs.hee.web.pushengage.serviceworker;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.OutputStream;

@WebServlet(name = "ServiceWorkerServlet", value = "/ServiceWorkerServlet")
public class ServiceWorkerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO: channel info based response
        response.setContentType("text/javascript");
        response.getWriter().write("importScripts(\"https://library-push.pushengage.com/service-worker.js?ver=2.3.0\"); ");
    }
}

#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 for(int i = 1; i < 10; 1)
  {
   for(int _injected_loop_counter = 0; _injected_loop_counter < 1; _injected_loop_counter ++)
    {
     if(gl_FragCoord.y < 1.0)
      {
       return;
      }
    }
  }
 _GLF_color = vec4(1.0);
}

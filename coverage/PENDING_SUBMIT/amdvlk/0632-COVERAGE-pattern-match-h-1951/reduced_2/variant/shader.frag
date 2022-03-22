#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 float yCoord = 1.0;
 yCoord = gl_FragCoord.y;
 for(int k = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); k ++)
  {
   _GLF_global_loop_count ++;
   if(uint((~ k)) < uint((int(yCoord) * 256)))
    {
     continue;
    }
   _GLF_color = vec4(1.0);
   break;
  }
}

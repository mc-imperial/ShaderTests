#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

float s_g = 1.0;

float b_b = 1.0;

vec3 drawShape()
{
 if(gl_FragCoord.y >= 0.0)
  {
   if(gl_FragCoord.y >= 0.0)
    {
     for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
      {
       _GLF_global_loop_count ++;
      }
     s_g = float(256);
    }
   else
    {
    }
   vec3 temp = vec3(1.0);
   temp = (float(256) - s_g) + b_b * vec3(1.0);
   b_b = temp.z;
   b_b = clamp(1.0, 1.0, b_b);
  }
 else
  {
  }
 return vec3(1.0);
}
void main()
{
 drawShape();
 drawShape();
}

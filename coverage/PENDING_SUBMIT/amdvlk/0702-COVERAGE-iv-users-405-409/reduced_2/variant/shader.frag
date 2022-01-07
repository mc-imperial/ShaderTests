#version 320 es

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = vec4(1.0);
 float sums[9];
 int sum_index;
 sum_index = 1;
 for(int rows = 1; rows <= 4; rows ++)
  {
   for(int c = 0; c < 1; c ++)
    {
     for(int r = 0; r < rows; r ++)
      {
       sums[sum_index] += mat2(1.0)[c][r];
       vec4 _GLF_outVarBackup_GLF_color;
       for(int _injected_loop_counter = 0; _injected_loop_counter < 1; _injected_loop_counter ++)
        {
         _GLF_outVarBackup_GLF_color = _GLF_color;
        }
       _GLF_color = _GLF_outVarBackup_GLF_color;
       if(gl_FragCoord.y < 1.0)
        {
         return;
        }
       sums[sum_index] += mat2x3(1.0)[1][r];
       sums[sum_index] += mat3(1.0)[c][r];
       sums[sum_index] += mat4(1.0)[1][r];
       _GLF_color = vec4(1.0, 1.0, 1.0, 28.24);
      }
    }
  }
 _GLF_color = vec4(vec3(sums[1]), 1.0);
}

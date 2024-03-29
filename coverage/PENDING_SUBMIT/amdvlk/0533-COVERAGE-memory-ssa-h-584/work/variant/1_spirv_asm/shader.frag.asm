; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 191
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %103 %171
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %15 "arr"
               OpName %18 "buf0"
               OpMemberName %18 0 "_GLF_uniform_float_values"
               OpName %20 ""
               OpName %88 "i"
               OpName %103 "gl_FragCoord"
               OpName %119 "buf_push"
               OpMemberName %119 0 "resolution"
               OpName %121 ""
               OpName %128 "buf1"
               OpMemberName %128 0 "_GLF_uniform_int_values"
               OpName %130 ""
               OpName %171 "_GLF_color"
               OpDecorate %17 ArrayStride 16
               OpMemberDecorate %18 0 Offset 0
               OpDecorate %18 Block
               OpDecorate %20 DescriptorSet 0
               OpDecorate %20 Binding 0
               OpDecorate %103 BuiltIn FragCoord
               OpMemberDecorate %119 0 Offset 0
               OpDecorate %119 Block
               OpDecorate %127 ArrayStride 16
               OpMemberDecorate %128 0 Offset 0
               OpDecorate %128 Block
               OpDecorate %130 DescriptorSet 0
               OpDecorate %130 Binding 1
               OpDecorate %171 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 32
         %13 = OpTypeArray %10 %12
         %14 = OpTypePointer Function %13
         %16 = OpConstant %11 2
         %17 = OpTypeArray %10 %16
         %18 = OpTypeStruct %17
         %19 = OpTypePointer Uniform %18
         %20 = OpVariable %19 Uniform
         %21 = OpTypePointer Uniform %10
         %87 = OpTypePointer Function %6
         %89 = OpConstant %6 1
         %96 = OpConstant %6 50
         %97 = OpTypeBool
        %101 = OpTypeVector %10 4
        %102 = OpTypePointer Input %101
        %103 = OpVariable %102 Input
        %104 = OpConstant %11 1
        %105 = OpTypePointer Input %10
        %113 = OpConstantTrue %97
        %114 = OpTypeVector %10 2
        %115 = OpTypePointer Function %114
        %119 = OpTypeStruct %114
        %120 = OpTypePointer PushConstant %119
        %121 = OpVariable %120 PushConstant
        %122 = OpTypePointer PushConstant %114
        %126 = OpConstant %11 3
        %127 = OpTypeArray %6 %126
        %128 = OpTypeStruct %127
        %129 = OpTypePointer Uniform %128
        %130 = OpVariable %129 Uniform
        %131 = OpTypePointer Uniform %6
        %136 = OpConstant %11 0
        %137 = OpTypePointer Function %10
        %161 = OpTypePointer PushConstant %10
        %170 = OpTypePointer Output %101
        %171 = OpVariable %170 Output
        %175 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %15 = OpVariable %14 Function
         %88 = OpVariable %87 Function
        %116 = OpVariable %115 Function
               OpStore %8 %9
         %22 = OpAccessChain %21 %20 %9 %9
         %23 = OpLoad %10 %22
         %24 = OpAccessChain %21 %20 %9 %9
         %25 = OpLoad %10 %24
         %26 = OpAccessChain %21 %20 %9 %9
         %27 = OpLoad %10 %26
         %28 = OpAccessChain %21 %20 %9 %9
         %29 = OpLoad %10 %28
         %30 = OpAccessChain %21 %20 %9 %9
         %31 = OpLoad %10 %30
         %32 = OpAccessChain %21 %20 %9 %9
         %33 = OpLoad %10 %32
         %34 = OpAccessChain %21 %20 %9 %9
         %35 = OpLoad %10 %34
         %36 = OpAccessChain %21 %20 %9 %9
         %37 = OpLoad %10 %36
         %38 = OpAccessChain %21 %20 %9 %9
         %39 = OpLoad %10 %38
         %40 = OpAccessChain %21 %20 %9 %9
         %41 = OpLoad %10 %40
         %42 = OpAccessChain %21 %20 %9 %9
         %43 = OpLoad %10 %42
         %44 = OpAccessChain %21 %20 %9 %9
         %45 = OpLoad %10 %44
         %46 = OpAccessChain %21 %20 %9 %9
         %47 = OpLoad %10 %46
         %48 = OpAccessChain %21 %20 %9 %9
         %49 = OpLoad %10 %48
         %50 = OpAccessChain %21 %20 %9 %9
         %51 = OpLoad %10 %50
         %52 = OpAccessChain %21 %20 %9 %9
         %53 = OpLoad %10 %52
         %54 = OpAccessChain %21 %20 %9 %9
         %55 = OpLoad %10 %54
         %56 = OpAccessChain %21 %20 %9 %9
         %57 = OpLoad %10 %56
         %58 = OpAccessChain %21 %20 %9 %9
         %59 = OpLoad %10 %58
         %60 = OpAccessChain %21 %20 %9 %9
         %61 = OpLoad %10 %60
         %62 = OpAccessChain %21 %20 %9 %9
         %63 = OpLoad %10 %62
         %64 = OpAccessChain %21 %20 %9 %9
         %65 = OpLoad %10 %64
         %66 = OpAccessChain %21 %20 %9 %9
         %67 = OpLoad %10 %66
         %68 = OpAccessChain %21 %20 %9 %9
         %69 = OpLoad %10 %68
         %70 = OpAccessChain %21 %20 %9 %9
         %71 = OpLoad %10 %70
         %72 = OpAccessChain %21 %20 %9 %9
         %73 = OpLoad %10 %72
         %74 = OpAccessChain %21 %20 %9 %9
         %75 = OpLoad %10 %74
         %76 = OpAccessChain %21 %20 %9 %9
         %77 = OpLoad %10 %76
         %78 = OpAccessChain %21 %20 %9 %9
         %79 = OpLoad %10 %78
         %80 = OpAccessChain %21 %20 %9 %9
         %81 = OpLoad %10 %80
         %82 = OpAccessChain %21 %20 %9 %9
         %83 = OpLoad %10 %82
         %84 = OpAccessChain %21 %20 %9 %9
         %85 = OpLoad %10 %84
         %86 = OpCompositeConstruct %13 %23 %25 %27 %29 %31 %33 %35 %37 %39 %41 %43 %45 %47 %49 %51 %53 %55 %57 %59 %61 %63 %65 %67 %69 %71 %73 %75 %77 %79 %81 %83 %85
               OpStore %15 %86
               OpStore %88 %89
               OpBranch %90
         %90 = OpLabel
               OpLoopMerge %92 %93 None
               OpBranch %94
         %94 = OpLabel
         %95 = OpLoad %6 %8
         %98 = OpSLessThan %97 %95 %96
               OpBranchConditional %98 %91 %92
         %91 = OpLabel
         %99 = OpLoad %6 %8
        %100 = OpIAdd %6 %99 %89
               OpStore %8 %100
        %106 = OpAccessChain %105 %103 %104
        %107 = OpLoad %10 %106
        %108 = OpAccessChain %21 %20 %9 %89
        %109 = OpLoad %10 %108
        %110 = OpFOrdLessThan %97 %107 %109
               OpSelectionMerge %112 None
               OpBranchConditional %110 %111 %112
        %111 = OpLabel
               OpSelectionMerge %118 None
               OpBranchConditional %113 %117 %125
        %117 = OpLabel
        %123 = OpAccessChain %122 %121 %9
        %124 = OpLoad %114 %123
               OpStore %116 %124
               OpBranch %118
        %125 = OpLabel
        %132 = OpAccessChain %131 %130 %9 %9
        %133 = OpLoad %6 %132
        %134 = OpConvertSToF %10 %133
        %135 = OpCompositeConstruct %114 %134 %134
               OpStore %116 %135
               OpBranch %118
        %118 = OpLabel
        %138 = OpAccessChain %137 %116 %136
        %139 = OpLoad %10 %138
        %140 = OpAccessChain %21 %20 %9 %9
        %141 = OpLoad %10 %140
        %142 = OpFOrdGreaterThanEqual %97 %139 %141
               OpBranch %112
        %112 = OpLabel
        %143 = OpPhi %97 %110 %91 %142 %118
               OpSelectionMerge %145 None
               OpBranchConditional %143 %144 %145
        %144 = OpLabel
               OpBranch %92
        %145 = OpLabel
        %147 = OpLoad %6 %88
        %148 = OpIEqual %97 %147 %89
               OpSelectionMerge %150 None
               OpBranchConditional %148 %149 %150
        %149 = OpLabel
        %151 = OpLoad %6 %88
        %152 = OpIAdd %6 %151 %89
               OpStore %88 %152
        %153 = OpAccessChain %21 %20 %9 %89
        %154 = OpLoad %10 %153
        %155 = OpAccessChain %137 %15 %151
               OpStore %155 %154
               OpBranch %150
        %150 = OpLabel
               OpBranch %93
         %93 = OpLabel
               OpBranch %90
         %92 = OpLabel
        %156 = OpAccessChain %131 %130 %9 %89
        %157 = OpLoad %6 %156
        %158 = OpExtInst %6 %1 FindSMsb %157
        %159 = OpAccessChain %137 %15 %158
        %160 = OpLoad %10 %159
        %162 = OpAccessChain %161 %121 %9 %104
        %163 = OpLoad %10 %162
        %164 = OpFMul %10 %160 %163
        %165 = OpAccessChain %21 %20 %9 %89
        %166 = OpLoad %10 %165
        %167 = OpFOrdEqual %97 %164 %166
               OpSelectionMerge %169 None
               OpBranchConditional %167 %168 %186
        %168 = OpLabel
        %172 = OpAccessChain %131 %130 %9 %9
        %173 = OpLoad %6 %172
        %174 = OpConvertSToF %10 %173
        %176 = OpAccessChain %131 %130 %9 %175
        %177 = OpLoad %6 %176
        %178 = OpConvertSToF %10 %177
        %179 = OpAccessChain %131 %130 %9 %175
        %180 = OpLoad %6 %179
        %181 = OpConvertSToF %10 %180
        %182 = OpAccessChain %131 %130 %9 %9
        %183 = OpLoad %6 %182
        %184 = OpConvertSToF %10 %183
        %185 = OpCompositeConstruct %101 %174 %178 %181 %184
               OpStore %171 %185
               OpBranch %169
        %186 = OpLabel
        %187 = OpAccessChain %131 %130 %9 %175
        %188 = OpLoad %6 %187
        %189 = OpConvertSToF %10 %188
        %190 = OpCompositeConstruct %101 %189 %189 %189 %189
               OpStore %171 %190
               OpBranch %169
        %169 = OpLabel
               OpReturn
               OpFunctionEnd

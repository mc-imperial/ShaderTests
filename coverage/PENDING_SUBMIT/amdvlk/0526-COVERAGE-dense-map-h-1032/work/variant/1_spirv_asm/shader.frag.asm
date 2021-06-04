; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 195
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %154
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "data"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %51 "i"
               OpName %61 "j"
               OpName %76 "f0"
               OpName %80 "f1"
               OpName %83 "buf1"
               OpMemberName %83 0 "_GLF_uniform_int_values"
               OpName %85 ""
               OpName %92 "b"
               OpName %94 "buf2"
               OpMemberName %94 0 "injectionSwitch"
               OpName %96 ""
               OpName %130 "ref"
               OpName %154 "_GLF_color"
               OpName %168 "i"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %82 ArrayStride 16
               OpMemberDecorate %83 0 Offset 0
               OpDecorate %83 Block
               OpDecorate %85 DescriptorSet 0
               OpDecorate %85 Binding 1
               OpMemberDecorate %94 0 Offset 0
               OpDecorate %94 Block
               OpDecorate %96 DescriptorSet 0
               OpDecorate %96 Binding 2
               OpDecorate %154 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 11
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %17 1
         %25 = OpConstant %17 2
         %28 = OpConstant %17 3
         %31 = OpConstant %17 4
         %34 = OpConstant %17 5
         %37 = OpConstant %17 6
         %40 = OpConstant %17 7
         %43 = OpConstant %17 8
         %46 = OpConstant %17 9
         %50 = OpTypePointer Function %17
         %58 = OpConstant %17 10
         %59 = OpTypeBool
         %75 = OpTypePointer Function %6
         %81 = OpConstant %7 3
         %82 = OpTypeArray %17 %81
         %83 = OpTypeStruct %82
         %84 = OpTypePointer Uniform %83
         %85 = OpVariable %84 Uniform
         %86 = OpTypePointer Uniform %17
         %91 = OpTypePointer Function %59
         %93 = OpTypeVector %6 2
         %94 = OpTypeStruct %93
         %95 = OpTypePointer Uniform %94
         %96 = OpVariable %95 Uniform
         %97 = OpConstant %7 0
        %108 = OpConstant %7 1
        %152 = OpTypeVector %6 4
        %153 = OpTypePointer Output %152
        %154 = OpVariable %153 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %51 = OpVariable %50 Function
         %61 = OpVariable %50 Function
         %76 = OpVariable %75 Function
         %80 = OpVariable %75 Function
         %92 = OpVariable %91 Function
        %103 = OpVariable %91 Function
        %130 = OpVariable %10 Function
        %168 = OpVariable %50 Function
         %20 = OpAccessChain %19 %16 %18 %18
         %21 = OpLoad %6 %20
         %23 = OpAccessChain %19 %16 %18 %22
         %24 = OpLoad %6 %23
         %26 = OpAccessChain %19 %16 %18 %25
         %27 = OpLoad %6 %26
         %29 = OpAccessChain %19 %16 %18 %28
         %30 = OpLoad %6 %29
         %32 = OpAccessChain %19 %16 %18 %31
         %33 = OpLoad %6 %32
         %35 = OpAccessChain %19 %16 %18 %34
         %36 = OpLoad %6 %35
         %38 = OpAccessChain %19 %16 %18 %37
         %39 = OpLoad %6 %38
         %41 = OpAccessChain %19 %16 %18 %40
         %42 = OpLoad %6 %41
         %44 = OpAccessChain %19 %16 %18 %43
         %45 = OpLoad %6 %44
         %47 = OpAccessChain %19 %16 %18 %46
         %48 = OpLoad %6 %47
         %49 = OpCompositeConstruct %9 %21 %24 %27 %30 %33 %36 %39 %42 %45 %48
               OpStore %11 %49
               OpStore %51 %18
               OpBranch %52
         %52 = OpLabel
               OpLoopMerge %54 %55 None
               OpBranch %56
         %56 = OpLabel
         %57 = OpLoad %17 %51
         %60 = OpSLessThan %59 %57 %58
               OpBranchConditional %60 %53 %54
         %53 = OpLabel
               OpStore %61 %18
               OpBranch %62
         %62 = OpLabel
               OpLoopMerge %64 %65 None
               OpBranch %66
         %66 = OpLabel
         %67 = OpLoad %17 %61
         %68 = OpSLessThan %59 %67 %58
               OpBranchConditional %68 %63 %64
         %63 = OpLabel
         %69 = OpLoad %17 %61
         %70 = OpLoad %17 %51
         %71 = OpSLessThan %59 %69 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %73
         %72 = OpLabel
               OpBranch %65
         %73 = OpLabel
         %77 = OpLoad %17 %51
         %78 = OpAccessChain %75 %11 %77
         %79 = OpLoad %6 %78
               OpStore %76 %79
         %87 = OpAccessChain %86 %85 %18 %18
         %88 = OpLoad %17 %87
         %89 = OpAccessChain %75 %11 %88
         %90 = OpLoad %6 %89
               OpStore %80 %90
         %98 = OpAccessChain %19 %96 %18 %97
         %99 = OpLoad %6 %98
        %100 = OpAccessChain %19 %16 %18 %58
        %101 = OpLoad %6 %100
        %102 = OpFOrdGreaterThan %59 %99 %101
               OpSelectionMerge %105 None
               OpBranchConditional %102 %104 %112
        %104 = OpLabel
        %106 = OpAccessChain %19 %96 %18 %97
        %107 = OpLoad %6 %106
        %109 = OpAccessChain %19 %96 %18 %108
        %110 = OpLoad %6 %109
        %111 = OpFOrdLessThan %59 %107 %110
               OpStore %103 %111
               OpBranch %105
        %112 = OpLabel
        %113 = OpLoad %6 %76
        %114 = OpLoad %6 %80
        %115 = OpFOrdGreaterThan %59 %113 %114
               OpStore %103 %115
               OpBranch %105
        %105 = OpLabel
        %116 = OpLoad %59 %103
               OpStore %92 %116
        %117 = OpLoad %59 %92
               OpSelectionMerge %119 None
               OpBranchConditional %117 %118 %119
        %118 = OpLabel
        %120 = OpLoad %17 %51
        %121 = OpAccessChain %86 %85 %18 %18
        %122 = OpLoad %17 %121
        %123 = OpAccessChain %75 %11 %122
        %124 = OpLoad %6 %123
        %125 = OpAccessChain %75 %11 %120
               OpStore %125 %124
               OpBranch %119
        %119 = OpLabel
               OpBranch %65
         %65 = OpLabel
        %126 = OpLoad %17 %61
        %127 = OpIAdd %17 %126 %22
               OpStore %61 %127
               OpBranch %62
         %64 = OpLabel
               OpBranch %55
         %55 = OpLabel
        %128 = OpLoad %17 %51
        %129 = OpIAdd %17 %128 %22
               OpStore %51 %129
               OpBranch %52
         %54 = OpLabel
        %131 = OpAccessChain %19 %16 %18 %18
        %132 = OpLoad %6 %131
        %133 = OpAccessChain %19 %16 %18 %22
        %134 = OpLoad %6 %133
        %135 = OpAccessChain %19 %16 %18 %22
        %136 = OpLoad %6 %135
        %137 = OpAccessChain %19 %16 %18 %22
        %138 = OpLoad %6 %137
        %139 = OpAccessChain %19 %16 %18 %22
        %140 = OpLoad %6 %139
        %141 = OpAccessChain %19 %16 %18 %22
        %142 = OpLoad %6 %141
        %143 = OpAccessChain %19 %16 %18 %22
        %144 = OpLoad %6 %143
        %145 = OpAccessChain %19 %16 %18 %22
        %146 = OpLoad %6 %145
        %147 = OpAccessChain %19 %16 %18 %22
        %148 = OpLoad %6 %147
        %149 = OpAccessChain %19 %16 %18 %22
        %150 = OpLoad %6 %149
        %151 = OpCompositeConstruct %9 %132 %134 %136 %138 %140 %142 %144 %146 %148 %150
               OpStore %130 %151
        %155 = OpAccessChain %86 %85 %18 %18
        %156 = OpLoad %17 %155
        %157 = OpConvertSToF %6 %156
        %158 = OpAccessChain %86 %85 %18 %22
        %159 = OpLoad %17 %158
        %160 = OpConvertSToF %6 %159
        %161 = OpAccessChain %86 %85 %18 %22
        %162 = OpLoad %17 %161
        %163 = OpConvertSToF %6 %162
        %164 = OpAccessChain %86 %85 %18 %18
        %165 = OpLoad %17 %164
        %166 = OpConvertSToF %6 %165
        %167 = OpCompositeConstruct %152 %157 %160 %163 %166
               OpStore %154 %167
        %169 = OpAccessChain %86 %85 %18 %22
        %170 = OpLoad %17 %169
               OpStore %168 %170
               OpBranch %171
        %171 = OpLabel
               OpLoopMerge %173 %174 None
               OpBranch %175
        %175 = OpLabel
        %176 = OpLoad %17 %168
        %177 = OpAccessChain %86 %85 %18 %25
        %178 = OpLoad %17 %177
        %179 = OpSLessThan %59 %176 %178
               OpBranchConditional %179 %172 %173
        %172 = OpLabel
        %180 = OpLoad %17 %168
        %181 = OpAccessChain %75 %11 %180
        %182 = OpLoad %6 %181
        %183 = OpLoad %17 %168
        %184 = OpAccessChain %75 %130 %183
        %185 = OpLoad %6 %184
        %186 = OpFUnordNotEqual %59 %182 %185
               OpSelectionMerge %188 None
               OpBranchConditional %186 %187 %188
        %187 = OpLabel
        %189 = OpAccessChain %86 %85 %18 %22
        %190 = OpLoad %17 %189
        %191 = OpConvertSToF %6 %190
        %192 = OpCompositeConstruct %152 %191 %191 %191 %191
               OpStore %154 %192
               OpBranch %188
        %188 = OpLabel
               OpBranch %174
        %174 = OpLabel
        %193 = OpLoad %17 %168
        %194 = OpIAdd %17 %193 %22
               OpStore %168 %194
               OpBranch %171
        %173 = OpLabel
               OpReturn
               OpFunctionEnd

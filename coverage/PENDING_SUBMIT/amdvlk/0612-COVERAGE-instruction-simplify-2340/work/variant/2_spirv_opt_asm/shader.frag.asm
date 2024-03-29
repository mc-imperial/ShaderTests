; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 133
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %59 %114
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %43 "buf2"
               OpMemberName %43 0 "injectionSwitch"
               OpName %45 ""
               OpName %59 "gl_FragCoord"
               OpName %78 "buf0"
               OpMemberName %78 0 "_GLF_uniform_int_values"
               OpName %80 ""
               OpName %114 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 2
               OpDecorate %59 BuiltIn FragCoord
               OpDecorate %77 ArrayStride 16
               OpMemberDecorate %78 0 Offset 0
               OpDecorate %78 Block
               OpDecorate %80 DescriptorSet 0
               OpDecorate %80 Binding 0
               OpDecorate %114 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 2
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpConstant %17 1
         %20 = OpTypePointer Uniform %6
         %42 = OpTypeVector %6 2
         %43 = OpTypeStruct %42
         %44 = OpTypePointer Uniform %43
         %45 = OpVariable %44 Uniform
         %46 = OpConstant %7 0
         %49 = OpConstant %7 1
         %52 = OpTypeBool
         %57 = OpTypeVector %6 4
         %58 = OpTypePointer Input %57
         %59 = OpVariable %58 Input
         %60 = OpTypePointer Input %6
         %63 = OpConstant %6 0
         %76 = OpConstant %7 4
         %77 = OpTypeArray %17 %76
         %78 = OpTypeStruct %77
         %79 = OpTypePointer Uniform %78
         %80 = OpVariable %79 Uniform
         %81 = OpConstant %17 3
         %82 = OpTypePointer Uniform %17
         %91 = OpTypePointer Function %6
        %102 = OpConstant %17 2
        %113 = OpTypePointer Output %57
        %114 = OpVariable %113 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %21 = OpAccessChain %20 %16 %18 %19
         %22 = OpLoad %6 %21
         %41 = OpCompositeConstruct %9 %22 %22 %22 %22 %22 %22 %22 %22 %22 %22
               OpStore %11 %41
         %47 = OpAccessChain %20 %45 %18 %46
         %48 = OpLoad %6 %47
         %50 = OpAccessChain %20 %45 %18 %49
         %51 = OpLoad %6 %50
         %53 = OpFOrdGreaterThan %52 %48 %51
               OpSelectionMerge %55 None
               OpBranchConditional %53 %54 %56
         %54 = OpLabel
               OpBranch %55
         %56 = OpLabel
         %61 = OpAccessChain %60 %59 %46
         %62 = OpLoad %6 %61
         %64 = OpFOrdLessThan %52 %62 %63
               OpSelectionMerge %66 None
               OpBranchConditional %64 %65 %67
         %65 = OpLabel
               OpBranch %66
         %67 = OpLabel
               OpSelectionMerge %74 None
               OpBranchConditional %53 %73 %75
         %73 = OpLabel
               OpBranch %74
         %75 = OpLabel
         %83 = OpAccessChain %82 %80 %18 %81
         %84 = OpLoad %17 %83
         %85 = OpAccessChain %82 %80 %18 %19
         %86 = OpLoad %17 %85
         %87 = OpExtInst %17 %1 FindILsb %86
         %88 = OpSDiv %17 %84 %87
         %89 = OpAccessChain %20 %16 %18 %18
         %90 = OpLoad %6 %89
         %92 = OpAccessChain %91 %11 %88
               OpStore %92 %90
               OpBranch %74
         %74 = OpLabel
               OpBranch %66
         %66 = OpLabel
               OpBranch %55
         %55 = OpLabel
         %93 = OpAccessChain %82 %80 %18 %18
         %94 = OpLoad %17 %93
         %95 = OpAccessChain %91 %11 %94
         %96 = OpLoad %6 %95
         %99 = OpFOrdEqual %52 %96 %22
               OpSelectionMerge %101 None
               OpBranchConditional %99 %100 %101
        %100 = OpLabel
        %103 = OpAccessChain %82 %80 %18 %102
        %104 = OpLoad %17 %103
        %105 = OpAccessChain %91 %11 %104
        %106 = OpLoad %6 %105
        %107 = OpAccessChain %20 %16 %18 %18
        %108 = OpLoad %6 %107
        %109 = OpFOrdEqual %52 %106 %108
               OpBranch %101
        %101 = OpLabel
        %110 = OpPhi %52 %99 %55 %109 %100
               OpSelectionMerge %112 None
               OpBranchConditional %110 %111 %128
        %111 = OpLabel
        %115 = OpAccessChain %82 %80 %18 %102
        %116 = OpLoad %17 %115
        %117 = OpConvertSToF %6 %116
        %120 = OpConvertSToF %6 %94
        %127 = OpCompositeConstruct %57 %117 %120 %120 %117
               OpStore %114 %127
               OpBranch %112
        %128 = OpLabel
        %131 = OpConvertSToF %6 %94
        %132 = OpCompositeConstruct %57 %131 %131 %131 %131
               OpStore %114 %132
               OpBranch %112
        %112 = OpLabel
               OpReturn
               OpFunctionEnd

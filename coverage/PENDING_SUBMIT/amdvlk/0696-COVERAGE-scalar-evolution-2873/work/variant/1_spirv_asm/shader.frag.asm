; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 127
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %108
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %25 "a"
               OpName %28 "m"
               OpName %38 "i"
               OpName %59 "j"
               OpName %71 "buf0"
               OpMemberName %71 0 "_GLF_uniform_float_values"
               OpName %73 ""
               OpName %108 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %70 ArrayStride 16
               OpMemberDecorate %71 0 Offset 0
               OpDecorate %71 Block
               OpDecorate %73 DescriptorSet 0
               OpDecorate %73 Binding 0
               OpDecorate %108 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 3
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpConstant %10 2
         %19 = OpTypePointer Uniform %10
         %24 = OpTypePointer Function %10
         %29 = OpConstant %10 1
         %36 = OpTypeBool
         %45 = OpConstant %10 10
         %60 = OpConstant %10 3
         %69 = OpConstant %11 1
         %70 = OpTypeArray %6 %69
         %71 = OpTypeStruct %70
         %72 = OpTypePointer Uniform %71
         %73 = OpVariable %72 Uniform
         %74 = OpTypePointer Uniform %6
         %77 = OpTypePointer Function %6
        %101 = OpTypeVector %36 4
        %107 = OpTypePointer Output %7
        %108 = OpVariable %107 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %25 = OpVariable %24 Function
         %28 = OpVariable %24 Function
         %38 = OpVariable %24 Function
         %59 = OpVariable %24 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %10 %20
         %22 = OpConvertSToF %6 %21
         %23 = OpCompositeConstruct %7 %22 %22 %22 %22
               OpStore %9 %23
         %26 = OpAccessChain %19 %16 %17 %17
         %27 = OpLoad %10 %26
               OpStore %25 %27
               OpStore %28 %29
               OpBranch %30
         %30 = OpLabel
               OpLoopMerge %32 %33 None
               OpBranch %34
         %34 = OpLabel
         %35 = OpLoad %10 %28
         %37 = OpSLessThanEqual %36 %35 %29
               OpBranchConditional %37 %31 %32
         %31 = OpLabel
               OpStore %38 %29
               OpBranch %39
         %39 = OpLabel
               OpLoopMerge %41 %42 None
               OpBranch %43
         %43 = OpLabel
         %44 = OpLoad %10 %38
         %46 = OpSLessThan %36 %44 %45
               OpBranchConditional %46 %40 %41
         %40 = OpLabel
         %47 = OpLoad %10 %25
         %48 = OpIAdd %10 %47 %29
               OpStore %25 %48
               OpBranch %49
         %49 = OpLabel
               OpLoopMerge %51 %52 None
               OpBranch %53
         %53 = OpLabel
         %54 = OpLoad %10 %38
         %55 = OpLoad %10 %38
         %56 = OpISub %10 %55 %29
         %57 = OpExtInst %10 %1 SMin %56 %45
         %58 = OpSLessThanEqual %36 %54 %57
               OpBranchConditional %58 %50 %51
         %50 = OpLabel
               OpStore %59 %60
               OpBranch %61
         %61 = OpLabel
               OpLoopMerge %63 %64 None
               OpBranch %65
         %65 = OpLabel
         %66 = OpLoad %10 %59
         %67 = OpSGreaterThanEqual %36 %66 %29
               OpBranchConditional %67 %62 %63
         %62 = OpLabel
         %68 = OpLoad %10 %59
         %75 = OpAccessChain %74 %73 %17 %17
         %76 = OpLoad %6 %75
         %78 = OpAccessChain %77 %9 %68
         %79 = OpLoad %6 %78
         %80 = OpFDiv %6 %79 %76
         %81 = OpAccessChain %77 %9 %68
               OpStore %81 %80
               OpBranch %64
         %64 = OpLabel
         %82 = OpLoad %10 %59
         %83 = OpISub %10 %82 %29
               OpStore %59 %83
               OpBranch %61
         %63 = OpLabel
               OpBranch %52
         %52 = OpLabel
               OpBranch %49
         %51 = OpLabel
               OpBranch %42
         %42 = OpLabel
         %84 = OpLoad %10 %28
         %85 = OpIMul %10 %18 %84
         %86 = OpLoad %10 %38
         %87 = OpIAdd %10 %86 %85
               OpStore %38 %87
               OpBranch %39
         %41 = OpLabel
               OpBranch %33
         %33 = OpLabel
         %88 = OpLoad %10 %28
         %89 = OpIMul %10 %88 %18
               OpStore %28 %89
               OpBranch %30
         %32 = OpLabel
         %90 = OpLoad %10 %25
         %91 = OpAccessChain %19 %16 %17 %29
         %92 = OpLoad %10 %91
         %93 = OpIEqual %36 %90 %92
               OpSelectionMerge %95 None
               OpBranchConditional %93 %94 %95
         %94 = OpLabel
         %96 = OpLoad %7 %9
         %97 = OpAccessChain %19 %16 %17 %18
         %98 = OpLoad %10 %97
         %99 = OpConvertSToF %6 %98
        %100 = OpCompositeConstruct %7 %99 %99 %99 %99
        %102 = OpFOrdEqual %101 %96 %100
        %103 = OpAll %36 %102
               OpBranch %95
         %95 = OpLabel
        %104 = OpPhi %36 %93 %32 %103 %94
               OpSelectionMerge %106 None
               OpBranchConditional %104 %105 %122
        %105 = OpLabel
        %109 = OpAccessChain %19 %16 %17 %18
        %110 = OpLoad %10 %109
        %111 = OpConvertSToF %6 %110
        %112 = OpAccessChain %19 %16 %17 %17
        %113 = OpLoad %10 %112
        %114 = OpConvertSToF %6 %113
        %115 = OpAccessChain %19 %16 %17 %17
        %116 = OpLoad %10 %115
        %117 = OpConvertSToF %6 %116
        %118 = OpAccessChain %19 %16 %17 %18
        %119 = OpLoad %10 %118
        %120 = OpConvertSToF %6 %119
        %121 = OpCompositeConstruct %7 %111 %114 %117 %120
               OpStore %108 %121
               OpBranch %106
        %122 = OpLabel
        %123 = OpAccessChain %19 %16 %17 %17
        %124 = OpLoad %10 %123
        %125 = OpConvertSToF %6 %124
        %126 = OpCompositeConstruct %7 %125 %125 %125 %125
               OpStore %108 %126
               OpBranch %106
        %106 = OpLabel
               OpReturn
               OpFunctionEnd

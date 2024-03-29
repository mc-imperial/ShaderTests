; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 116
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %96
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "a"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %23 "b"
               OpName %49 "indexable"
               OpName %52 "i"
               OpName %65 "j"
               OpName %96 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %96 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 3
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 0
         %19 = OpConstant %6 1
         %20 = OpTypePointer Uniform %6
         %44 = OpConstant %12 10
         %45 = OpTypeArray %6 %44
         %48 = OpTypePointer Function %45
         %63 = OpTypeBool
         %93 = OpTypeFloat 32
         %94 = OpTypeVector %93 4
         %95 = OpTypePointer Output %94
         %96 = OpVariable %95 Output
        %100 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %87 = OpFunctionCall %6 %8
         %88 = OpAccessChain %20 %17 %18 %19
         %89 = OpLoad %6 %88
         %90 = OpIEqual %63 %87 %89
               OpSelectionMerge %92 None
               OpBranchConditional %90 %91 %111
         %91 = OpLabel
         %97 = OpAccessChain %20 %17 %18 %19
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %93 %98
        %101 = OpAccessChain %20 %17 %18 %100
        %102 = OpLoad %6 %101
        %103 = OpConvertSToF %93 %102
        %104 = OpAccessChain %20 %17 %18 %100
        %105 = OpLoad %6 %104
        %106 = OpConvertSToF %93 %105
        %107 = OpAccessChain %20 %17 %18 %19
        %108 = OpLoad %6 %107
        %109 = OpConvertSToF %93 %108
        %110 = OpCompositeConstruct %94 %99 %103 %106 %109
               OpStore %96 %110
               OpBranch %92
        %111 = OpLabel
        %112 = OpAccessChain %20 %17 %18 %100
        %113 = OpLoad %6 %112
        %114 = OpConvertSToF %93 %113
        %115 = OpCompositeConstruct %94 %114 %114 %114 %114
               OpStore %96 %115
               OpBranch %92
         %92 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %11 = OpVariable %10 Function
         %23 = OpVariable %10 Function
         %49 = OpVariable %48 Function
         %52 = OpVariable %10 Function
         %65 = OpVariable %10 Function
         %21 = OpAccessChain %20 %17 %18 %19
         %22 = OpLoad %6 %21
               OpStore %11 %22
         %24 = OpAccessChain %20 %17 %18 %19
         %25 = OpLoad %6 %24
         %26 = OpAccessChain %20 %17 %18 %19
         %27 = OpLoad %6 %26
         %28 = OpAccessChain %20 %17 %18 %19
         %29 = OpLoad %6 %28
         %30 = OpAccessChain %20 %17 %18 %19
         %31 = OpLoad %6 %30
         %32 = OpAccessChain %20 %17 %18 %19
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %20 %17 %18 %19
         %35 = OpLoad %6 %34
         %36 = OpAccessChain %20 %17 %18 %19
         %37 = OpLoad %6 %36
         %38 = OpAccessChain %20 %17 %18 %19
         %39 = OpLoad %6 %38
         %40 = OpAccessChain %20 %17 %18 %19
         %41 = OpLoad %6 %40
         %42 = OpAccessChain %20 %17 %18 %19
         %43 = OpLoad %6 %42
         %46 = OpCompositeConstruct %45 %25 %27 %29 %31 %33 %35 %37 %39 %41 %43
         %47 = OpLoad %6 %11
               OpStore %49 %46
         %50 = OpAccessChain %10 %49 %47
         %51 = OpLoad %6 %50
               OpStore %23 %51
         %53 = OpAccessChain %20 %17 %18 %19
         %54 = OpLoad %6 %53
               OpStore %52 %54
               OpBranch %55
         %55 = OpLabel
               OpLoopMerge %57 %58 None
               OpBranch %59
         %59 = OpLabel
         %60 = OpLoad %6 %52
         %61 = OpAccessChain %20 %17 %18 %18
         %62 = OpLoad %6 %61
         %64 = OpSLessThan %63 %60 %62
               OpBranchConditional %64 %56 %57
         %56 = OpLabel
         %66 = OpAccessChain %20 %17 %18 %19
         %67 = OpLoad %6 %66
               OpStore %65 %67
               OpBranch %68
         %68 = OpLabel
               OpLoopMerge %70 %71 None
               OpBranch %72
         %72 = OpLabel
         %73 = OpLoad %6 %23
         %74 = OpLoad %6 %52
         %75 = OpLoad %6 %23
         %76 = OpExtInst %6 %1 SMin %74 %75
         %77 = OpSLessThan %63 %73 %76
               OpBranchConditional %77 %69 %70
         %69 = OpLabel
         %78 = OpLoad %6 %11
         %79 = OpIAdd %6 %78 %19
               OpStore %11 %79
               OpBranch %71
         %71 = OpLabel
         %80 = OpLoad %6 %65
         %81 = OpIAdd %6 %80 %19
               OpStore %65 %81
               OpBranch %68
         %70 = OpLabel
               OpBranch %58
         %58 = OpLabel
         %82 = OpLoad %6 %52
         %83 = OpIAdd %6 %82 %19
               OpStore %52 %83
               OpBranch %55
         %57 = OpLabel
         %84 = OpLoad %6 %11
               OpReturnValue %84
               OpFunctionEnd

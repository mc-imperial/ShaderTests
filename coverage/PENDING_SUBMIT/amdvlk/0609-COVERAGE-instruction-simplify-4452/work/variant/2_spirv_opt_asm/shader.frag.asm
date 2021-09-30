; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 102
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %56
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "i"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %33 "S0"
               OpMemberName %33 0 "a"
               OpName %36 "S1"
               OpMemberName %36 0 "data0"
               OpMemberName %36 1 "data1"
               OpName %56 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %56 Location 0
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
         %19 = OpConstant %6 2
         %20 = OpTypePointer Uniform %6
         %31 = OpTypeBool
         %33 = OpTypeStruct %6
         %34 = OpTypeFloat 32
         %35 = OpTypeVector %34 4
         %36 = OpTypeStruct %33 %35
         %37 = OpTypePointer Function %36
         %39 = OpConstant %6 1
         %55 = OpTypePointer Output %35
         %56 = OpVariable %55 Output
         %78 = OpTypePointer Function %33
         %80 = OpTypePointer Function %35
         %99 = OpUndef %35
        %101 = OpUndef %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %49 = OpFunctionCall %6 %8
         %50 = OpAccessChain %20 %17 %18 %39
         %51 = OpLoad %6 %50
         %52 = OpIEqual %31 %49 %51
               OpSelectionMerge %54 None
               OpBranchConditional %52 %53 %70
         %53 = OpLabel
         %59 = OpConvertSToF %34 %51
         %60 = OpAccessChain %20 %17 %18 %19
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %34 %61
         %69 = OpCompositeConstruct %35 %59 %62 %62 %59
               OpStore %56 %69
               OpBranch %54
         %70 = OpLabel
         %71 = OpAccessChain %20 %17 %18 %19
         %72 = OpLoad %6 %71
         %73 = OpConvertSToF %34 %72
         %74 = OpCompositeConstruct %35 %73 %73 %73 %73
               OpStore %56 %74
               OpBranch %54
         %54 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %91 = OpVariable %10 Function
         %81 = OpVariable %80 Function
         %11 = OpVariable %10 Function
         %21 = OpAccessChain %20 %17 %18 %19
         %22 = OpLoad %6 %21
               OpStore %11 %22
               OpBranch %23
         %23 = OpLabel
        %100 = OpPhi %6 %101 %9 %94 %24
         %98 = OpPhi %35 %99 %9 %98 %24
         %97 = OpPhi %6 %22 %9 %44 %24
         %29 = OpAccessChain %20 %17 %18 %18
         %30 = OpLoad %6 %29
         %32 = OpSLessThan %31 %97 %30
               OpLoopMerge %25 %24 None
               OpBranchConditional %32 %24 %25
         %24 = OpLabel
         %40 = OpAccessChain %20 %17 %18 %39
         %41 = OpLoad %6 %40
         %93 = OpCompositeConstruct %33 %100
         %85 = OpCompositeConstruct %36 %93 %98
         %76 = OpCompositeInsert %36 %41 %85 0 0
         %86 = OpCompositeExtract %33 %76 0
         %94 = OpCompositeExtract %6 %86 0
               OpStore %91 %94
               OpStore %81 %98
         %44 = OpIAdd %6 %97 %39
               OpStore %11 %44
               OpBranch %23
         %25 = OpLabel
         %96 = OpCompositeConstruct %33 %100
         %90 = OpCompositeConstruct %36 %96 %98
               OpReturnValue %100
               OpFunctionEnd

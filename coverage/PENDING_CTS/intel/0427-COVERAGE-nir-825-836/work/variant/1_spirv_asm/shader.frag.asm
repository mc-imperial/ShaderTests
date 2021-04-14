; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 63
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %61
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v0"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_float_values"
               OpName %15 ""
               OpName %24 "v1"
               OpName %30 "buf1"
               OpMemberName %30 0 "zero"
               OpName %32 ""
               OpName %61 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpMemberDecorate %30 0 Offset 0
               OpDecorate %30 Block
               OpDecorate %32 DescriptorSet 0
               OpDecorate %32 Binding 1
               OpDecorate %61 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 2
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpTypeInt 32 1
         %17 = OpConstant %16 0
         %18 = OpTypePointer Uniform %6
         %22 = OpTypeVector %6 4
         %23 = OpTypePointer Function %22
         %25 = OpConstant %10 0
         %26 = OpTypePointer Function %6
         %30 = OpTypeStruct %6
         %31 = OpTypePointer Uniform %30
         %32 = OpVariable %31 Uniform
         %37 = OpTypeBool
         %43 = OpConstant %16 1
         %60 = OpTypePointer Output %22
         %61 = OpVariable %60 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %24 = OpVariable %23 Function
         %19 = OpAccessChain %18 %15 %17 %17
         %20 = OpLoad %6 %19
         %21 = OpCompositeConstruct %7 %20 %20
               OpStore %9 %21
         %27 = OpAccessChain %26 %9 %25
         %28 = OpLoad %6 %27
         %29 = OpCompositeConstruct %22 %28 %28 %28 %28
               OpStore %24 %29
         %33 = OpAccessChain %18 %32 %17
         %34 = OpLoad %6 %33
         %35 = OpAccessChain %18 %15 %17 %17
         %36 = OpLoad %6 %35
         %38 = OpFUnordNotEqual %37 %34 %36
               OpSelectionMerge %40 None
               OpBranchConditional %38 %39 %58
         %39 = OpLabel
         %41 = OpAccessChain %18 %32 %17
         %42 = OpLoad %6 %41
         %44 = OpAccessChain %18 %15 %17 %43
         %45 = OpLoad %6 %44
         %46 = OpFOrdEqual %37 %42 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %48
         %47 = OpLabel
               OpReturn
         %48 = OpLabel
         %50 = OpAccessChain %18 %15 %17 %17
         %51 = OpLoad %6 %50
         %52 = OpLoad %22 %24
         %53 = OpVectorShuffle %7 %52 %52 1 2
         %54 = OpCompositeConstruct %7 %51 %51
         %55 = OpFSub %7 %53 %54
         %56 = OpLoad %22 %24
         %57 = OpVectorShuffle %22 %56 %55 0 4 5 3
               OpStore %24 %57
               OpBranch %40
         %58 = OpLabel
               OpKill
         %40 = OpLabel
         %62 = OpLoad %22 %24
               OpStore %61 %62
               OpReturn
               OpFunctionEnd

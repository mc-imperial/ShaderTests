; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 55
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %22 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %22 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpTypePointer Uniform %6
         %19 = OpTypeFloat 32
         %20 = OpTypeVector %19 4
         %21 = OpTypePointer Output %20
         %22 = OpVariable %21 Output
         %23 = OpConstant %6 1
         %33 = OpConstant %6 2
         %37 = OpTypeBool
         %39 = OpConstantTrue %37
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %17 = OpAccessChain %16 %14 %15 %15
         %18 = OpLoad %6 %17
               OpStore %8 %18
         %24 = OpAccessChain %16 %14 %15 %23
         %25 = OpLoad %6 %24
         %26 = OpConvertSToF %19 %25
         %27 = OpCompositeConstruct %20 %26 %26 %26 %26
               OpStore %22 %27
               OpBranch %28
         %28 = OpLabel
               OpLoopMerge %30 %31 None
               OpBranch %32
         %32 = OpLabel
         %34 = OpAccessChain %16 %14 %15 %33
         %35 = OpLoad %6 %34
         %36 = OpLoad %6 %8
         %38 = OpIEqual %37 %35 %36
         %40 = OpLogicalNotEqual %37 %38 %39
               OpBranchConditional %40 %29 %30
         %29 = OpLabel
         %41 = OpAccessChain %16 %14 %15 %15
         %42 = OpLoad %6 %41
         %43 = OpConvertSToF %19 %42
         %44 = OpAccessChain %16 %14 %15 %23
         %45 = OpLoad %6 %44
         %46 = OpConvertSToF %19 %45
         %47 = OpAccessChain %16 %14 %15 %23
         %48 = OpLoad %6 %47
         %49 = OpConvertSToF %19 %48
         %50 = OpAccessChain %16 %14 %15 %15
         %51 = OpLoad %6 %50
         %52 = OpConvertSToF %19 %51
         %53 = OpCompositeConstruct %20 %43 %46 %49 %52
               OpStore %22 %53
               OpBranch %30
         %31 = OpLabel
               OpBranch %28
         %30 = OpLabel
               OpReturn
               OpFunctionEnd

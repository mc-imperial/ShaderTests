; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 55
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %36
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "a"
               OpName %22 "buf0"
               OpMemberName %22 0 "_GLF_uniform_int_values"
               OpName %24 ""
               OpName %36 "_GLF_color"
               OpDecorate %21 ArrayStride 16
               OpMemberDecorate %22 0 Offset 0
               OpDecorate %22 Block
               OpDecorate %24 DescriptorSet 0
               OpDecorate %24 Binding 0
               OpDecorate %36 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 2
         %10 = OpTypeInt 32 1
         %11 = OpTypePointer Function %10
         %13 = OpConstant %6 1
         %19 = OpTypeInt 32 0
         %20 = OpConstant %19 2
         %21 = OpTypeArray %10 %20
         %22 = OpTypeStruct %21
         %23 = OpTypePointer Uniform %22
         %24 = OpVariable %23 Uniform
         %25 = OpConstant %10 0
         %26 = OpConstant %10 1
         %27 = OpTypePointer Uniform %10
         %30 = OpTypeBool
         %34 = OpTypeVector %6 4
         %35 = OpTypePointer Output %34
         %36 = OpVariable %35 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %12 = OpVariable %11 Function
               OpStore %8 %9
         %14 = OpLoad %6 %8
         %15 = OpExtInst %6 %1 FClamp %13 %13 %14
         %16 = OpFSub %6 %13 %15
         %17 = OpConvertFToS %10 %16
               OpStore %12 %17
         %18 = OpLoad %10 %12
         %28 = OpAccessChain %27 %24 %25 %26
         %29 = OpLoad %10 %28
         %31 = OpIEqual %30 %18 %29
               OpSelectionMerge %33 None
               OpBranchConditional %31 %32 %50
         %32 = OpLabel
         %37 = OpAccessChain %27 %24 %25 %25
         %38 = OpLoad %10 %37
         %39 = OpConvertSToF %6 %38
         %40 = OpAccessChain %27 %24 %25 %26
         %41 = OpLoad %10 %40
         %42 = OpConvertSToF %6 %41
         %43 = OpAccessChain %27 %24 %25 %26
         %44 = OpLoad %10 %43
         %45 = OpConvertSToF %6 %44
         %46 = OpAccessChain %27 %24 %25 %25
         %47 = OpLoad %10 %46
         %48 = OpConvertSToF %6 %47
         %49 = OpCompositeConstruct %34 %39 %42 %45 %48
               OpStore %36 %49
               OpBranch %33
         %50 = OpLabel
         %51 = OpAccessChain %27 %24 %25 %26
         %52 = OpLoad %10 %51
         %53 = OpConvertSToF %6 %52
         %54 = OpCompositeConstruct %34 %53 %53 %53 %53
               OpStore %36 %54
               OpBranch %33
         %33 = OpLabel
               OpReturn
               OpFunctionEnd
